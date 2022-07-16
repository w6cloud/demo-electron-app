import { ipcMain } from 'electron'

import { registerWindowCreationByIPC } from 'main/factories'
import { IPC } from 'shared/constants'
import { AppWindow } from '..'

export function registerAppWindowCreationByIPC() {
  registerWindowCreationByIPC({
    channel: IPC.WINDOWS.APP.CREATE,
    window: AppWindow,

    callback(window, { sender }) {
      const channel = IPC.WINDOWS.APP.WHEN_CLOSE

      ipcMain.removeHandler(channel)

      window.on('closed', () =>
        sender.send(channel, {
          message: 'App window closed!',
        })
      )
    },
  })
}
