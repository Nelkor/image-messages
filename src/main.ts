import { startListeningFiles } from '@/app/files-uploading'
import { startListeningWrite } from '@/app/write'
import { startListeningRead } from '@/app/read'

import '@/main.scss'

startListeningFiles()
startListeningWrite()
startListeningRead()
