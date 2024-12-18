import { useState } from 'react'

export const Button = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount((count) => count + 1)
  }

  return (
    <button
      onClick={handleClick}
      className="h block cursor-pointer rounded-sm bg-indigo-600 px-3 py-2 text-sm font-semibold text-white transition-colors hover:shadow-md dark:bg-violet-600"
    >
      Increment by {count}
    </button>
  )
}
