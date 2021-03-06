import { WindowRouter, Route } from './modules'

import { MainScreen, AboutScreen, AnotherScreen, AppScreen } from 'renderer/screens'

export function AppRoutes() {
  return (
    <WindowRouter
      routes={{
        main: () => (
          <>
            <Route path="/" element={<MainScreen />} />
            <Route path="/anotherScreen" element={<AnotherScreen />} />
          </>
        ),
        about: () => <Route path="/" element={<AboutScreen />} />,
        app: () => <Route path="/" element={<AppScreen />} />,
      }}
    />
  )
}
