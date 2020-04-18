import React from 'react'

import { FULL_NAME } from '../../consts'

import styles from './index.sass'

interface State {
  year: number | string
}

class Footer extends React.PureComponent<{}, State> {
  state = {
    year: '',
  }

  componentDidMount(): void {
    const date = new Date()
    this.setState({
      year: date.getFullYear(),
    })
  }

  render(): JSX.Element {
    return (
      <footer className={styles.footerContainer}>
        <span className={styles.footerText}>
          Copyright <span className={styles.footerFullName}>{FULL_NAME}</span>{' '}
          {this.state.year}
        </span>
      </footer>
    )
  }
}

export default Footer
