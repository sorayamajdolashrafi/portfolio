import styles from '../../styles/projects.module.css'
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Carousel = ({images, currentIndex, handleChange}) => {
    // const renderIndicator = (
    //     onClickHandler,
    //     isSelected,
    //     index,
    //     label
    // ) => {
    //     if (isSelected) {
    //         return (
    //             <li
    //                 className={`${styles.indicators} ${styles.selected}`}
    //                 aria-label={`selected: ${label} ${index + 1}`}
    //                 title={`selected: ${label} ${index + 1}`}
    //             />
    //         );
    //     }
    //     return (
    //         <li
    //             className={styles.indicators}
    //             onClick={onClickHandler}
    //             onKeyDown={onClickHandler}
    //             value={index}
    //             key={index}
    //             role="button"
    //             tabIndex={0}
    //             title={`${label} ${index + 1}`}
    //             aria-label={`${label} ${index + 1}`}
    //         />
    //     );
    // };


  return (
    <div className={styles.carousel}>
        <ResponsiveCarousel
            showArrows={false}
            showThumbs={false}
            infiniteLoop={true}
            emulateTouch={true}
            dynamicHeight={true}
            showStatus={false}
            showIndicators={false}
            selectedItem={currentIndex}
            onChange={handleChange}
            // renderIndicator={(onClickHandler, isSelected, index, label) => renderIndicator(onClickHandler, isSelected, index, label)}
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

export default Carousel;  