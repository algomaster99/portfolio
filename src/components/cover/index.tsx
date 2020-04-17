import React from 'react'

import Button from '../button'
import { FULL_NAME, SHORT_BIO, TYPE } from '../../consts'

import me from '../../assets/me.jpeg'
import styles from './index.sass'

class Cover extends React.PureComponent {
  render(): JSX.Element {
    return (
      <div className={styles.coverContainer}>
        <div className={styles.imageCropper}>
          <img src={me} className={styles.me} />
        </div>
        <div className={styles.fullName}>{FULL_NAME}</div>
        <div className={styles.shortBio}>{SHORT_BIO}</div>
        <div className={styles.coverButton}>
          <Button type={TYPE.MAIN} text="view résumé" />
        </div>
      </div>
    )
  }
}

export default Cover
