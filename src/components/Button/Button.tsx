import { useState } from 'react'

export const Button = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount((count) => count + 1)
  }

  return (
    <button
      onClick={handleClick}
      className="block cursor-pointer rounded-lg border border-transparent bg-stone-200 px-5 py-2 font-semibold transition-colors hover:border-slate-400"
    >
      count is {count}
    </button>
  )
}
