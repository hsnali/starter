import { useState } from 'react'

export const Button = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount((count) => count + 1)
  }

  return (
    <button
      onClick={handleClick}
      className="h block cursor-pointer rounded-3xl bg-fuchsia-500 px-5 py-2 font-semibold text-white transition-colors hover:shadow-md dark:bg-violet-500"
    >
      Count is {count}
    </button>
  )
}
