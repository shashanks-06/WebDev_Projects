import React from "react";
import useGeoLocation from "./useGeoLocation";

const App = () => {
 const {error, lat, long} = useGeoLocation();
  return (
    <div className="app">
      <h1>Where am I?</h1>
      <div className="coordinates">
        {!error ? (
            <>
            <div className="coord-display">
                <div className="label">Latitude</div>
                <div className="value">{lat}</div>
            </div>
            <div className="coord-display">
                <div className="label">Longitude</div>
                <div className="value">{long}</div>
            </div>
            </>
        ):(
            <h2 id="error">
                Location data could not be fetched!
            </h2>
        )}
      </div>
    </div>
  );
};

export default App;
