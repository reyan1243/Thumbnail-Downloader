import React, { useState } from "react";
// import styled, { createGlobalStyle } from "styled-components";
import {MdDownloadForOffline} from 'react-icons/md'


export const DownloadSection = ()=>{
    const [isLoaded,setIsLoaded]=useState(true)
    const [img,setImg]= useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsJSFvewBphCd0-gaP5jDukdNiNsEaaiOnYA&usqp=CAU")    
    const handleDownload=()=>{
        console.log("Download image")
    }

    return(
    <>
    {
        isLoaded===true ? 
        <>
        <div onClick={handleDownload} className="md:gap-10 text-white grid md:grid-cols-2 grid-rows-2 ">
           
            <img className="md:max-w-[650px]  sm:max-w-[450px] max-w-[250px]" src={img} alt="img" />
         
            
            <div className="gap-4 flex flex-col justify-center mx-auto text-xl sm:text-2xl md-text-3xl">
            
            <div className="border-white border-2 rounded-lg p-1 cursor-pointer items-center justify-center flex flex-col">
                <span >1920 x 1080 </span><MdDownloadForOffline className="text-red-600"/>
            </div>

            <div className="border-white border-2 rounded-lg p-1 cursor-pointer items-center justify-center flex flex-col">
                                    <span>640 x 480 </span><MdDownloadForOffline className="text-red-600" />
            </div>

            <div className="border-white border-2 rounded-lg p-1 cursor-pointer items-center justify-center flex flex-col">
                                    <span>480 x 360 </span><MdDownloadForOffline className="text-red-600" />
            </div>
            </div>
        
        </div>
        </>
        :
        <></>
    }
  </>
    
        )

}


// const Container=styled.div`
// position: absolute;
// top: 26rem;
// left: 0; 
// right: 0; 
// /* display: flex; */
// .down-sec{
//     /* display: flex; */
//     margin-left: auto; 
//     margin-right: auto;
//     justify-content: center;
//     align-items: center;
//     img{
//         width: 36vh;
//         height: 32vh;
//         border-radius: 10px;
//     }
//     .text{
//         margin-bottom: 0.5rem;
//         background-color: gray;
//         margin-left: 9rem;
//         font-size: 1.8rem;
//         justify-content: center;
//         align-items: center;
//         padding: 4px;
//         border-radius: 6px;
//         cursor: pointer;
        
//         .icon{
            
//             color: greenyellow;
//             font-size: 2rem;
//         }
//     }
    
// }
// `