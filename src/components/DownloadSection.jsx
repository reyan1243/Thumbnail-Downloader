import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import {MdDownloadForOffline} from 'react-icons/md'


export const DownloadSection = ()=>{
    const [isLoaded,setIsLoaded]=useState(true)    
    const handleDownload=()=>{
        console.log("Download image")
    }

    return(
    <>
    {
        isLoaded===true ? 
        <Container>
        <div onClick={handleDownload} className="down-sec">
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsJSFvewBphCd0-gaP5jDukdNiNsEaaiOnYA&usqp=CAU" alt="img" />
            
            <div>
            <div className="text">
                <span>1920 x 1080 </span><MdDownloadForOffline className="icon"></MdDownloadForOffline>
            </div>

            <div className="text">
                <span>640 x 480 </span><MdDownloadForOffline className="icon"></MdDownloadForOffline>
            </div>

            <div className="text">
                <span>480 x 360 </span><MdDownloadForOffline className="icon"></MdDownloadForOffline>
            </div>
            </div>
        
        </div>
        </Container>
        :
        <div></div>
    }
  </>
    
        )

}


const Container=styled.div`
position: absolute;
top: 26rem;
left: 0; 
right: 0; 
display: flex;
.down-sec{
    display: flex;
    margin-left: auto; 
    margin-right: auto;
    justify-content: center;
    align-items: center;
    img{
        width: 36vh;
        height: 32vh;
        border-radius: 10px;
    }
    .text{
        margin-bottom: 0.5rem;
        background-color: gray;
        margin-left: 9rem;
        font-size: 1.8rem;
        justify-content: center;
        align-items: center;
        padding: 4px;
        border-radius: 6px;
        cursor: pointer;
        
        .icon{
            
            color: greenyellow;
            font-size: 2rem;
        }
    }
    
}
`