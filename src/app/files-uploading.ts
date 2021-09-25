import { listenToInputImage } from './utils'
import { drawImage as drawToPatternCanvas } from './pattern-image'
import { drawImage as drawToSteganographyCanvas } from './steganography-image'

export const startListening = (): void => {
  listenToInputImage('pattern-uploading', drawToPatternCanvas)
  listenToInputImage('steganography-uploading', drawToSteganographyCanvas)
}
