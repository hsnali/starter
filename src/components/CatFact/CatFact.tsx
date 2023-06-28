import { useState } from 'react'

import { getCatFact } from '@/utils/getCatFact'

export const CatFact = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [info, setInfo] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleClick = async () => {
    setIsLoading(true)
    try {
      const { fact } = await getCatFact()
      setInfo(fact)
    } catch (error) {
      const message = (error as Error)?.message
      setErrorMessage(`Something went wrong: ${message}`)
    }
    setIsLoading(false)
  }

  return (
    <div className="flex max-w-md flex-col items-center justify-center md:absolute md:bottom-6">
      <button onClick={handleClick} className={`${isLoading ? 'animate-spin' : ''} my-2 md:order-1`}>
        <img className="w-8" src="/images/nyan.gif" alt="Nyan cat" />
        <span className="sr-only">Get a cat fact</span>
      </button>

      {info && (
        <p
          data-testid="cat-fact-info"
          className="text-center text-xs italic text-gray-500 dark:text-gray-300"
        >
          {info}
        </p>
      )}

      {errorMessage && (
        <p data-testid="cat-fact-error" className="text-center text-xs italic text-red-800 dark:text-red-300">
          {errorMessage}
        </p>
      )}
    </div>
  )
}
