import React from 'react'

const DisplayOrder = (props) => {


    const renderData = ({orderData}) => {
        if(orderData){
            return orderData.map((item)=>{
                return(
                    <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.pro_name}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>Rs. {item.cost}</td>
                    <td>{item.phone}</td>
                </tr>
                )
            })
        }

    }
    return(
        <>
            <div className="container">
                <h2 className="orders">Order</h2>
                <table className="table table-bordered">
                    <thead className="table table-bordered">
                        <tr>
                            <th>OrderId</th>
                            <th>proname</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Cost</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody className="table table-bordered">
                            {renderData(props)}
                    </tbody>
                </table>
            </div>
        </>
        
    )
}


export default DisplayOrder