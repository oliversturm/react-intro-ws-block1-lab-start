import { useEffect, useState } from 'react';
import ImageItem from './ImageItem';
import styles from './Overview.module.css';

const Overview = () => {
  const [result, setResult] = useState(null);
  useEffect(() => {
    fetch(
      'https://outlier.oliversturm.com:11234/https://www.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?&tags=hifi',
      { headers: { Authorization: 'Basic ' + btoa('corsuser:Ct%x6cPJJ') } },
    )
      .then((response) => response.text())
      .then((text) => text.slice(1, -1)) // remove extra parens
      .then((text) => JSON.parse(text))
      .then(({ items }) => {
        setResult({ items });
      })
      .catch((e) => {
        setResult({ error: e });
      });
  }, [setResult]);

  return (
    <div>
      <h1>Overview of images</h1>

      {result && result.error && (
        <div className={styles.error}>{result.error.message}</div>
      )}

      <div className={styles.list}>
        {/* <pre>{result && JSON.stringify(result, 0, 2)}</pre> */}
        {result &&
          result.items &&
          result.items.map((imageInfo, index) => (
            <ImageItem key={index} imageInfo={imageInfo} />
          ))}
      </div>
    </div>
  );
};

export default Overview;
