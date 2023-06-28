import React ,{useState,useEffect}from 'react';
import {Link} from 'react-router-dom'
import {useNavigate, useParams} from 'react-router-dom'
import './Header.css'


const Base_url="https://messhourl.onrender.com" 


const Header = ()=>{

    let param = useParams()
    let navigate = useNavigate()

    const[cat,setCategory]= useState();

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
                    <option key={item._id} value={item.id} >
                        <Link to={`/listing/${item.id}`} >
                        {item.category}
                        </Link>
                    </option>
                )
            }))
           }
    }
    

    // const list = (list) => {
    //     if (list){
    //         return (list.map((item)=>{
    //             return(
    //                 navigate(`/listing/${item.id}`)
    //             )
    //         }))
    //     }
    // }

    function switchicon(){
        let displayimage = document.getElementById('moon')
        if(displayimage.src.match('https://i.ibb.co/tmBrxdx/moon.png')){
            displayimage.src ='/image/sun.svg'
        }
        else{
            displayimage ='https://i.ibb.co/tmBrxdx/moon.png'
        }
    }
    function switchmode(){
        let mybody=document.body;
        mybody.classList.toggle('mode');
    }
    return(

        <>
            <header>

                <Link to="/" className="btn btn-info home">Home</Link>
                <div className="use"><img src="/image/user.png" alt="user" id="user"/><b>User</b></div>
                <div>
                <select id="searchbar" >
                        <option >search by keywords....</option>
                            {renderCat(cat) }
                </select>
                </div>
                <div className="logo">
                    <img src="/image/mic.svg" alt="mic" className="large"/>
                    <img src="/image/camera.svg" alt="camera" className="large"/>
                </div>
                <div id="like">
                    <div onClick={switchmode}><img src="https://i.ibb.co/tmBrxdx/moon.png" id="moon" alt="moon"  onClick= {switchicon} className="icon1" /></div>
                    <div className="icon"><img src="/image/heart.svg"alt="heart" className="icon"/></div>
                    <div className="icon"><img src="/image/bag.svg" alt="bag" className="icon"/></div>
                </div>
            </header> 
            
        </>
    )
    
}


export default Header