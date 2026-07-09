
export const homeRooms = async()=>{
    const res = await fetch('https://server-book-nook.vercel.app/homerooms')

    const rooms=  await res.json();

    return rooms;
}

export const allRooms = async(token)=>{
    const res = await fetch('https://server-book-nook.vercel.app/allrooms',{
        headers:{
            authorization:`Bearer ${token}`
        }
    })
    const rooms = await res.json()

    return rooms
}

export const singleRoom = async(id,token)=>{
    const res = await fetch(`https://server-book-nook.vercel.app/allrooms/${id}`,{
        headers:{
            authorization:`Bearer ${token}`
        }
    })
    const room = await res.json()

    return room
}