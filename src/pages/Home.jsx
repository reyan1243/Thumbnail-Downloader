import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
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
    <Container>
      
      <div className="hero">
        <div className='body-text'>
          <span>
            Thumbnail Downloader
          </span>
        </div>

        <div className="form">
          <input type="text" placeholder='Search' name='search' value={formValues.search} onChange={(e) => setFormValues({
            ...formValues, [e.target.name]: e.target.value,
          })} />
          <button onClick={handleSignUp}>Search</button>
        </div >
        <DownloadSection/>
        
        {/* <Footer/> */}
      
      </div>
      
    </Container>
  )
}

const Container = styled.div`
.hero{

  .body-text{
    position:absolute;
    left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto; 
    top: 13rem;
    color: white;
    font-size: 3.2rem;
    font-weight: bold;
  }
  .form{  
    position:absolute;
    top: 18rem;
      display:grid;
      width:58%;
      margin-left: auto; 
  margin-right: auto; 
  left: 0; 
  right: 0; 
  grid-template-columns:${"2fr 1fr"};
      input{
        color:black;
        border:none;
        padding:1.2rem;
        font-size:1.2rem;
        border:1px solid black; 
        &:focus{
          outline:none;
        }
        
      }
        button{
          padding:0.5rem 1rem;
          background-color:#e50914;
          border: none;

          cursor:pointer;
          color:white;
          font-weight:bolder;
          font-size: 1.05rem;
        
      }
    }

}
`


