import React from 'react'
// import './style.css';
export default function Activitylog() {
  return (
    <div>
        
        <div className='navbar-container'>
            <h1>LOGO</h1>
        <h2 className='text-center'>Activity Log</h2>
        <span className='button-container'>
        <button>Add Activity</button>
          <button>Log Out</button>
        </span>


        </div>
        
        <div className='card-container'>
               
               <div className="card" >
                    {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="btn btn-primary">Edit</button>
                        <button className="btn btn-primary">Delete</button>
                        
                    </div>
                </div>

               

                <div className="card" >
                    {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="btn btn-primary">Edit</button>
                        <button className="btn btn-primary">Delete</button>
                    </div>
                </div>

                <div className="card" >
                    {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="btn btn-primary">Edit</button>
                        <button className="btn btn-primary">Delete</button>
                    </div>
                </div>  

       </div>


</div>
  )
}
