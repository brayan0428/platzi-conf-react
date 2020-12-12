import React from 'react';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api'

const Map = () => {

  const mapContainerStyles = {
    height: '50vh',
    width: '100%'
  }

  const defaultCenter = {
    lat: 10.9752298,
    lng: -74.7909604
  }

  return (
    <LoadScript googleMapsApiKey="AIzaSyBuk6SdFWcGDyBUOfhlZfJodChBhFTD1jA">
      <GoogleMap 
        mapContainerStyle={mapContainerStyles}
        zoom={10}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  )
}
 
export default Map;