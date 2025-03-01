import React, { forwardRef } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = forwardRef<HTMLDivElement, Props>(
  ({ children, className }, ref) => {
    return (
      <section ref={ref} className={`w-full max-w-[2024px] px-44 ${className}`}>
        {children}
      </section>
    );
  }
);

export default Container;
