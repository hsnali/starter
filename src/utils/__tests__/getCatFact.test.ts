import { describe, expect, it } from 'vitest'

import { mockCatFact } from '@/tests/handlers/mockCatFact'
import { server } from '@/tests/server'

import { getCatFact } from '../getCatFact'

describe('utils/getCatFact', () => {
  it('Should fetch a cat fact', async () => {
    const testFact = 'Cats are cute'
    server.use(mockCatFact({ fact: testFact }))

    const { fact } = await getCatFact()
    expect(fact).toBe(testFact)
  })

  it('Should return error message', async () => {
    server.use(mockCatFact({ status: 500 }))
    await expect(getCatFact()).rejects.toThrowError('Failed to fetch cat fact')
  })
})
