import { useNavigate } from "react-router-dom"

export default function Nav({userFlag}) {
    const navigate=useNavigate();
  return (
    <nav className="bg-[#f5f8fa] shadow-md px-6 py-3 flex items-center justify-between">
  
  <div className="flex items-center flex-shrink-0">
    <img src="Logo.jpeg" alt="Logo" className="h-14 w-auto object-contain" />
  </div>

  <div className="hidden md:flex gap-8 text-lg font-medium text-gray-700">
   <button onClick={() => navigate('/')} className="hover:text-blue-600 transition">Home</button>
  <button onClick={() => navigate('/blog')} className="hover:text-blue-600 transition">Blog</button>
  <button onClick={() => navigate('/contact')} className="hover:text-blue-600 transition">Contact Us</button>
    
  </div>


  <div className="flex items-center gap-4">
  { userFlag ? <button className="px-4 py-2 text-sm font-semibold text-black bg-blue-200 rounded hover:bg-blue-300 transition" onClick={()=>navigate('/logout',{replace:true})}>Logout</button> : <><button className="px-4 py-2 text-sm font-semibold text-blue-400 border border-blue-400 rounded hover:text-blue-600 hover:border-blue-600 transition" onClick={()=>navigate('/login',{replace:true})}>Login</button>
      <button className="px-4 py-2 text-sm font-semibold text-black bg-blue-200 rounded hover:bg-blue-300 transition" onClick={()=>navigate('/signin',{replace:true})}>Sign Up</button>
      </>}
      </div>
</nav>

  )
}
