import React from 'react'

import styles from './index.sass'

interface Props {
  styleName?: string
}

class Diamond extends React.PureComponent<Props> {
  render(): JSX.Element {
    return <div className={`${styles.diamond} ${this.props.styleName}`}></div>
  }
}

export default Diamond
