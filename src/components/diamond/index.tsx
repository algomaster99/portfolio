import React from 'react'

import styles from './index.sass'

interface Props {
  id?: string
  styleName?: string
}

class Diamond extends React.PureComponent<Props> {
  render(): JSX.Element {
    return (
      <div
        id={this.props.id}
        className={`${styles.diamond} ${this.props.styleName}`}
      ></div>
    )
  }
}

export default Diamond
