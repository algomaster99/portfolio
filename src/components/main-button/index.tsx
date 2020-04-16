import React from 'react'

import styles from './index.sass'

interface Props {
  text: string
}

class MainButton extends React.PureComponent<Props> {
  render(): JSX.Element {
    return (
      <div className={styles.mainButtonContainer}>
        <a href="#" className={styles.mainButton}>
          {this.props.text}
        </a>
      </div>
    )
  }
}

export default MainButton
