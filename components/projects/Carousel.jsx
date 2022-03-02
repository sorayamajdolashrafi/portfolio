import styles from '../../styles/projects.module.css'
import { motion, AnimatePresence } from 'framer-motion';

const Carousel = ({images, current, direction, previousImage, nextImage}) => {
    const variants = {
        enter: (direction) => {
            return {
                zIndex: -1,
                x: direction > 0 ? -500 : 500,
                // opacity: 0
            };
        },
        // enter: {
        //     opacity: 0
        // },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        // exit: {
        //     opacity: 0
        // }
        exit: (direction) => {
            return {
                zIndex: 0,
                x: direction < 0 ? -500 : 500 
            }
        }
    }

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };
    const swipeImage = (e, { offset, velocity }) => {
        const swipe = swipePower(offset.x, velocity.x);

        swipe < -swipeConfidenceThreshold ? nextImage() : previousImage()
    }
    

  return (
    <div className={styles.carousel}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.img 
            key={current}
            src={images[current].src} 
            alt={images[current].alt}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            // exit="exit"
            transition={{
                x: {type: "spring",  stiffness: 150, damping: 30 },
                opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={swipeImage}
            />
        </AnimatePresence>
    </div>
  )
}

export default Carousel;