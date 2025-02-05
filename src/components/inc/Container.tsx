import React from 'react'

interface Props {
  children: React.ReactNode;
  className?:string
}

function Container({
  children,
  className
}: Props) {
  return (
    <section className={`w-full max-w-[2024px] px-24 ${className}`}>
      {children}
    </section>
  )
}

export default Container