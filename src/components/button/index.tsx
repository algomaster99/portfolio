import React from 'react'

import { TYPE } from '../../consts'

import styles from './index.sass'

interface Props {
  link: string
  newTab?: boolean
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
      <a
        href={this.props.link}
        className={styles[buttonType]}
        target={this.props.newTab && '_blank'}
        rel="noopener noreferrer"
      >
        {this.props.text}
      </a>
    )
  }
}

export default MainButton
