import React, { ChangeEventHandler, ChangeEvent } from 'react'

import Header from './header'
import Overlay from './overlay'
import Cover from './cover'
import Content from './content'
import { THEME } from '../consts'

import container from '../styles/container.sass'
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

  componentDidMount(): void {
    if (localStorage.getItem('theme') === null) {
      localStorage.setItem('theme', this.state.theme)
    } else {
      const theme =
        localStorage.getItem('theme') === THEME.DARK ? THEME.DARK : THEME.LIGHT
      const checked = theme === THEME.DARK ? true : false
      this.setState({
        checked: checked,
        theme: theme,
      })
    }
  }

  themeChange = (event: ChangeEvent): ChangeEventHandler => {
    const theme: THEME = event.target.checked ? THEME.DARK : THEME.LIGHT
    this.setState(
      {
        checked: !this.state.checked,
        theme: theme,
      },
      () => {
        localStorage.setItem('theme', this.state.theme)
      }
    )
    return
  }

  render(): JSX.Element {
    return (
      <div className={`theme-${this.state.theme}`} style={{ height: '100%' }}>
        <Overlay />
        <div className={styles.themeManipulator}>
          {/* Header is not put inside the container because the background
          needed to span over the entire viewport */}
          <Header themeChange={this.themeChange} checked={this.state.checked} />
          <div
            className={`
            ${container.container} ${container.contentContainer}
            `}
          >
            <Cover />
            <Content />
          </div>
        </div>
      </div>
    )
  }
}

export default App
