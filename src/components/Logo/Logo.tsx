import React from 'react'

export type LogoProps = {
  src: string
  url: string
  label: string
  classNames?: string
  alt?: string
}

export const Logo: React.FC<LogoProps> = ({ src, url, label, alt, classNames }) => {
  return (
    <a href={url} target="_ blank">
      <img src={src} className={`h-24 transition-all duration-300 ${classNames}`} alt={alt} />
      <span className="sr-only">{label}</span>
    </a>
  )
}
