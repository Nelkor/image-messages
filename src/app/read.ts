import { setText } from './textarea'
import { getPatternImageData } from './pattern-image'
import { getResultImageData } from './result-image'
import {
  VALUES_BY_PIXEL,
  PIXELS_FOR_LETTER,
  diffByIndex,
  differenceToCode,
} from './utils'

const blockSize = VALUES_BY_PIXEL * PIXELS_FOR_LETTER
const readButton = document.querySelector('button#read')

if (!readButton) {
  throw new Error('no read button')
}

const onClick = () => {
  const { data: patternData } = getPatternImageData()
  const { data: resultData } = getResultImageData()

  if (patternData.length != resultData.length) {
    setText('Изображения не являются парой')

    return
  }

  let resultText = ''

  const length = Math.floor(patternData.length / blockSize)

  for (let i = 0; i < length; i++) {
    const start = i * blockSize

    let isBlockEmpty = true

    for (let j = 0; j < blockSize; j++) {
      const index = start + j

      if (patternData[index] != resultData[index]) {
        isBlockEmpty = false
      }
    }

    if (!isBlockEmpty) {
      const difference = diffByIndex(start, patternData, resultData)

      resultText += String.fromCharCode(differenceToCode(difference))
    }
  }

  setText(resultText)
}

export const startListeningRead = (): void => {
  readButton.addEventListener('click', onClick)
}
