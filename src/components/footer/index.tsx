import React from 'react'

import { DESIGNER, DESIGNER_LINK } from '../../consts'

import styles from './index.sass'

class Footer extends React.PureComponent {
  render(): JSX.Element {
    return (
      <footer className={styles.footerContainer}>
        <span className={styles.footerText}>
          Designed by{' '}
          <a href={DESIGNER_LINK} target="_blank" rel="noopener noreferrer">
            {DESIGNER}
          </a>{' '}
        </span>
      </footer>
    )
  }
}

export default Footer
