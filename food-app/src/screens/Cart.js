import React from 'react'
import { useDispatchCart,useCart } from '../components/ContextReducer';
import trash from "./trash.svg"


export default function Cart() {
    const handleCheckout=async()=>{
        let userEmail=localStorage.getItem("userEmail")
        let response =await fetch("http://localhost:5000/api/orderData",{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
            email: userEmail,
            order_data:data,
            order_date:new Date().toDateString()
      }),
        });
        console.log("order response:",response)
        if(response.status===200){
            dispatch({type:"DROP"})
        }
    }
    let data=useCart();
    let dispatch=useDispatchCart();
    if(data.length===0){
        return(
        <div>
            <div className='m-5 w-100 text-center fs-3'>Cart is empty!</div>
        </div>
        )
    }
    let totalPrice=data.reduce((total,food)=>total+food.price,0)
  return (
    <div>
      <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md'>
        <table className='table hover'>
            <thead className='text-success fs-4'>
            <tr>
                <th scope='col'>#</th>
                <th scope='col'>Name</th>
                <th scope='col'>Quantity</th>
                <th scope='col'>Option</th>
                <th scope='col'>Amount</th>

            </tr>

            </thead>
            <tbody>
                {data.map((food,index)=>(
                    <tr>
                        <th scope='row'>{index+1}</th>
                        <td>{food.name}</td>
                        <td>{food.qty}</td>
                        <td>{food.size}</td>
                        <td>{food.price}</td>
                        <td><button type='button' className='btn p-0'/><img  style={{width:"15px",height:"15px",backgroundColor:"white"}}src={trash} alt='delete' onClick={()=>{dispatch({type:"REMOVE",index:index})}} /></td>

                    </tr>
                ))}
            </tbody>
        </table>
        <div><h1 className='fs-2'>Total Price:{totalPrice}/-</h1></div>
        <div><button className='btn bg-success mt-5' onClick={handleCheckout}>Check Out</button></div>
      </div>
    </div>
  )
}
