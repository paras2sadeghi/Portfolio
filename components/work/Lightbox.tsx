"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { getLenis } from "@/hooks/useLenisGsap";

export interface LightboxImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/**
 * "Look closer" viewer for case-study screenshots. Built on <dialog> so focus
 * is trapped and Escape closes it natively; arrow keys step through every
 * screenshot on the page, and clicking the backdrop closes it.
 */
export default function Lightbox({
  images,
  index,
  onChange,
  onClose,
}: {
  images: LightboxImage[];
  index: number | null;
  onChange: (index: number) => void;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement | null>(null);
  const open = index !== null;

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    const lenis = getLenis();
    if (open && !dialog.open) {
      dialog.showModal();
      lenis?.stop();
    } else if (!open && dialog.open) {
      dialog.close();
    }
    return () => {
      if (open) lenis?.start();
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (index === null) return;
      if (e.key === "ArrowRight") onChange((index + 1) % images.length);
      if (e.key === "ArrowLeft") onChange((index - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, index, images.length, onChange]);

  const image = index === null ? null : images[index];
  const tall = image ? image.height > image.width : false;

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      aria-label="Screenshot viewer"
      className="m-0 h-dvh max-h-none w-screen max-w-none bg-transparent p-0 text-white backdrop:bg-ink/92 backdrop:backdrop-blur-sm"
    >
      {image && (
        <div
          className="flex h-full flex-col items-center justify-center gap-5 px-4 py-6 md:px-16"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <div className="flex w-full max-w-[1600px] items-center justify-between text-sm text-white/75">
            <span className="tabular-nums">
              {String(index! + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={onClose}
              autoFocus
              className="rounded-full border border-white/30 px-4 py-2 text-white transition-colors hover:bg-white hover:text-ink"
            >
              Close <span aria-hidden>✕</span>
            </button>
          </div>

          <div className={`relative min-h-0 w-full flex-1 ${tall ? "max-w-md" : "max-w-[1600px]"}`}>
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              fill
              unoptimized={process.env.NODE_ENV !== "production"}
              sizes="100vw"
              className="object-contain"
            />
          </div>

          <div className="flex w-full max-w-[1600px] items-center justify-between gap-6">
            <button
              type="button"
              onClick={() => onChange((index! - 1 + images.length) % images.length)}
              aria-label="Previous screenshot"
              className="shrink-0 rounded-full border border-white/30 p-3 transition-colors hover:bg-white hover:text-ink"
            >
              <span aria-hidden>←</span>
            </button>
            <p className="max-w-2xl text-center text-sm leading-relaxed text-white/80">{image.alt}</p>
            <button
              type="button"
              onClick={() => onChange((index! + 1) % images.length)}
              aria-label="Next screenshot"
              className="shrink-0 rounded-full border border-white/30 p-3 transition-colors hover:bg-white hover:text-ink"
            >
              <span aria-hidden>→</span>
            </button>
          </div>
        </div>
      )}
    </dialog>
  );
}
