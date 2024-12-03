import React from 'react'
export default function Card(props) {
  let options=props.options;
  let priceOptions=Object.keys(options);
  return (
      <div className="card mt-3" style={{"width": "18rem","maxHeight":"360px"}}>
        <img src={props.imgSrc} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.foodName}</h5>
          <p className="card-text" style={{"font-size":"13px"}}>
            {props.desc} 
          </p>
          <div className="container w-100">
            {/* for quantity*/}
            <select className="m-2 h-100 bg-success">
            {Array.from(Array(6),(e,i)=>{
              return(
                
                /* kyuki 0 se start islier i+1 */
                <option key={i+1} value={i+1}>{i+1}</option>
              )
            })}
            </select>
            {/* for size*/}
            <select className="m-2 h-100 bg-success rounded">
            {priceOptions.map((data)=>{
              return <option key={data} value={data}>{data}</option>
            })}

            </select>
            <div className="d-inline fs-5">Total Price</div>

          </div>
        </div>
      </div>
  )
}
