import { createWindow } from 'main/factories'
import { APP_CONFIG } from '~/app.config'

export * from './ipcs'

export function AppWindow() {
  const window = createWindow({
    id: 'app',
    title: `${APP_CONFIG.TITLE}`,
    width: 1920,
    height: 1080,
    kiosk: true,
    alwaysOnTop: true,
    fullscreen: true,
  })

  return window
}
