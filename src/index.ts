import { useEffect, useState } from 'react';

const defaultState: {
  src: undefined | string;
  status: string;
} = { src: undefined, status: 'loading' };

export default function useImage(url: string, crossOrigin?: string) {
  const [image, setImage] = useState<typeof defaultState>(defaultState);

  useEffect(() => {
    if (!url) return;
    let img = document.createElement('img');
    const onLoad = () => setImage({ src: img.src, status: 'success' });
    const onError = () => setImage({ src: undefined, status: 'failed' });

    img.addEventListener('load', onLoad);
    img.addEventListener('error', onError);
    crossOrigin && (img.crossOrigin = crossOrigin);
    img.src = url;

    return () => {
      img.removeEventListener('load', onLoad);
      img.removeEventListener('error', onError);
      setImage(defaultState);
    };
  }, [url, crossOrigin]);

  return {
    ...image,
  };
}
