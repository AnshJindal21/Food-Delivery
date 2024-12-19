import {React,useEffect,useRef,useState} from 'react'
import { useDispatchCart,useCart } from './ContextReducer';
export default function Card(props) {
  let dispatch=useDispatchCart();
  let options=props.options;
  let priceOptions=Object.keys(options);
  let data=useCart()
  const priceRef=useRef();
  const [qty,setQty]=useState(1)
  const [size,setSize]=useState("")

  const handleAddtoCart=async ()=>{
    let food=[]
    for(const item of data){
      if(item.id===props.foodItem._id){
        /*if jis item pe humne addtocart kara wo already hai cart mai*/
        food=item
        break
      }
    }
      if(food !== []){
        if(food.size===size){
          await dispatch({type:"UPDATE",id:props.foodItem._id,price:finalPrice,qty:qty})
          return
          /*if size is same(half ya full) then update kare warna add kardo*/
        }
        else if (food.size!==size){
          await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:qty,size:size})
          return
        }
      
      return
    }
    await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:qty,size:size})
    //await console.log(data)
  }
  let finalPrice=qty*parseInt(options[size]);
  useEffect(()=>{
    setSize(priceRef.current.value)
  },[])
  /*jab bhi component load hoga size set hojaega priceref wo select option hai size waala*/
  return (
      <div className="card mt-3" style={{"width": "16rem","maxHeight":"360px"}}>
        <img style={{"width": "254px","height":"160px"}} src={props.foodItem.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.foodItem.name}</h5>

          <div className="container w-100">
            {/* for quantity*/}
            <select className="m-2 h-100 bg-success" onChange={(e)=>{setQty(e.target.value)}}>
            {Array.from(Array(6),(e,i)=>{
              return(
                
                /* kyuki 0 se start islier i+1 */
                <option key={i+1} value={i+1}>{i+1}</option>
              )
            })}
            </select>
            {/* for size*/}
            <select className="m-2 h-100 bg-success rounded" ref={priceRef} onChange={(e)=>{setSize(e.target.value)}}>
            {priceOptions.map((data)=>{
              return <option key={data} value={data}>{data}</option>
            })}

            </select>
            <div className="d-inline fs-6">{finalPrice}/-</div>
            <hr></hr>
            <button className="btn btn-success justify-center ms-2" onClick={handleAddtoCart}>Add to Cart</button>

          </div>
        </div>
      </div>
  )
}
