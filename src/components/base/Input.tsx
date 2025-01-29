import * as React from "react"

import { cn } from "@/lib/utils"

interface Props extends React.ComponentProps<"input"> {
  label?: string
}

const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ className, type, label, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        <label htmlFor={props.id} className="text-sm ml-1">{label}</label>
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md focus:outline-none font-normal text-input-text border border-primary/30 px-4 py-3 text-base ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-input-text focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:file:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
