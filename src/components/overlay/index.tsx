import React from 'react'

import Diamond from '../diamond'

import styles from './index.sass'

const STYLENAME = [
  styles.left1,
  styles.left2,
  styles.left3,
  styles.left4,
  styles.right1,
  styles.right2,
  styles.right3,
  styles.bottom1,
  styles.bottom2,
  styles.bottom3,
]

class Overlay extends React.PureComponent {
  render(): JSX.Element {
    return (
      <div className={styles.overlayContainer}>
        {STYLENAME.map((style, index) => (
          <Diamond key={index} styleName={style} />
        ))}
      </div>
    )
  }
}

export default Overlay
