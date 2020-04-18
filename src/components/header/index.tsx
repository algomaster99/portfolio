import React, { ChangeEventHandler } from 'react'

import ThemeSwitch from '../theme-switch'
import Diamond from '../diamond'
import { SHORT_NAME } from '../../consts'

import container from '../../styles/container.sass'
import styles from './index.sass'

interface Props {
  checked: boolean
  themeChange: ChangeEventHandler
}

class Header extends React.PureComponent<Props> {
  render(): JSX.Element {
    return (
      <div className={styles.headerContainer}>
        <div className={container.container}>
          <div className={styles.headerTitle}>
            <div className={styles.shortName}>{SHORT_NAME}</div>
            <Diamond styleName={styles.headerDiamond} />
            <ThemeSwitch
              themeChange={this.props.themeChange}
              checked={this.props.checked}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Header
