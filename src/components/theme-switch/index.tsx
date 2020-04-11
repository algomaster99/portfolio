import React, { ChangeEventHandler } from 'react'

import styles from './index.sass'

interface Props {
  checked: boolean
  themeChange: ChangeEventHandler
}

class ThemeSwitch extends React.PureComponent<Props> {
  render(): JSX.Element {
    return (
      <>
        <input
          type="checkbox"
          id="toggle-checkbox"
          name="toggle-checkbox"
          onChange={this.props.themeChange}
          checked={this.props.checked}
          className={styles.toggleCheckbox}
        />
        <label htmlFor="toggle-checkbox" className={styles.toggleWrapper}>
          <div className={styles.toggleThumb}></div>
        </label>
      </>
    )
  }
}

export default ThemeSwitch
