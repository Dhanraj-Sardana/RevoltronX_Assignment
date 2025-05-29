import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { useState } from "react";
export default function Signin() {
    const [flag, setFlag] = useState(false);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm()
    const handlelogin = () => {
        navigate('/login');
    }
    const handleSub = async (data) => {
        try {
            const response = await fetch('http://localhost:3000/auth/signin', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(data)



            })

            if (response.status === 200) {
                setFlag(false);
                window.location.href = '/';


            }
            if (response.status === 409) {
                setFlag(true)
            }
            if (response.status === 500) {
                return (<div className="text-red-600 font-semibold bg-red-100 border border-red-400 rounded-lg px-4 py-3 text-center shadow-md">Internal Server Error</div>)
            }
        } catch (err) {
            console.error("Error while sending data to server", err.message);
        }
    }
    return (
        <div className=" h-screen flex justify-center items-center overflow-hidden" style={{ backgroundImage: "url('/Background_Login_signin.jpg')" }}>
            <div className="bg-slate-100 p-10 flex flex-col justify-center items-center">
                <form onSubmit={handleSubmit(handleSub)} method="post" className='flex flex-col items-center gap-6   justify-center' >
                    <div className='flex gap-4'>
                        <label htmlFor="name" className="font-extrabold text-xl">Enter your name :</label>
                        <input type="text" className=" border-b font-bold border-blue-200 focus: outline-none" name='name' {...register('name', { required: "Name is Required" })} placeholder='Userame' />
                    </div>
                    {errors?.name && <span className="text-red-500 m-[-6px] ml-9">{errors.name.message}</span>}
                    <div className='flex gap-4'>
                        <label htmlFor="Password" className="font-extrabold text-xl">Enter your password :</label>
                        <input type="password" name="password" {...register('password', { required: "password is required", minLength: { value: 8, message: "password must have atleat 8 characters" } })} className="border-b font-bold border-blue-200 focus: outline-none" placeholder='Passsword' />
                    </div>
                    {!errors?.name && errors?.password && <span className="text-red-500 m-[-6px] ml-9">{errors.password.message}</span>}
                    <div className='flex gap-4 ' >
                        <label htmlFor="email" className="font-extrabold text-xl">Enter your email :</label>
                        <input type="email" name="email" onChange={() => setFlag(false)} {...register('email', { required: 'email is required' })} className="border-b font-bold border-blue-200 focus: outline-none " placeholder='Email' />
                    </div>
                    {!errors?.name && !errors?.password && errors?.email && <span className="text-red-500 m-[-6px] ml-9" >{errors.email.message}</span>}

                    <input className="w-full font-extrabold border border-solid-blue-400 p-3 bg-blue-100  hover:bg-blue-200" type="submit" value="Sign-in" />
                    {flag ? <div className="text-red-500 font-semibold mt-2">User alredy exist with this email! please Login</div> : ""}
                </form>
                <button className="w-full font-extrabold border border-solid-blue-400 p-3 bg-blue-100 hover:bg-blue-200 mt-10" onClick={handlelogin}>Login</button>
            </div>
        </div>
    )
}