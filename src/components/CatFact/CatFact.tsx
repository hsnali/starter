import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import { CatFactReponse, getCatFact } from '@/utils/getCatFact'

export const CatFact = () => {
  const [enabled, setEnabled] = useState(false)
  const { data, isLoading, isError, error, refetch } = useQuery<CatFactReponse, Error>({
    queryKey: ['cat-fact'],
    enabled,
    queryFn: () => getCatFact(),
    retry: false
  })

  const handleClick = async () => {
    if (enabled) {
      refetch()
    } else {
      setEnabled(true)
    }
  }

  return (
    <div className="flex max-w-md flex-col items-center justify-center md:absolute md:bottom-6">
      <button
        data-testid="cat-fact-button"
        onClick={handleClick}
        className={`${isLoading && enabled ? 'animate-spin' : ''} my-2 md:order-1`}
      >
        <img className="w-8" src="/images/nyan.gif" alt="Nyan cat" />
        <span className="sr-only">Get a cat fact</span>
      </button>

      {data?.fact && (
        <p
          data-testid="cat-fact-info"
          className="text-center text-xs italic text-gray-500 dark:text-gray-300"
        >
          {data.fact}
        </p>
      )}

      {isError && error && (
        <p data-testid="cat-fact-error" className="text-center text-xs italic text-red-800 dark:text-red-300">
          {error.toString()}
        </p>
      )}
    </div>
  )
}
