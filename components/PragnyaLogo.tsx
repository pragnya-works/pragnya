import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

const PRAGNYA_LOGO_WIDTH = 402;
const PRAGNYA_LOGO_HEIGHT = 149;

type PragnyaLogoProps = Omit<ImageProps, "src" | "width" | "height" | "alt"> & {
  alt?: string;
};

export function PragnyaLogo({
  alt = "",
  className,
  ...props
}: PragnyaLogoProps) {
  const isDecorative = alt.length === 0;

  return (
    <Image
      src="/pragnya-mark.svg"
      alt={alt}
      width={PRAGNYA_LOGO_WIDTH}
      height={PRAGNYA_LOGO_HEIGHT}
      className={cn(
        "block h-auto w-auto max-w-full shrink-0 select-none object-contain align-middle",
        className,
      )}
      unoptimized
      draggable={false}
      aria-hidden={isDecorative ? true : undefined}
      {...props}
    />
  );
}
