import React from 'react'

import { SHORT_NAME } from '../../consts'

import styles from './index.sass'

class Header extends React.PureComponent {
  render(): JSX.Element {
    return (
      <div>
        <div className={styles.shortName}>{SHORT_NAME}</div>
      </div>
    )
  }
}

export default Header
