import { Container, Heading } from 'renderer/components'

import styles from './styles.module.sass'

export function AppScreen() {
  return (
    <Container>
      <Heading>App!</Heading>

      <h2 className={styles.subtitle}>
        Write an awesome text about your app here! ✨
      </h2>
    </Container>
  )
}
