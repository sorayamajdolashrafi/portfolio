import styles from '../../styles/projects.module.css'

const Carousel = ({images, current}) => {
  return (
    <div className={styles.carousel}>
          <img src={images[current].src} alt={images[current].alt} />
    </div>
  )
}

export default Carousel;