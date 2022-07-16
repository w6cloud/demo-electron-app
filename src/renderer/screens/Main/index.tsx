import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import { Container, Heading, Button } from 'renderer/components'
import { useWindowStore } from 'renderer/store'

export function MainScreen() {
  const { App } = window // The "App" comes from the bridge

  const navigate = useNavigate()
  const storeAbout = useWindowStore().about
  const storeApp = useWindowStore().app

  useEffect(() => {
    App.sayHelloFromBridge()

    App.whenAboutWindowClose(({ message }) => {
      console.log(message)

      storeAbout.setAboutWindowState(false)
    })

    App.whenAppWindowClose(({ message }) => {
      console.log(message)

      storeApp.setAppWindowState(false)
    })
  }, [])

  function openAboutWindow() {
    App.createAboutWindow()
    storeAbout.setAboutWindowState(true)
  }

  function openAppWindow() {
    App.createAppWindow()
    storeApp.setAppWindowState(true)
  }

  return (
    <Container>
      <Heading>Hi, {App.username || 'there'}! 👋</Heading>

      <h2>It's time to build something awesome! ✨</h2>

      <nav>
        <Button
          className={storeApp.isOpen ? 'disabled' : ''}
          onClick={openAppWindow}
        >
          Lancer l'application
        </Button>

        <Button
          className={storeAbout.isOpen ? 'disabled' : ''}
          onClick={openAboutWindow}
        >
          Mode d'emploi
        </Button>

        <Button onClick={() => navigate('anotherScreen')}>
          Go to Another screen
        </Button>
      </nav>
    </Container>
  )
}
