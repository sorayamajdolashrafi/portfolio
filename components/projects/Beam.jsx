import PropTypes from 'prop-types';
import styles from '../../styles/projects.module.css';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Beam = ({previousImage, nextImage, tech, description, handleChange, currentIndex, images}) => {
  const renderIndicator = ({
    handleChange,
    isSelected,
    index,
    label
  }) => {
      if (isSelected) {
          return (
              <li
                  key={index}
                  className={`${styles.indicators} ${styles.selected}`}
                  aria-label={`selected: ${label}`}
                  title={`selected: ${label}`}
              />
          )
      }
      return (
          <li
              className={styles.indicators}
              onClick={() => handleChange(index)}
              onKeyDown={() => handleChange(index)}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              title={`${label}`}
              aria-label={`${label}`}
          />
      )
  }

  const renderIndicators = ({ images, handleChange, currentIndex }) => (
    <ul className={styles.indicatorWrapper}>
      {
        images.map((image, index) => {
          const isSelected = index === currentIndex;
          return renderIndicator({handleChange, index, isSelected, label: image.label})
        })
      }
    </ul>
  )

  return (
    <section className={styles.beam}>

      <div className={styles.arrowWrapper}>
          <button className={styles.arrows} onClick={previousImage}>
              <ArrowLeftIcon fontSize="large"/>
          </button>

          {renderIndicators({handleChange, images, currentIndex})}

          <button className={styles.arrows} onClick={nextImage}>
              <ArrowRightIcon  fontSize="large"/>
          </button>
      </div>
      
      <p className={styles.tech}>{tech}</p>

      <div className={styles.description}>
          {description.map((text, i) => (
              <p key={i}>{text}</p>
          ))}
      </div>
            
    </section>
  )
}

Beam.propTypes = {
  images: PropTypes.PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  })),
  currentIndex: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default Beam;
