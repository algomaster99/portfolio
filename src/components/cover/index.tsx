import React from 'react'

import MainButton from '../main-button'
import { FULL_NAME, SHORT_BIO } from '../../consts'

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
        <MainButton text="view résumé" />
      </div>
    )
  }
}

export default Cover
