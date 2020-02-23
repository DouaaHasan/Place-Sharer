import React from 'react';
import UsersList from '../components/UsersList';

export default function Users() {
  const USERS = [
    {
      id: 'u1',
      name: 'Maya',
      image: 'https://i.pinimg.com/originals/16/9c/9c/169c9cb78663de0ca8c0cdd8cb6091b4.jpg',
      places: '3',
    },
  ];
  return <UsersList items={USERS} />;
}
