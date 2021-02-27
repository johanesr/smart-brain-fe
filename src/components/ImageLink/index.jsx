import { useState } from 'react';
import './styles.scss';

const ImageLink = () => {
  const [imageInput, setImageInput] = useState('');

  return(
    <div className="image-link-wrapper">
      <div>This Magic Brain Application will detect faces in your picture.</div>
      <div className="image-input">
        <input type="text"/>
        <button>Detect</button>
      </div>
    </div>
  );
}

export default ImageLink;