import { CanvasWithCtx, DrawImage } from './types'

const MAX_CODE = 117648
const RADIX = 7
const DIFFERENCE_LENGTH = 6

export const codeToDifference = (code: number): number[] =>
  code > MAX_CODE
    ? Array.from({ length: DIFFERENCE_LENGTH }, () => 0)
    : code
        .toString(RADIX)
        .padStart(DIFFERENCE_LENGTH, '0')
        .split('')
        .map(Number)

export const differenceToCode = (difference: number[]): number =>
  parseInt(difference.join(''), RADIX)

export const getRandomIndexes = (
  containerLength: number,
  amount: number
): number[] => {
  const indexes = new Set<number>()

  while (amount) {
    let index = Math.floor(Math.random() * containerLength)

    while (indexes.has(index)) {
      index++
    }

    indexes.add(index)

    containerLength--
    amount--
  }

  return Array.from(indexes).sort((a, b) => a - b)
}

export const createCanvasWithCtxById = (id: string): CanvasWithCtx => {
  const canvas = document.querySelector<HTMLCanvasElement>(`#${id}`)

  if (!canvas) {
    throw new Error(`can not find canvas #${id}`)
  }

  const ctx = canvas.getContext('2d')

  if (!ctx) {
    throw new Error('can not get 2d context')
  }

  return { canvas, ctx }
}

export const createDrawImageByCanvasWithCtx =
  (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) =>
  (image: HTMLImageElement): void => {
    canvas.width = image.width
    canvas.height = image.height

    ctx.drawImage(image, 0, 0)
  }

export const listenToInputImage = (id: string, drawImage: DrawImage): void => {
  const input = document.querySelector<HTMLInputElement>(`#${id}`)

  if (!input) {
    throw new Error(`can not find input #${id}`)
  }

  const onReaderLoad = (event: ProgressEvent<FileReader>) => {
    const { result } = event.target as FileReader

    const image = new Image()

    image.onload = () => drawImage(image)
    image.src = result as string
  }

  const onInputChange = (event: Event) => {
    const { files } = event.target as HTMLInputElement

    if (!files || !files[0]) {
      return
    }

    const reader = new FileReader()

    reader.onload = onReaderLoad

    reader.readAsDataURL(files[0])
  }

  input.addEventListener('change', onInputChange)
}

const incUint8 = (data: Uint8ClampedArray, index: number) => {
  data[index] += data[index] == 255 ? -2 : 1
}

const decUint8 = (data: Uint8ClampedArray, index: number) => {
  data[index] -= data[index] == 0 ? -2 : 1
}

export const modifyRgbByDiff = (
  data: Uint8ClampedArray,
  start: number,
  diff: number
): void => {
  switch (diff) {
    case 1:
      incUint8(data, start)
      break
    case 2:
      decUint8(data, start)
      break
    case 3:
      incUint8(data, start + 1)
      break
    case 4:
      decUint8(data, start + 1)
      break
    case 5:
      incUint8(data, start + 2)
      break
    case 6:
      decUint8(data, start + 2)
      break
  }
}
