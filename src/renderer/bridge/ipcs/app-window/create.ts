import { ipcRenderer } from 'electron'

import { IPC } from 'shared/constants'

export function createAppWindow() {
  const channel = IPC.WINDOWS.APP.CREATE

  ipcRenderer.invoke(channel)
}
