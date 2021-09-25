import {
  createCanvasWithCtxById,
  createDrawImageByCanvasWithCtx,
} from './utils'

const { canvas, ctx } = createCanvasWithCtxById('steganography-image')

export const drawImage = createDrawImageByCanvasWithCtx(canvas, ctx)
