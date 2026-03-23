import { ImageResponse } from "next/og";
import {
  getSocialImageFonts,
  SocialImageCard,
  socialImageAlt,
  socialImageContentType,
  socialImageSize,
} from "@/lib/social-image";

export const runtime = "nodejs";
export const alt = socialImageAlt;
export const size = socialImageSize;
export const contentType = socialImageContentType;

export default async function TwitterImage() {
  return new ImageResponse(<SocialImageCard />, {
    ...socialImageSize,
    fonts: await getSocialImageFonts(),
  });
}
