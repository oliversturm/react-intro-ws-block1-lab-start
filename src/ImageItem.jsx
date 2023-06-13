import styles from './ImageItem.module.css';

const ImageItem = ({ imageInfo }) => (
  <div className={styles.div}>
    <img className={styles.img} src={imageInfo.media.m} alt={imageInfo.title} />
    <p className={styles.p}>{imageInfo.title}</p>
  </div>
);

export default ImageItem;
