import { app } from 'electron'

import { makeAppSetup, makeAppWithSingleInstanceLock } from './factories'
import {
  MainWindow,
  registerAboutWindowCreationByIPC,
  registerAppWindowCreationByIPC,
} from './windows'

makeAppWithSingleInstanceLock(async () => {
  await app.whenReady()
  await makeAppSetup(MainWindow)

  registerAboutWindowCreationByIPC()
  registerAppWindowCreationByIPC()
})
