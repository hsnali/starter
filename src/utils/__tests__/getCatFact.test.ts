import { rest } from 'msw'
import { describe, expect, it } from 'vitest'

import { server } from '@/tests/server'

// This configures a request mocking server with the given request handlers.
import { CAT_FACT_API, getCatFact } from '../getCatFact'

describe('utils/getCatFact', () => {
  it('Should fetch a cat fact', async () => {
    const testFact = 'Cats are cute'
    server.use(
      rest.get(CAT_FACT_API, (req, res, ctx) => {
        return res(
          ctx.json({
            fact: testFact
          })
        )
      })
    )

    const { fact } = await getCatFact()
    expect(fact).toBe(testFact)
  })

  it('Should return error message', async () => {
    server.use(
      rest.get(CAT_FACT_API, (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({}))
      })
    )
    await expect(getCatFact()).rejects.toThrowError('Failed to fetch cat fact')
  })
})
