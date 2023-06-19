import React ,{useState,useEffect}from 'react';
import './Header.css'
const Base_url="https://messhourl.onrender.com" 


const Header = ()=>{

    const[cat,setCategory]= useState('');

    useEffect(()=>{
        fetch(`${Base_url}/category`,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            setCategory(data)
        })

    },[])


    const renderCat = (data) => {
           if(data){
            return(data.map((item)=>{
                return(
                    <option key={item._id} value={item.id}>
                        {item.category}
                    </option>
                )
            }))
           }
    }
    return(
        <>
            <header>
                <div className="use"><img src="user.png" alt="user" id="user"/><b>User</b></div>
                <div>
                    <select id="searchbar">
                        <option>search by keywords</option>
                        {renderCat(cat)}
                    </select>
                </div>
                <div className="logo">
                    <img src="mic.svg" alt="mic" className="large"/>
                    <img src="camera.svg" alt="camera" className="large"/>
                </div>
                <div id="like">
                    <div ><img src="moon-stars-fill.svg" id="moon" alt="moon" className="icon1" /></div>
                    <div className="icon"><img src="heart.svg"alt="heart" className="icon"/></div>
                    <div className="icon"><img src="bag.svg" alt="bag" className="icon"/></div>
                </div>
            </header> 
        </>
    )
}

export default Header;