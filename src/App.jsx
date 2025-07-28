import { useEffect, useState } from 'react'
import './App.css'
import {useDispatch} from 'react-redux'
import authService from "./Appwrite/auth"
import {login,logout} from "./Store/authslice"
import { Footer, Header } from './Components'
import { Outlet } from 'react-router-dom'

function App() {
  const[loading,setLoading]= useState(true)
  const dispatch= useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(()=> setLoading(false))
  },[])

return !loading ?(
  <div className='min-h-screen flex flex-wrap content-between bg-violet-300'>
    <div className='w-full block'>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
    </div>
): null
}

export default App