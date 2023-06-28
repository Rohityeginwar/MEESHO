import React from 'react'
import axios from 'axios'
import './filter.css'


const url = "https://messhourl.onrender.com/price"

const CostFilter = (props) => {

    const handleFilter = (event) => {
        let proId = props.proId;
        let cost  = (event.target.value).split('-')
        let lCost = cost[0]
        let hCost = cost[1]
        let costUrl = ""
        if(event.target.value === ""){
            costUrl = `${url}/${proId}`
        }
        else{
            costUrl = `${url}?lcost=${lCost} &hcost=${hCost} `
        }


        axios.get(costUrl)
        .then((res) => {props.proPerCost(res.data)})
    }

    return(
        <>
            <center><h2>Cost Filter</h2></center>
            <div className="cost" onChange={handleFilter}>
                <label className="radio">
                    <input type="radio" name="cost" value=""/>All
                </label>
                <label className="radio">
                    <input type="radio" name="cost" value="0-300"/>0-300
                </label>
                <label className='radio'>
                    <input type='radio' name="cost" value="501-1000"/>501-1000
                </label>
                <label className="radio">
                    <input type="radio" name="cost" value="1000-1500" />1000-1500
                </label>
                <label className='radio'>
                    <input type='radio' name="cost" value="2000-4000"/>2000-4000
                </label>
                <label className="radio">
                    <input type="radio" name="cost" value="5000-10000" />5000-10000
                </label>
                <label className='radio'>
                    <input type='radio' name="cost" value="10000-20000"/>10000-20000
                </label>
                <label className="radio">
                    <input type="radio" name="cost" value="20001-40000" />20001-40000
                </label>
            </div>
        </>
    )
}


export default CostFilter