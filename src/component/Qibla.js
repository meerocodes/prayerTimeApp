import { useState, useEffect } from "react";

function QiblaCompass() {
  const [qiblaDirection, setQiblaDirection] = useState(null);

  useEffect(() => {
    // Use the Geolocation API to get the user's current location
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      // Calculate the qibla direction
      const phiK = 21.4 * Math.PI / 180.0;
      const lambdaK = 39.8 * Math.PI / 180.0;
      const phi = latitude * Math.PI / 180.0;
      const lambda = longitude * Math.PI / 180.0;
      const psi = Math.atan2(Math.sin(lambdaK - lambda), Math.cos(phi) * Math.tan(phiK) - Math.sin(phi) * Math.cos(lambdaK - lambda));
      const qiblaDirection = (psi * 180.0 / Math.PI + 360) % 360;
      setQiblaDirection(qiblaDirection);
    });
  }, []);

  return (
    <div id="qibla-compass">
      <img src="compass.png" alt="compass" />
      {qiblaDirection !== null && (
        <div
          id="compass-needle"
          style={{ transform: `rotate(${qiblaDirection}deg)` }}
        />
      )}
    </div>
  );
}

export default QiblaCompass;
