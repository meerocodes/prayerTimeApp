import { useState, useEffect } from 'react';
import { Qibla } from 'qibla';

const QiblaCompass = () => {
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const handleOrientationChange = event => {
      const kaabaDirection = Qibla(event.alpha, event.beta, event.gamma);
      setDirection(kaabaDirection);
    };
    window.addEventListener('deviceorientation', handleOrientationChange);
    return () => window.removeEventListener('deviceorientation', handleOrientationChange);
  }, []);

  const compassStyle = {
    transform: `rotate(${direction}deg)`,
  };

  return (
    <div className="compass">
      <div className="needle" style={compassStyle}></div>
    </div>
  );
};

export default QiblaCompass;

