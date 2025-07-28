import React from 'react'
import {useDispatch} from 'react-redux'
import service from '../../Appwrite/auth'
import {logout} from '../../Store/authslice'
import { useNavigate } from 'react-router-dom'

function LogoutBtn() {
  const navigate = useNavigate()
    const dispatch = useDispatch()

    const logoutHandler=()=>{
        service.logout().then(()=>{
            dispatch(logout())
          })
          navigate('/');
    }
  return (
    <div>
      <button
      className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
      onClick={logoutHandler}
      >Logout</button>
    </div>
  )
}

export default LogoutBtn