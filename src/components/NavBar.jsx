import { Link } from 'react-router-dom'
// import styled from 'styled-components'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { useState } from 'react'


function NavBar({isScrolled}) {

const [nav,setNav] = useState(true)

function handlenav(){
  setNav(!nav)
}
  // const links = [{ name: "Home", link: "/" },
  // { name: "About", link: "/about" },
  // { name: "Contact", link: "/contact" },
  // { name: "Privacy policy", link: "/policy" },
  // { name: "DMCA", link: "/dmca" }
  // ]

  return (
    <div className="h-24 flex sm:gap-36 gap-18 items-center max-w-[1280px] mx-auto px-4 text-white">

      
      <h1 className='w-full text-4xl font-bold text-[#00df9a]'>
      <Link to="/">
          <span className='text-red-600'>Yt</span>
        Thumb
        
          <span className='text-white'>.</span>
          <span className='text-red-600'>nail</span>
      </Link>
      </h1>
          
            <ul className="text-xl md:flex hidden">
              <Link to="/about">
            <li className='p-4 cursor-pointer'>About</li>
              </Link>
              <Link to="/Contact">
            <li className='p-4 cursor-pointer'>Contact</li>
              </Link>
              <Link to="/dcma">
            <li className='p-4 cursor-pointer'>DMCA</li>
              </Link>
            </ul>

      <div onClick={handlenav} className="block md:hidden">
        {!nav?<AiOutlineClose size={20} />: <AiOutlineMenu size={20} />}
        
      </div>
      <div className={!nav?'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500':"fixed left-[-100%]"}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>
          React.
        </h1>
        <ul className='p-4 uppercase'>
          <li className='p-4 border-b border-b-gray-700 cursor-pointer'>Home</li>
          <li className='p-4 border-b border-b-gray-700 cursor-pointer'>Company</li>
          <li className='p-4 border-b border-b-gray-800 cursor-pointer'>Resources</li>
          <li className='p-4 border-b border-b-gray-800 cursor-pointer'>About</li>
          <li className='p-4 cursor-pointer'>Contact</li>
        </ul>
      </div>

  
    </div>
  )
}

// const Container = styled.div`
// .scrolled{
// background-color: rgba(0, 0, 0, 0.7);

// }

// nav{
//   position: sticky;
//   top: 0;
//   width: 100%; 
//   justify-content : space-between;
//   position: fixed;
//   z-index: 2;
//   padding: 2rem 0rem;
//   align-items: center;
//   transition: 0.3s ease-in-out;
  

//     .brand{
//       gap: 2rem;
      
//       img{
//         height:4rem;
//       }
//     }
//     .links{
//       display: flex;
//       color:black;
//       justify-content: center;
//       list-style-type: none;
//       gap: 2rem;

//       li{
//           a{  
//               font-weight: bolder;
//               font-size: 1.2rem;
//               color: #ffffff;
//               text-decoration: none;
//             }
//             a::before {
//               content: "";
//               position: absolute;
//               display: block;
//               width: 100%;
//               height: 1.5px;
//               bottom: 0;
//               left: 0;
//               background-color: #6a6868;
//               transform: scaleX(0);
//               transition: transform 0.8s ease;
//               color:red;
//             }
//               a:hover::before {
//               transform: scaleX(1);
//               color:red;
//             }
//         }
    
//     }
//   }
// `

export default NavBar