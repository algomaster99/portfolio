import React from 'react'

import styles from './index.sass'

interface Props {
  text: string
}

class MainButton extends React.PureComponent<Props> {
  render(): JSX.Element {
    return (
      <a href="#" className={styles.mainButton}>
        {this.props.text}
      </a>
    )
  }
}

export default MainButton
