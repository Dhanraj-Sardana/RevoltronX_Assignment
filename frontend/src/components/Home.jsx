import Nav from './Nav';
import { useEffect, useState } from 'react'

export default function Home() {
  const [username,setUserName]=useState('');
  const [userFlag,setUserFlag]=useState(false);
  const [errorFlag,setErrorFlag]=useState(false);
  const [error,setError]=useState('');
useEffect( ()=>{
  const handleServerRes= async ()=>{
  try{
  setErrorFlag(false);
const res=await fetch('http://localhost:3000/auth/home',{
  credentials:'include'
});
if(res.status===200){
  setUserFlag(true);
const data= await res.json();
setUserName(data.userName);
}
if(res.status===404){
setUserFlag(false);
setErrorFlag(true);
setError('Not Found');
}
if(res.status===401){
  setUserFlag(false);
  setErrorFlag(true); 
  setError('no token provided');
  
}
if(res.status===500){
  setUserFlag(false);
  setErrorFlag(true); 
  setError('internal server error');
}

  }catch(err){
console.log(`error : ${err.message}`);

  }
}
handleServerRes();

},[]);
  return (
    <>
    {errorFlag ? <div className="text-red-600 font-semibold bg-red-100 border border-red-400 rounded-lg px-4 py-3 text-center shadow-md">
 Error: {error}
</div>
    :<>
      <Nav />
      <div className="  flex flex-col justify-center items-center text-black">
       { {username} &&<div>Home page {username}</div>}
      </div>
    </>
    }
    </>
  )
}