/* eslint-disable no-console */
import { useEffect } from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import mapStyles from './mapStyles';
import { emit, mapEvents } from '../views/map/mediator';

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

const defaultZoom = 15;

const warsawOldTownPosition = {
  lat: 52.24965909571318,
  lng: 21.01224436700959,
};

const createMapOptions = {
  maxZoom: 17,
  minZoom: 13,
  styles: mapStyles.styles,
};

const GoogleMapWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const GoogleMap = () => {
  useEffect(() => {
    console.log('First map load');
    emit(mapEvents.mapFirstLoaded, warsawOldTownPosition);
  }, []);

  return (
    <GoogleMapWrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={warsawOldTownPosition}
        defaultZoom={defaultZoom}
        yesIWantToUseGoogleMapApiInternals
        options={createMapOptions}
        onChange={(event) => emit(mapEvents.mapDragged, event.center)}
      />
    </GoogleMapWrapper>
  );
};

export default GoogleMap;
