import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 bg-primary'>
        <div className='form_container p-5 rounded bg-white'>
        <form>
            <h3 className='text-center'>Sign In</h3>
            <div className='mb-2'>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Enter Email' className='form-control'/>
            </div>
            <div className='mb-2'>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder='Enter Password' className='form-control'/>
            </div>
            <div className='mb-2'>
                <input type="checkbox" className='custom-control custom-checkbox' id="check" />
                <label htmlFor="check" className='custom-input-label ms-2'>
                    Remember me
                </label>
            </div>
            <div className='d-grid'>
                <button className='btn btn-primary'>Sign in</button>
            </div>
            <p className='text-end mt-2'>
                Forgot <a href="">Password?</a><Link to="/signup" className='ms-2'>Sign Up</Link><Link to="/addactivity" className='ms-2'>Add Activity</Link><Link to="/editactivity" className='ms-2'>Edit Activity</Link>
                <Link to="/Activitylog" className='ms-2'>Activity Log</Link><Link to="/card" className='ms-2'>Card</Link>
        
            </p>
        </form>
        </div>

    </div>
  )
}
