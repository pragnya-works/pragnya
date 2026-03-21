"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Bookmark, Share2, Shield, ThumbsUp } from "lucide-react";

const YOUTUBE_EMBED_URL =
  "https://www.youtube-nocookie.com/embed/zIBuOmr92_s?rel=0&modestbranding=1&playsinline=1";
const YOUTUBE_VIDEO_URL = "https://www.youtube.com/watch?v=zIBuOmr92_s";
const YOUTUBE_VIDEO_TITLE =
  "I Built an AI Agent that Ships Modern Web Apps in Seconds";
const YOUTUBE_CHANNEL_NAME = "Shubhojeet Bera";
const YOUTUBE_CHANNEL_HANDLE = "@shubhojeetbera";
const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@shubhojeetbera";
const mobileActionLinkClass =
  "flex h-9 w-9 items-center justify-center rounded-full bg-white/8 text-white/78 focus:outline-none focus-visible:outline-none";

function EmbeddedVideo({
  shouldLoadVideo,
  className = "rounded-[inherit]",
}: {
  shouldLoadVideo: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative aspect-video w-full overflow-hidden bg-black ${className}`}
    >
      {shouldLoadVideo ? (
        <iframe
          src={YOUTUBE_EMBED_URL}
          title="Edward product demo on YouTube"
          className="absolute inset-0 h-full w-full"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <div className="absolute inset-0 overflow-hidden bg-black">
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(255,196,100,0.2),transparent_22%),radial-gradient(circle_at_18%_85%,rgba(120,10,10,0.3),transparent_28%),linear-gradient(135deg,#140909_0%,#201014_35%,#050505_100%)]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_86%_58%,rgba(255,206,111,0.42),transparent_15%),linear-gradient(130deg,transparent_58%,rgba(255,214,128,0.3)_73%,transparent_82%)]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),transparent_18%,transparent_78%,rgba(0,0,0,0.24))]"
            aria-hidden="true"
          />
          <div className="relative flex h-full items-center justify-center">
            <div
              className="h-18 w-18 rounded-[1.6rem] bg-[#ff1d12] shadow-[0_20px_40px_rgba(255,29,18,0.28)] sm:h-24 sm:w-24 sm:rounded-[1.85rem]"
              aria-hidden="true"
            >
              <div className="flex h-full items-center justify-center">
                <div className="ml-1 h-0 w-0 border-y-[12px] border-l-[20px] border-y-transparent border-l-white sm:border-y-[14px] sm:border-l-[24px]" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function DeviceVideoShell({ shouldLoadVideo }: { shouldLoadVideo: boolean }) {
  return (
    <div className="mx-auto w-full max-w-[46rem]">
      <div className="hidden overflow-hidden rounded-[18px] border border-white/10 bg-[#161616] shadow-[0_18px_48px_rgba(0,0,0,0.34)] lg:block">
        <div className="h-14 border-b border-white/8 bg-[#1d1d1d] px-4" aria-hidden="true">
          <div className="grid h-full grid-cols-[minmax(4.75rem,1fr)_minmax(0,21.5rem)_minmax(4.75rem,1fr)] items-center gap-3">
            <div className="flex items-center gap-2.5">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>

            <div className="min-w-0">
              <div className="w-full rounded-[10px] border border-white/8 bg-[#111111] px-4 py-2.5">
                <div className="flex items-center justify-center gap-2 text-white/38">
                  <Image
                    src="/edward-favicon.ico"
                    alt=""
                    width={16}
                    height={16}
                    sizes="16px"
                    className="h-4 w-4 shrink-0 rounded-[6px]"
                    loading="lazy"
                  />
                  <div className="min-w-0 truncate text-center text-[11px] font-medium tracking-normal text-white/60">
                    Edward
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <Shield className="h-4 w-4 text-[#2b6fe8]" />
            </div>
          </div>
        </div>

        <div className="bg-[#161616] p-3">
          <div className="overflow-hidden rounded-[12px] border border-white/8 bg-black">
            <EmbeddedVideo shouldLoadVideo={shouldLoadVideo} />
          </div>
        </div>
      </div>

      <div className="hidden overflow-hidden rounded-[24px] border border-white/10 bg-[#121212] px-4 pb-4 pt-3 shadow-[0_18px_42px_rgba(0,0,0,0.34)] sm:block lg:hidden">
        <div className="mx-auto mb-3 h-1.5 w-20 rounded-full bg-white/18" aria-hidden="true" />
        <div className="overflow-hidden rounded-[16px] border border-white/8 bg-black">
          <EmbeddedVideo shouldLoadVideo={shouldLoadVideo} />
        </div>
      </div>

      <div className="mx-auto aspect-[390/780] w-full max-w-[19rem] overflow-hidden rounded-[26px] border border-white/10 bg-[#0b0b0b] p-2.5 shadow-[0_22px_40px_rgba(0,0,0,0.38)] sm:hidden">
        <div className="flex h-full flex-col overflow-hidden rounded-[22px] bg-[#0f0f0f]">
          <div className="flex justify-center pb-2 pt-2.5" aria-hidden="true">
            <div className="h-5 w-24 rounded-full bg-black" />
          </div>

          <div className="px-2.5 pb-3">
            <EmbeddedVideo
              shouldLoadVideo={shouldLoadVideo}
              className="rounded-[12px]"
            />
          </div>

          <div className="flex min-h-0 flex-1 flex-col px-3.5 pb-3.5">
            <div className="space-y-1.5">
              <div className="text-[13px] font-semibold leading-[1.35] text-white">
                {YOUTUBE_VIDEO_TITLE}
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <Image
                  src="/shubhojeet-avatar.jpg"
                  alt={YOUTUBE_CHANNEL_NAME}
                  width={36}
                  height={36}
                  sizes="36px"
                  className="h-9 w-9 shrink-0 rounded-full object-cover"
                  loading="lazy"
                />
                <div className="min-w-0">
                  <div className="truncate text-[12px] font-medium text-white">
                    {YOUTUBE_CHANNEL_NAME}
                  </div>
                  <div className="text-[10px] text-white/60">
                    {YOUTUBE_CHANNEL_HANDLE}
                  </div>
                </div>
              </div>
              <a
                href={YOUTUBE_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-3 py-1.5 text-[10px] font-semibold text-black"
              >
                Subscribe
              </a>
            </div>

            <div className="mt-3 flex gap-2 overflow-hidden">
              <a
                href={YOUTUBE_VIDEO_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open video on YouTube"
                title="Open video on YouTube"
                className={mobileActionLinkClass}
              >
                <ThumbsUp className="h-3.5 w-3.5" />
              </a>
              <a
                href={YOUTUBE_VIDEO_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share the video on YouTube"
                title="Share the video on YouTube"
                className={mobileActionLinkClass}
              >
                <Share2 className="h-3.5 w-3.5" />
              </a>
              <a
                href={YOUTUBE_VIDEO_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Save the video on YouTube"
                title="Save the video on YouTube"
                className={mobileActionLinkClass}
              >
                <Bookmark className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="mt-3 rounded-[14px] bg-white/6 px-3 py-3">
              <div className="mb-2 text-[10px] uppercase tracking-[0.18em] text-white/55">
                Comments
              </div>
              <div className="h-2.5 w-full rounded-full bg-white/8" />
              <div className="mt-2 h-2.5 w-4/5 rounded-full bg-white/8" />
            </div>

            <div className="mt-3 space-y-2">
              <div className="h-12 rounded-[14px] bg-white/5" />
              <div className="h-12 rounded-[14px] bg-white/5" />
            </div>

            <div className="mt-auto flex justify-center pt-3" aria-hidden="true">
              <div className="h-1 w-20 rounded-full bg-white/18" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductEdwardVideo() {
  const showcaseRef = useRef<HTMLDivElement>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    const node = showcaseRef.current;

    if (!node || typeof window === "undefined") {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      const frame = globalThis.requestAnimationFrame(() => {
        setShouldLoadVideo(true);
      });

      return () => globalThis.cancelAnimationFrame(frame);
    }

    const observer = new window.IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (entry?.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "240px 0px",
        threshold: 0.15,
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={showcaseRef}
      style={{ contentVisibility: "auto", containIntrinsicSize: "700px 520px" }}
    >
      <DeviceVideoShell shouldLoadVideo={shouldLoadVideo} />
    </div>
  );
}
