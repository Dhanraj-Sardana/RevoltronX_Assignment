import { useState } from 'react'
import { useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
export default function Login() {
    const {handleSubmit,register,formState:{errors}}=useForm();
    const [passFlag,setPassFlag]=useState(false); 
    const [flag,setFlag]=useState(false);
    const navigate=useNavigate();
    const handleSignin=()=>{
      navigate('/',{replace:true})
    }
  const handleSub= async (data)=>{
try{
const response= await fetch('http://localhost:3000/login',{ 
  method:'POST',
  headers:{
'content-type':'application/json'
  },
  body:JSON.stringify(data)
})
if(response.status===200){
 
  navigate('/home',{replace:true})
}
if(response.status===401){
setPassFlag(true);
}
if(response.status===404){
setFlag(true);
}
if(response.status===500){
  const d=await response.json();
  console.log(d.error);
  
}
}catch(error){
console.log(`Error in Login : ${error.message}`);

}
}

    return (
    <div className='flex justify-center items-center h-screen' style={{ backgroundImage: "url('/Background_Login_signin.jpg')" }}>
      <form onSubmit={handleSubmit(handleSub)} className='bg-slate-100 flex flex-col gap-6 p-10'>
        <div className='flex gap-4'>
        <label htmlFor="email" className='font-extrabold text-xl'>Enter Your Email :</label>
        <input type="email" placeholder='Enter Email' {...register('email',{required:'Email is Required'})}  name="email" className='border-b font-bold border-blue-200 focus: outline-none' />
        </div>
        {errors?.email&&<span className='text-red-500 m-[-6px] ml-30'>{errors.email.message}</span>}
        <div className='flex gap-4'>
        <label htmlFor="password" className='font-extrabold text-xl'>Enter your Password :</label>
        <input type="password" onChange={()=>setPassFlag(false)} name="password" className="border-b font-bold border-blue-200 focus: outline-none" {...register('password',{required:'Password is Required',minLength:{value:8,message:'Min length of Password Must be 8'}})} placeholder='Enter Password' />
       
      </div>
       {!errors?.email&&errors?.password&&<span className='text-red-500 m-[-6px] ml-30'>{errors.password.message}</span>}
      <input type="submit" className='font-extrabold border border-solid-blue-400 p-3 bg-blue-100  hover:bg-blue-200' value="Login" />
      {flag&& <h1 className='text-red-500'>No user found with this email please Sign in to proceed</h1>}
      {flag&&<button className='font-extrabold border border-solid-blue-400 p-3 bg-blue-100  hover:bg-blue-200' onClick={handleSignin}>SignIn</button>}
      {passFlag&&<h1 className='text-red-500'>Wrong password try again</h1>}
      </form>
      
    </div>
  )
}