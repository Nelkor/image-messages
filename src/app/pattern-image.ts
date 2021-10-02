import {
  createCanvasWithCtxById,
  createDrawImageByCanvasWithCtx,
} from './utils'

const { canvas, ctx } = createCanvasWithCtxById('pattern-image')

export const drawImage = createDrawImageByCanvasWithCtx(canvas, ctx)

export const getPatternImageData = (): ImageData =>
  ctx.getImageData(0, 0, canvas.width, canvas.height)
