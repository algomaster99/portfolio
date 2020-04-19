import React from 'react'

import { LINKS } from '../../consts'

import styles from './index.sass'

class SocialLinks extends React.PureComponent {
  render(): JSX.Element {
    return (
      <>
        <div className={styles.moreInfo}>You can follow me for more on</div>
        <div className={styles.linkContainer}>
          {LINKS.map((linkInfo, index) => (
            <React.Fragment key={index}>
              <a
                href={linkInfo.url}
                // Security Risk: https://mathiasbynens.github.io/rel-noopener
                rel="noopener noreferrer"
                target="_blank"
              >
                {linkInfo.site}
              </a>
              <span className={styles.period}></span>
            </React.Fragment>
          ))}
        </div>
      </>
    )
  }
}

export default SocialLinks
