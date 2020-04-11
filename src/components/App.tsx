import React, { ChangeEventHandler, ChangeEvent } from 'react'

import Header from './header'
import { THEME } from '../consts'

import styles from './App.sass'

interface State {
  checked: boolean
  theme: THEME
}

class App extends React.PureComponent<{}, State> {
  state = {
    checked: true,
    theme: THEME.DARK,
  }

  themeChange = (event: ChangeEvent): ChangeEventHandler => {
    const theme: THEME = event.target.checked ? THEME.DARK : THEME.LIGHT
    this.setState({
      checked: !this.state.checked,
      theme: theme,
    })
    return
  }

  render(): JSX.Element {
    return (
      <div className={`theme-${this.state.theme}`} style={{ height: '100%' }}>
        <div className={styles.themeManipulator}>
          <Header themeChange={this.themeChange} checked={this.state.checked} />
        </div>
      </div>
    )
  }
}

export default App
