import { http, HttpResponse, delay as mswDelay } from 'msw'

import { CAT_FACT_API } from '@/utils/getCatFact'

type CatFactProps = {
  fact?: string
  status?: number
  delay?: number
  json?: Record<string, unknown>
}

export const mockCatFact = ({ fact, status = 200, delay = 500, json }: CatFactProps) =>
  http.get(CAT_FACT_API, async () => {
    await mswDelay(delay)
    return HttpResponse.json(
      {
        fact,
        ...json
      },
      {
        status
      }
    )
  })
