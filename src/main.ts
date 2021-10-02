import { startListeningFiles } from '@/app/files-uploading'
import { startListeningWrite } from '@/app/write'

import '@/main.scss'

startListeningFiles()
startListeningWrite()
