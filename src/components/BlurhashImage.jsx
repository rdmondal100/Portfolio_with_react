import React, { useState } from 'react';
import { BlurhashCanvas } from 'react-blurhash';

const BlurhashImage = ({ src, blurhash, alt = '', height, width,className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && (blurhash &&
        <BlurhashCanvas
          hash={blurhash}
          height={height}
          width={width}
          className={` ${className}`}
          punch={1}
        />
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={`${className} ${isLoaded ? 'block' : 'hidden'}`}
      />
    </>
  );
};

export default BlurhashImage;
