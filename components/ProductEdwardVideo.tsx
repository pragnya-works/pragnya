"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

const VIDEO_ID = "zIBuOmr92_s";
const POSTER_URL = `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`;
const EMBED_URL = `https://www.youtube-nocookie.com/embed/${VIDEO_ID}?rel=0&modestbranding=1&playsinline=1&autoplay=1`;

export function ProductEdwardVideo() {
  const [load, setLoad] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px", threshold: 0.1 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="group relative aspect-video w-full overflow-hidden rounded-sm border border-paper/5 bg-surface-raised"
    >
      {load ? (
        <iframe
          src={EMBED_URL}
          title="Edward product demo"
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <>
          <Image
            src={POSTER_URL}
            alt=""
            fill
            className="object-cover opacity-70 transition-opacity group-hover:opacity-90"
            sizes="(max-width: 1024px) 100vw, 50vw"
            unoptimized
          />
          <button
            type="button"
            onClick={() => setLoad(true)}
            aria-label="Play Edward demo video"
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-paper/10 bg-ink/60 text-paper backdrop-blur-sm transition hover:scale-105 hover:border-accent/30 hover:text-accent">
              <Play className="h-6 w-6 fill-current" aria-hidden="true" />
            </span>
          </button>
        </>
      )}
    </div>
  );
}
