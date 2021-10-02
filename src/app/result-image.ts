import {
  createCanvasWithCtxById,
  createDrawImageByCanvasWithCtx,
} from './utils'

const { canvas, ctx } = createCanvasWithCtxById('result-image')

export const drawImage = createDrawImageByCanvasWithCtx(canvas, ctx)

export const setImageData = (imageData: ImageData): void => {
  canvas.width = imageData.width
  canvas.height = imageData.height

  ctx.putImageData(imageData, 0, 0)
}
