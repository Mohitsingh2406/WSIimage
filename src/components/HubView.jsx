// src/components/HubView.jsx
import hubImage from '../assets/wsi.png';

const HubView = () => {
  return (
    <div className="hub-view">
      <img src={hubImage} alt="Hub View" className="hub-image" />
      <div className="pointer">Viewing Area</div>
    </div>
  );
};

export default HubView;
