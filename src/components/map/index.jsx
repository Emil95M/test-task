import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import {useSelector} from 'react-redux';
import { selectorUser } from '../../store/selector/selector';
import "./map.scss";

const MapComponent = () => {

  const {userDirection} = useSelector(selectorUser)

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
  });

  const center = {
    lat: userDirection[0],
    lng: userDirection[1],
  };
  
  return isLoaded ? (
    <>
      <GoogleMap mapContainerClassName="map" center={center} zoom={15}>
        <></>
      </GoogleMap>
    </>
  ) : (
    <></>
  );
};
export default MapComponent;
