import React from 'react'
import { useState } from 'react'
// import styled from 'styled-components'
import { DownloadSection } from '../components/DownloadSection'
import { Footer } from '../components/Footer'


export const Home = () => {
  const [formValues, setFormValues] = useState({
    search: ""
  })

  const handleSignUp = async () => {
    console.log("form submitted")
    if(formValues.search!==null){
      console.log("fetch the image data to download")
    }
  }

  return ( 
  <div className='w-full text-white'>
      <div className='sm:py-12 py-8'>
        <h1 className='max-w-[1240px] px-2 mb-4 md:text-5xl sm:text-4xl text-2xl font-extrabold flex justify-center items-center mx-auto text-white'>YouTube Thumbnail downloader</h1>
      
      <div className="max-w-[1240px] flex flex-col sm:flex-row items-center justify-center mx-auto px-4">
        
          <input className='p-3 lg:w-[40rem] md:w-[32rem] sm:w-[28rem] w-[18rem] rounded-md text-black col-span-2 border-none' type="text" name="" id="" placeholder='Paste your URL here'/>
          <button className='bg-[#00df9a] w-[200px] rounded-md ml-4 my-6 px-6 py-3 text-black font-bold'>Search</button>   
        
      </div>  
        <div className='flex justify-center mx-auto max-w-[1240px] sm:mt-4 md:mt-12 '>
        <DownloadSection/>
      </div>
    </div>
      <Footer />
  </div>
   )
}

// const Container = styled.div`
// .hero{

//   .body-text{
//     position:absolute;
//     left: 0; 
//   right: 0; 
//   margin-left: auto; 
//   margin-right: auto; 
//     top: 13rem;
//     color: white;
//     font-size: 3.2rem;
//     font-weight: bold;
//   }
//   .form{  
//     position:relative;
//     top: 18rem;
//       display:grid;
//       width:58%;
//       margin-left: auto; 
//   margin-right: auto; 
//   left: 0; 
//   right: 0; 
//   grid-template-columns:${"2fr 1fr"};
//       input{
//         color:black;
//         border:none;
//         padding:1.2rem;
//         font-size:1.2rem;
//         border:1px solid black; 
//         &:focus{
//           outline:none;
//         }
        
//       }
//         button{
//           padding:0.5rem 1rem;
//           background-color:#e50914;
//           border: none;

//           cursor:pointer;
//           color:white;
//           font-weight:bolder;
//           font-size: 1.05rem;
        
//       }
//     }

// }
// `


