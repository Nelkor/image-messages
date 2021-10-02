const textarea = document.querySelector('textarea')

if (!textarea) {
  throw new Error('no textarea')
}

export const getText = (): string => textarea.value

export const setText = (text: string): void => {
  textarea.value = text
}
