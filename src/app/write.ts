import { getText } from './textarea'
import { getImageData } from './pattern-image'
import { setImageData } from './result-image'
import { getRandomIndexes, codeToDifference, modifyRgbByDiff } from './utils'

const VALUES_BY_PIXEL = 4
const PIXELS_FOR_LETTER = 6

const writeButton = document.querySelector('button#write')

if (!writeButton) {
  throw new Error('no write button')
}

const onClick = () => {
  const text = getText()
  const imageData = getImageData()
  const { data } = imageData

  const lettersAmount = Math.floor(
    data.length / (VALUES_BY_PIXEL * PIXELS_FOR_LETTER)
  )

  const randomIndexes = getRandomIndexes(lettersAmount, text.length)

  randomIndexes.forEach((imageIndex, textIndex) => {
    const startOfLetter = imageIndex * VALUES_BY_PIXEL * PIXELS_FOR_LETTER
    const charCode = text.charCodeAt(textIndex)
    const difference = codeToDifference(charCode)

    difference.forEach((diff, diffIndex) => {
      const startOfPixel = startOfLetter + diffIndex * VALUES_BY_PIXEL

      modifyRgbByDiff(data, startOfPixel, diff)
    })
  })

  setImageData(imageData)
}

export const startListeningWrite = (): void => {
  writeButton.addEventListener('click', onClick)
}
