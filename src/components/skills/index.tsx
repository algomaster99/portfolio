import React from 'react'

import styles from './index.sass'
import react from '../../assets/icons/react.svg'
import redux from '../../assets/icons/redux.svg'
import django from '../../assets/icons/django.svg'
import sass from '../../assets/icons/sass.svg'

const LOGOS = [react, redux, django, sass]

class Skills extends React.PureComponent {
  render(): JSX.Element {
    return (
      <div className={styles.logoContainer}>
        {LOGOS.map((tech, index) => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.icon}
            viewBox="0 0 100 100"
            key={index}
          >
            <use xlinkHref={`${tech}#tech`} />
          </svg>
        ))}
      </div>
    )
  }
}

export default Skills
