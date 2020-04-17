import React from 'react'

import styles from './index.sass'

interface Props {
  content: string
  header?: string
}

class ContentBox extends React.PureComponent<Props> {
  render(): JSX.Element {
    return (
      <>
        <div className={styles.header}>{this.props.header}</div>
        <div
          dangerouslySetInnerHTML={{ __html: this.props.content }}
          className={
            this.props.header ? styles.content : styles.contentWithoutHeader
          }
        />
      </>
    )
  }
}

export default ContentBox
