import React from 'react'

export default function Card() {
  return (
      <div className="card mt-3" style={{"width": "18rem","maxHeight":"360px"}}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title 
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
            <option value="half">Half</option>
            <option value="full">Full</option>

            </select>
            <div className="d-inline fs-5">Total Price</div>

          </div>
        </div>
      </div>
  )
}
