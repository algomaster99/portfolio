import React from 'react'

import { TYPE } from '../../consts'

import styles from './index.sass'

interface Props {
  type: TYPE
  text: string
}

class MainButton extends React.PureComponent<Props> {
  render(): JSX.Element {
    let buttonType
    switch (this.props.type) {
      case TYPE.MAIN:
        buttonType = TYPE.MAIN
        break
      case TYPE.SIDE:
        buttonType = TYPE.SIDE
        break
    }
    return (
      <a href="#" className={styles[buttonType]}>
        {this.props.text}
      </a>
    )
  }
}

export default MainButton
