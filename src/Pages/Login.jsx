import React from 'react'

const Login = () => {
  return (
    <>

    <form className="Form">
  <div className="mb-3">
    <h5 className="headline">Welcome to King772</h5>
    <label className="form-label">Your Username</label>
    <input type="text" className="Username form-control" placeholder='Username'/>
  
  </div>
  <div className="mb-3">
    <label className="form-label">Your Password</label>
    <input type="password" className="Password form-control" placeholder='Password' />
  </div>

<button type="submit" className="Signin-btn">Sign in</button>
</form>
    </>
  )
}

export default Login