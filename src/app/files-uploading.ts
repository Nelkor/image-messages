import { listenToInputImage } from './utils'
import { drawImage as drawToPatternCanvas } from './pattern-image'
import { drawImage as drawToSteganographyCanvas } from './result-image'

export const startListeningFiles = (): void => {
  listenToInputImage('pattern-uploading', drawToPatternCanvas)
  listenToInputImage('steganography-uploading', drawToSteganographyCanvas)
}
