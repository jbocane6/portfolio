import React from "react";
export const Textarea = React.forwardRef(({ className = "", ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={`w-full border border-gray-300 rounded px-3 py-2 text-sm resize-none ${className}`}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";
