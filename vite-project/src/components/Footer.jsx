import React,{useState} from 'react'

const Footer = () => {
    const[foot,setFoot]=useState([
        {
            id:1,
            item:"Home"
        },
        {
            id:2,
            item:"About Us"
        },
        {
            id:3,
            item:"Contact"
        }
    ]);

  return (
    <div className='mx-auto p-6  flex flex-col md:flex-row justify-center items-center'>
        
       
        <div className='flex mx-6 text-xl'>
            <ul className='flex'>
                {foot.map((f)=>(
                 <li 
                    className='hover:scale-105 duration-200 flex mx-4'
                    key={f.id}>
                    <a 
                    onClick={(e)=>{
                        e.preventDefault();
                    }}
                    href="#"
                    className='mx-auto'
                    >
                        {f.item}
                    </a>
                 </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Footer