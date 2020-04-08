import React from 'react'

import Header from './header'

import styles from './App.sass'

class App extends React.PureComponent {
  render(): JSX.Element {
    return (
      <div className={styles.container}>
        <Header />
      </div>
    )
  }
}

export default App
