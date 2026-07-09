import React from 'react';
import { allRooms } from '@/lib/engine';
import RoomCard from '@/Components/RoomCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

export const metadata ={
  title: 'Rooms'
}

const Roomspage = async() => {
  const {token} = await auth.api.getToken({
    headers: await headers()
  })

    const rooms = await allRooms(token);
    return (
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 max-w-7xl mx-auto">
         {rooms.map((room) => (
           <RoomCard key={room._id || room.id} room={room} />
         ))}
       </div>
    );
};

export default Roomspage;