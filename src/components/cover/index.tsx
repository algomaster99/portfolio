import React from 'react'

import Button from '../button'
import { FULL_NAME, SHORT_BIO, TYPE } from '../../consts'

import me from '../../assets/me.jpeg'
import resume from '../../assets/resume.pdf'
import styles from './index.sass'

class Cover extends React.PureComponent {
  render(): JSX.Element {
    return (
      <div className={styles.coverContainer}>
        <div className={styles.imageCropper}>
          <img src={me} className={styles.me} />
        </div>
        <div className={styles.fullName}>{FULL_NAME}</div>
        <div
          dangerouslySetInnerHTML={{ __html: SHORT_BIO }}
          className={styles.shortBio}
        />
        <div className={styles.coverButton}>
          <Button link={resume} type={TYPE.MAIN} text="view résumé" newTab />
        </div>
      </div>
    )
  }
}

export default Cover
