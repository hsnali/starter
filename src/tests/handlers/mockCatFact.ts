import { rest } from 'msw'

import { CAT_FACT_API } from '@/utils/getCatFact'

type CatFactProps = {
  fact?: string
  status?: number
  delay?: number
  json?: Record<string, unknown>
}

export const mockCatFact = ({ fact, status = 200, delay = 500, json }: CatFactProps) =>
  rest.get(CAT_FACT_API, (_, res, ctx) => {
    return res(
      ctx.status(status),
      ctx.json({
        fact,
        ...json
      }),
      ctx.delay(delay)
    )
  })
