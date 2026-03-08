import { useEffect, useRef } from "react";

interface Sparkle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  rotation: number;
  rotSpeed: number;
  type: "star" | "dot";
  colorIndex: number;
}

const COLORS = [
  "#f5c842", // or
  "#d4af37", // or foncé
  "#fde68a", // or pâle
  "#f4a0b8", // rose doux
  "#e879a0", // rose vif
  "#ffc8d8", // rose clair
  "#f8d7e3", // rose très pâle
]

const drawStar = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  r: number,
  rotation: number
) => {
  const spikes = 4;
  const inner = r * 0.45;
  ctx.beginPath();
  for (let i = 0; i < spikes * 2; i++) {
    const angle = (i * Math.PI) / spikes + rotation;
    const radius = i % 2 === 0 ? r : inner;
    if (i === 0) ctx.moveTo(x + Math.cos(angle) * radius, y + Math.sin(angle) * radius);
    else ctx.lineTo(x + Math.cos(angle) * radius, y + Math.sin(angle) * radius);
  }
  ctx.closePath();
  ctx.fill();
};

const CursorEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let mouseX = -200;
    let mouseY = -200;
    let prevX = -200;
    let prevY = -200;
    const sparkles: Sparkle[] = [];
    let animId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      prevX = mouseX;
      prevY = mouseY;
      mouseX = e.clientX;
      mouseY = e.clientY;

      const dx = mouseX - prevX;
      const dy = mouseY - prevY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const steps = Math.max(1, Math.floor(dist / 8));

      for (let i = 0; i < steps; i++) {
        const t = i / steps;
        sparkles.push({
          x: prevX + dx * t + (Math.random() - 0.5) * 12,
          y: prevY + dy * t + (Math.random() - 0.5) * 12,
          vx: (Math.random() - 0.5) * 1.5,
          vy: -Math.random() * 1.8 - 0.4,
          life: 0,
          maxLife: 40 + Math.random() * 30,
          size: 1 + Math.random() * 2.5,
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.15,
          type: Math.random() > 0.45 ? "star" : "dot",
          colorIndex: Math.floor(Math.random() * COLORS.length),
        });
      }
    };

    window.addEventListener("mousemove", onMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = sparkles.length - 1; i >= 0; i--) {
        const s = sparkles[i];
        s.life++;
        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.04;
        s.vx *= 0.97;
        s.rotation += s.rotSpeed;

        const progress = s.life / s.maxLife;
        const alpha = progress < 0.2
          ? progress / 0.2
          : 1 - (progress - 0.2) / 0.8;

        if (alpha <= 0) {
          sparkles.splice(i, 1);
          continue;
        }

        const color = COLORS[s.colorIndex];
        ctx.save();
        ctx.globalAlpha = alpha * 0.9;
        ctx.shadowBlur = 8;
        ctx.shadowColor = s.colorIndex < 3 ? "#d4af37" : "#e879a0";
        ctx.fillStyle = color;

        if (s.type === "star") {
          drawStar(ctx, s.x, s.y, s.size * (1 - progress * 0.5), s.rotation);
        } else {
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size * 0.5 * (1 - progress * 0.4), 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
    />
  );
};

export default CursorEffect;
