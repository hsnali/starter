import { FC, useState } from 'react'

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
    } catch (e) {
      setErrorMessage(`Something went wrong: ${e.message}`)
    }
    setIsLoading(false)
  }

  return (
    <div className="absolute bottom-2 flex max-w-md flex-col items-center justify-center">
      <button onClick={handleClick} className={`${isLoading ? 'animate-spin' : ''} mb-2`}>
        <img className="w-8" src="/images/nyan.gif" alt="Nyan cat" />
      </button>
      {info && (
        <p data-testid="cat-fact-info" className="text-center text-xs italic text-gray-500">
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
