import {useState, useEffect} from "react";

const useGeoLocation = () => {
    const [lat, setLat] = useState(0);
    const [long, setLong]= useState(0);
    const [error, setError]= useState(false);

    useEffect(() => {
        let position;
        if(navigator.geolocation){
            position = navigator.geolocation.watchPosition(({coords}) => {
                setLat(coords.latitude.toFixed(7));
                setLong(coords.longitude.toFixed(7));
            });
        } else {
            setError(true);
        }
        return ()=> {
            navigator.geolocation.clearWatch(position);
        }
    }, []);
    return {
        error, 
        lat,
        long
    };
};

export default useGeoLocation;