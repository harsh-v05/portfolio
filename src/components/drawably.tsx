"use client";

/**
 * Client boundary for drawably. The library's React wrappers use hooks but
 * ship without a "use client" directive, so everything is re-exported from
 * here and server components import this file instead of "drawably/react".
 */
export {
  DrawablyArrow,
  DrawablyBadge,
  DrawablyButton,
  DrawablyCard,
  DrawablyCircle,
  DrawablyDivider,
  DrawablyHighlight,
  DrawablyInput,
  DrawablyList,
  DrawablyTextarea,
  DrawablyUnderline,
} from "drawably/react";
export type { DrawablyButtonState } from "drawably";

import Link from "next/link";
import { useEffect, useRef, type ComponentProps } from "react";
import { drawablyButton, type DrawablyButtonOptions } from "drawably";

type DrawablyLinkProps = DrawablyButtonOptions & ComponentProps<typeof Link>;

/** A Next.js <Link> drawn with the same sketched frame as a drawably button. */
export function DrawablyLink({
  seed,
  roughness,
  boil,
  stroke,
  fill,
  paper,
  width,
  variant,
  tone,
  className,
  children,
  ...rest
}: DrawablyLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const sketch = drawablyButton(ref.current, {
      seed,
      roughness,
      boil,
      stroke,
      fill,
      paper,
      width,
      variant,
      tone,
    });
    return () => sketch.destroy();
  }, [seed, roughness, boil, stroke, fill, paper, width, variant, tone, className]);

  return (
    <Link ref={ref} className={className} {...rest}>
      {children}
    </Link>
  );
}
