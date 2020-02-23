import React from 'react';
import PlaceList from '../components/PlaceList';

import { useParams } from 'react-router-dom';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    imageUrl:
      'https://www.history.com/.image/t_share/MTU3ODc4NjA0ODYzOTA3NTUx/image-placeholder-title.jpg',
    description: ' One of the most famous sky scrapers in the world',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: 'u1',
  },
  {
    id: 'p2',
    title: 'Emp. State Building',
    imageUrl:
      'https://www.history.com/.image/t_share/MTU3ODc4NjA0ODYzOTA3NTUx/image-placeholder-title.jpg',
    description: ' One of the most famous sky scrapers in the world',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: 'u2',
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);

  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
