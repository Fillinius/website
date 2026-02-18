import styles from './styles.module.scss'

export function VideoBG() {
  return (
    <video className={styles.video} preload="none" autoPlay loop muted>
      <source src="\video\floor.mp4" />
      Your browser does not support the video tag.
    </video>
  )
}
