export interface CanvasWithCtx {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
}

export type DrawImage = (image: HTMLImageElement) => void
