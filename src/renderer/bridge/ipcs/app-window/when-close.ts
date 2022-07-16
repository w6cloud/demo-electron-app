import { ipcRenderer } from 'electron'

import { IPC } from 'shared/constants'

export function whenAppWindowClose(fn: (...args: any[]) => void) {
  const channel = IPC.WINDOWS.APP.WHEN_CLOSE

  ipcRenderer.on(channel, (_, ...args) => {
    fn(...args)
  })
}
