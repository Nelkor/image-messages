import {
  createCanvasWithCtxById,
  createDrawImageByCanvasWithCtx,
} from './utils'

const { canvas, ctx } = createCanvasWithCtxById('pattern-image')

export const drawImage = createDrawImageByCanvasWithCtx(canvas, ctx)
