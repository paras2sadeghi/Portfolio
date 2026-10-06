"use client";

import { useEffect, useRef } from "react";

interface Petal {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  angle: number;
  spin: number;
  tilt: number;
  tiltSpeed: number;
  hue: number;
  alpha: number;
}

const COUNT_DESKTOP = 42;
const COUNT_MOBILE = 18;
const REPEL_RADIUS = 160;

/**
 * Bougainvillea bracts drifting down over the hero. The cursor pushes them
 * aside and scrolling adds a gust, so the photograph reacts to the visitor
 * from the very first frame. Canvas 2D, paused whenever the hero is offscreen.
 */
export default function PetalField({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = 0;
    let visible = true;
    let gust = 0;
    let lastScroll = window.scrollY;
    const pointer = { x: -9999, y: -9999, vx: 0, vy: 0 };

    const rand = (min: number, max: number) => min + Math.random() * (max - min);

    const spawn = (p: Partial<Petal> = {}): Petal => ({
      x: rand(0, width),
      y: rand(-height * 0.2, -20),
      vx: rand(-0.25, 0.25),
      vy: rand(0.35, 0.9),
      size: rand(7, 15),
      angle: rand(0, Math.PI * 2),
      spin: rand(-0.02, 0.02),
      tilt: rand(0, Math.PI * 2),
      tiltSpeed: rand(0.015, 0.04),
      hue: rand(318, 336),
      alpha: rand(0.7, 0.95),
      ...p,
    });

    let petals: Petal[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = width < 768 ? COUNT_MOBILE : COUNT_DESKTOP;
      if (petals.length !== count) {
        petals = Array.from({ length: count }, () =>
          spawn({ y: rand(-height * 0.1, height) })
        );
      }
    };

    // A bract is a rounded, slightly heart-shaped leaf; tilt squashes it on
    // one axis so it reads as flipping in the air.
    const drawPetal = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.scale(1, 0.35 + Math.abs(Math.sin(p.tilt)) * 0.65);
      const s = p.size;
      const grad = ctx.createLinearGradient(0, -s, 0, s);
      grad.addColorStop(0, `hsla(${p.hue}, 85%, 62%, ${p.alpha})`);
      grad.addColorStop(1, `hsla(${p.hue + 6}, 80%, 42%, ${p.alpha})`);
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.moveTo(0, s);
      ctx.bezierCurveTo(s * 1.1, s * 0.4, s * 0.9, -s * 0.9, 0, -s * 0.55);
      ctx.bezierCurveTo(-s * 0.9, -s * 0.9, -s * 1.1, s * 0.4, 0, s);
      ctx.fill();
      ctx.strokeStyle = `hsla(${p.hue}, 70%, 80%, ${p.alpha * 0.35})`;
      ctx.lineWidth = 0.6;
      ctx.beginPath();
      ctx.moveTo(0, s * 0.9);
      ctx.lineTo(0, -s * 0.4);
      ctx.stroke();
      ctx.restore();
    };

    const tick = () => {
      raf = 0;
      if (!visible) return;
      ctx.clearRect(0, 0, width, height);
      gust *= 0.94;

      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];

        const dx = p.x - pointer.x;
        const dy = p.y - pointer.y;
        const dist = Math.hypot(dx, dy);
        if (dist < REPEL_RADIUS && dist > 0.01) {
          const force = (1 - dist / REPEL_RADIUS) ** 2;
          p.vx += (dx / dist) * force * 1.4 + pointer.vx * force * 0.08;
          p.vy += (dy / dist) * force * 1.4 + pointer.vy * force * 0.08;
          p.spin += force * 0.01 * Math.sign(dx || 1);
        }

        // Settle back toward a lazy fall.
        p.vx += (Math.sin(p.tilt * 0.5) * 0.18 - p.vx) * 0.02 + gust * 0.04;
        p.vy += (0.6 - p.vy) * 0.02 - gust * 0.03;
        p.spin *= 0.99;

        p.x += p.vx;
        p.y += p.vy;
        p.angle += p.spin;
        p.tilt += p.tiltSpeed;

        if (p.y > height + 30 || p.x < -60 || p.x > width + 60 || p.y < -height) {
          petals[i] = spawn();
        }
        drawPetal(p);
      }

      pointer.vx *= 0.8;
      pointer.vy *= 0.8;
      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      if (!raf && visible) raf = requestAnimationFrame(tick);
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (pointer.x > -9000) {
        pointer.vx = x - pointer.x;
        pointer.vy = y - pointer.y;
      }
      pointer.x = x;
      pointer.y = y;
    };
    const onPointerLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };
    const onScroll = () => {
      const y = window.scrollY;
      gust = Math.max(-12, Math.min(12, gust + (y - lastScroll) * 0.05));
      lastScroll = y;
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
    });

    resize();
    observer.observe(canvas);
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    start();

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      ro.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
