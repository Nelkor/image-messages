import { getRandomIndexes } from '../utils'

describe('random indexes', () => {
  it('should be defined', () => {
    expect(getRandomIndexes).toBeDefined()
  })

  it('should get full array', () => {
    expect(getRandomIndexes(3, 3)).toEqual([0, 1, 2])
  })

  it('should create indexes correctly', () => {
    const amount = 5e3

    expect(getRandomIndexes(10e3, amount).length).toBe(amount)
  })
})
