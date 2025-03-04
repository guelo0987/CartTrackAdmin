import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

const Separator = React.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={`shrink-0 bg-white mx-auto ${
      orientation === "horizontal" ? "h-[2px] w-[65%]" : "h-full w-[2px]"
    } ${className}`}
    {...props}
  />
))
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
