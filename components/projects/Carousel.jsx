import PropTypes from 'prop-types';
import styles from '../../styles/projects.module.css';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Carousel = ({ images, currentIndex, handleChange }) => {
  return (
    <div className={styles.carousel}>
        <ResponsiveCarousel
            showArrows={false}
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            infiniteLoop={true}
            emulateTouch={true}
            dynamicHeight={true}
            selectedItem={currentIndex}
            onChange={handleChange}
        >
            {
                images.map((image) => (
                    <img
                        key={currentIndex}
                        src={image.src} 
                        alt={images.alt}
                    />
                ))
            }
        </ResponsiveCarousel>
    </div> 
  )
}

Carousel.propTypes = {
    images: PropTypes.PropTypes.arrayOf(PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
    })),
    currentIndex: PropTypes.number.isRequired,
    handleChange: PropTypes.func.isRequired
}

export default Carousel;
