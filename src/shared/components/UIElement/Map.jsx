import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.css';

const Map = props => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);
  const { center, zoom } = props;

  useEffect(() => {
    mapboxgl.accessToken =
      'pk.eyJ1IjoiZHVhaGFzYW4iLCJhIjoiY2s2d2EwZ3N3MDVqODNwano5YW95MHE0MyJ9.-5BOAIMQr4dpAyZFkQgi8Q';
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: zoom,
      });

      map.on('load', () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map, center, zoom]);

  return <div className={`map ${props.className}`} ref={el => (mapContainer.current = el)} />;
};

export default Map;
