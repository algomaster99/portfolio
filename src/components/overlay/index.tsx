import React from 'react'

import Diamond from '../diamond'

import styles from './index.sass'

const STYLENAME = [
  styles.left1,
  styles.left2,
  styles.left3,
  styles.left4,
  styles.right1,
  styles.right2,
  styles.right3,
  styles.bottom1,
  styles.bottom2,
  styles.bottom3,
]

const PHOTO_DIAMONDS = ['diamond1', 'diamond2', 'diamond3', 'diamond4']

class Overlay extends React.PureComponent {
  // RIP "DRY" - I feel bad writing this piece of code but I have no other way
  // to position diamonds around the photo :(
  diamondPlacer = (): void => {
    const windowWidth = window.innerWidth
    const diamond1 = document.getElementById('diamond1')
    const diamond2 = document.getElementById('diamond2')
    const diamond3 = document.getElementById('diamond3')
    const diamond4 = document.getElementById('diamond4')
    if (windowWidth < 768) {
      // <= sm
      diamond1.style.left = `${windowWidth / 2 - 92}px`
      diamond2.style.left = `${windowWidth / 2 - 72}px`
      diamond3.style.left = `${windowWidth / 2 + 68}px`
      diamond4.style.left = `${windowWidth / 2 + 76}px`
    } else if (windowWidth < 992) {
      // < md
      diamond1.style.left = `${windowWidth / 2 - 108}px`
      diamond2.style.left = `${windowWidth / 2 - 84}px`
      diamond3.style.left = `${windowWidth / 2 + 80}px`
      diamond4.style.left = `${windowWidth / 2 + 88}px`
    } else if (windowWidth >= 992) {
      // >= md
      diamond1.style.left = `${windowWidth / 2 - 132}px`
      diamond2.style.left = `${windowWidth / 2 - 96}px`
      diamond3.style.left = `${windowWidth / 2 + 104}px`
      diamond4.style.left = `${windowWidth / 2 + 112}px`
    }
  }

  componentDidMount(): void {
    setTimeout(this.diamondPlacer)
    window.addEventListener('resize', this.diamondPlacer)
  }

  render(): JSX.Element {
    return (
      <div className={styles.overlayContainer}>
        {PHOTO_DIAMONDS.map((style, index) => (
          <Diamond key={index} id={style} styleName={styles[style]} />
        ))}
        {STYLENAME.map((style, index) => (
          <Diamond key={index} styleName={style} />
        ))}
      </div>
    )
  }
}

export default Overlay
