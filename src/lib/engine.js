
export const homeRooms = async()=>{
    const res = await fetch('http://localhost:5000/homerooms')

    const rooms=  await res.json();

    return rooms;
}

export const allRooms = async()=>{
    const res = await fetch('http://localhost:5000/allrooms')
    const rooms = await res.json()

    return rooms
}

export const singleRoom = async(id)=>{
    const res = await fetch(`http://localhost:5000/allrooms/${id}`)
    const room = await res.json()

    return room
}