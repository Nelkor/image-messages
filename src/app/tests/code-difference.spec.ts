import { codeToDifference, differenceToCode } from '../utils'

describe('code-difference', () => {
  it('should be defined', () => {
    expect(codeToDifference).toBeDefined()
    expect(differenceToCode).toBeDefined()
  })

  it('should transform correctly', () => {
    expect(codeToDifference(20)).toEqual([0, 0, 0, 0, 2, 6])
    expect(codeToDifference(100)).toEqual([0, 0, 0, 2, 0, 2])
    expect(codeToDifference(999)).toEqual([0, 0, 2, 6, 2, 5])

    expect(differenceToCode([0, 0, 0, 0, 2, 6])).toBe(20)
    expect(differenceToCode([0, 0, 0, 2, 0, 2])).toBe(100)
    expect(differenceToCode([0, 0, 2, 6, 2, 5])).toBe(999)
  })

  it('should code and decode text', () => {
    const originalText = `
      «Авторский взгляд» – передача Creative lab STAIRWAY и шанс увидеть
      мюзиклы глазами их создателей.
      Авторы наших проектов раскроют подробности своих работ,
      а также поделятся своими мыслями.
      !@#$%^&*()-_=+/\\|~\`
      Panic is coming on strong
      So cold, from the inside out
      No great job, no message coming in
      And you're so small
      Glassy eyed light of day
      Glassy eyed light of day
      The path trails off
      And heads down a mountain
      Through the dry bush, I don't know where it leads
      I don't really care
      And the path trails off
      And heads down a mountain
      Through the dry bush, I don't know where it leads
      I don't really care
      I feel this love to the core
      I feel this love to the core
    `

    const diffs = originalText
      .split('')
      .map(s => codeToDifference(s.charCodeAt(0)))

    const codes = diffs.map(differenceToCode)
    const recoveredText = codes.map(code => String.fromCharCode(code)).join('')

    expect(originalText == recoveredText).toBeTruthy()
  })
})
