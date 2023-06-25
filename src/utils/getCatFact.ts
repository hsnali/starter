export const CAT_FACT_API = 'https://catfact.ninja/fact'

export type CatFactReponse = {
  fact: string
  length: number
}

export const getCatFact = async (apiUrl = CAT_FACT_API): Promise<CatFactReponse> => {
  const response = await fetch(apiUrl)
  const { fact, length } = await response.json()

  if (!response.ok) {
    return Promise.reject(new Error('Failed to fetch cat fact'))
  }

  return { fact, length }
}
