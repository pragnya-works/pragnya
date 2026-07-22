import { cn } from "@/lib/utils";

type PragnyaLogoProps = {
  alt?: string;
  className?: string;
  priority?: boolean;
  loading?: "eager" | "lazy";
};

const PRAGNYA_LOGO_WIDTH = 152;
const PRAGNYA_LOGO_HEIGHT = 56;

export function PragnyaLogo({
  alt = "",
  className,
  priority = false,
  loading,
}: PragnyaLogoProps) {
  const isDecorative = alt.length === 0;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/pragnya-mark-sm.png"
      alt={alt}
      width={PRAGNYA_LOGO_WIDTH}
      height={PRAGNYA_LOGO_HEIGHT}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      loading={loading ?? (priority ? "eager" : "lazy")}
      draggable={false}
      aria-hidden={isDecorative ? true : undefined}
      className={cn(
        "block h-auto w-auto max-w-full shrink-0 select-none object-contain align-middle",
        className,
      )}
    />
  );
}
