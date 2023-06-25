import { fetch } from 'cross-fetch'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest'

// This configures a request mocking server with the given request handlers.
import { CAT_FACT_API, getCatFact } from '../getCatFact'

// Add `fetch` polyfill.
global.fetch = fetch

const handlers = [
  rest.get(CAT_FACT_API, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({
        fact: 'Cats are cute'
      })
    )
  })
]

const server = setupServer()

describe('utils/getCatFact', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it('Should fetch a cat fact', async () => {
    server.use(
      rest.get(CAT_FACT_API, (req, res, ctx) => {
        return res(
          ctx.json({
            fact: 'Cats are cute'
          })
        )
      })
    )

    const { fact } = await getCatFact()
    expect(fact).toBe('Cats are cute')
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
