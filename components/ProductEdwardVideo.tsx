"use client";

import { useState } from "react";
import Image from "next/image";
import { Lock, Shield } from "lucide-react";

const VIDEO_ID = "zIBuOmr92_s";
const POSTER_URL = `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`;
const EMBED_URL = `https://www.youtube-nocookie.com/embed/${VIDEO_ID}?rel=0&modestbranding=1&playsinline=1&autoplay=1`;

function YouTubePlayIcon() {
  return (
    <span className="flex size-14 items-center justify-center rounded-full bg-[#ff0000] text-white shadow-xl transition-transform duration-200 ease-out group-hover:scale-110 sm:size-16">
      <svg
        viewBox="0 0 24 24"
        className="ml-0.5 size-6 fill-current sm:size-7"
        aria-hidden="true"
      >
        <path d="M8 5v14l11-7z" />
      </svg>
    </span>
  );
}

function EmbeddedVideo({
  shouldLoad,
  onClick,
}: {
  shouldLoad: boolean;
  onClick: () => void;
}) {
  return (
    <div className="group relative aspect-video w-full overflow-hidden rounded-sm bg-ink">
      {shouldLoad ? (
        <iframe
          src={EMBED_URL}
          title="Edward product demo"
          className="absolute inset-0 size-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <button
          type="button"
          onClick={onClick}
          className="absolute inset-0 block w-full text-left"
          aria-label="Play Edward demo video"
        >
          <Image
            src={POSTER_URL}
            alt="Edward demo video poster"
            fill
            className="object-cover opacity-80 transition-opacity duration-500 group-hover:opacity-100"
            sizes="(max-width: 1024px) 100vw, 50vw"
            unoptimized
          />
          <span className="absolute inset-0 flex items-center justify-center">
            <YouTubePlayIcon />
          </span>
        </button>
      )}
    </div>
  );
}

function BrowserChrome({
  shouldLoad,
  onClick,
}: {
  shouldLoad: boolean;
  onClick: () => void;
}) {
  return (
    <div className="hidden overflow-hidden rounded-sm border border-paper/10 bg-surface-raised shadow-[0_24px_64px_rgba(0,0,0,0.42)] lg:block">
      <div className="grid h-12 grid-cols-[5.5rem_1fr_5.5rem] items-center gap-3 border-b border-paper/5 px-4">
        <div className="flex items-center gap-2">
          <span className="size-3 rounded-full bg-[#ff5f57]" aria-hidden="true" />
          <span className="size-3 rounded-full bg-[#febc2e]" aria-hidden="true" />
          <span className="size-3 rounded-full bg-[#28c840]" aria-hidden="true" />
        </div>

        <div className="flex justify-center">
          <div className="flex w-full max-w-md items-center justify-center gap-2 rounded-lg bg-paper/5 px-3 py-1.5 text-[11px] font-medium text-paper/70">
            <Lock className="size-3 text-paper/40" aria-hidden="true" />
            <span className="truncate">youtube.com/watch?v={VIDEO_ID}</span>
          </div>
        </div>

        <div className="flex justify-end">
          <Shield className="size-4 text-paper/30" aria-hidden="true" />
        </div>
      </div>

      <div className="p-2">
        <EmbeddedVideo shouldLoad={shouldLoad} onClick={onClick} />
      </div>
    </div>
  );
}

function MobileVideo({
  shouldLoad,
  onClick,
}: {
  shouldLoad: boolean;
  onClick: () => void;
}) {
  return (
    <div className="lg:hidden">
      <EmbeddedVideo shouldLoad={shouldLoad} onClick={onClick} />
    </div>
  );
}

export function ProductEdwardVideo() {
  const [load, setLoad] = useState(false);

  return (
    <div>
      <BrowserChrome shouldLoad={load} onClick={() => setLoad(true)} />
      <MobileVideo shouldLoad={load} onClick={() => setLoad(true)} />
    </div>
  );
}
