// src/components/WSIViewer.jsx
import { useRef, useState } from 'react';
import wsiImage from '../assets/wsi.png';

const WSIViewer = () => {
  const [zoom, setZoom] = useState(1);
  const viewerRef = useRef();

  const handleZoomIn = () => {
    setZoom(zoom + 0.1);
  };

  const handleZoomOut = () => {
    setZoom(zoom - 0.1);
  };

  return (
    <div className="wsi-viewer" ref={viewerRef}>
      <img
        src={wsiImage}
        alt="Whole Slide Image"
        style={{ transform: `scale(${zoom})` }}
      />
      <div className="controls">
        <button onClick={handleZoomIn}>Zoom In</button>
        <button onClick={handleZoomOut}>Zoom Out</button>
      </div>
    </div>
  );
};

export default WSIViewer;
