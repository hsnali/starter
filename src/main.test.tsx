import { beforeEach,describe, expect, it, vi } from 'vitest'

const renderSpy = vi.fn()
const createRootSpy = vi.fn(() => ({
  render: renderSpy
}))

vi.mock('react-dom/client', () => ({
  createRoot: createRootSpy,
  default: {
    createRoot: createRootSpy
  }
}))

describe('main', () => {
  beforeEach(async () => {
    const root = document.createElement('div')
    root.id = 'root'
    document.body.appendChild(root)
    await import('./main.tsx')
  })

  it('creates root and renders app with providers', async () => {
    expect(createRootSpy).toHaveBeenCalledTimes(1)
    expect(createRootSpy).toHaveBeenCalledWith(document.getElementById('root'))
    expect(renderSpy).toHaveBeenCalledTimes(1)
    document.getElementById('root')?.remove()
  })
})
