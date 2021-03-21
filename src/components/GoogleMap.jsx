/* eslint-disable no-console */
import { useEffect } from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import mapStyles from './mapStyles';

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

const defaultZoom = 13;

const warsawOldTownPosition = {
  lat: 52.24965909571318,
  lng: 21.01224436700959,
};

const createMapOptions = {
  maxZoom: 16,
  minZoom: 10,
  styles: mapStyles.styles,
};

const GoogleMapWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const GoogleMap = () => {
  useEffect(() => {
    console.log('First map load');
  }, []);

  return (
    <GoogleMapWrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={warsawOldTownPosition}
        defaultZoom={defaultZoom}
        yesIWantToUseGoogleMapApiInternals
        options={createMapOptions}
      />
    </GoogleMapWrapper>
  );
};

export default GoogleMap;
