"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => {
    const [checked, setChecked] = React.useState(false);

    return (
      <div className="relative">
        <input
          type="checkbox"
          className="absolute h-0 w-0 opacity-0"
          ref={ref}
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          {...props}
        />
        <div
          className={cn(
            "flex h-4 w-4 items-center justify-center rounded border border-white/30",
            checked ? "bg-blue-600 border-blue-600" : "bg-transparent",
            className
          )}
          onClick={() => setChecked(!checked)}
        >
          {checked && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3 w-3 text-white"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
        </div>
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";

export { Checkbox };
