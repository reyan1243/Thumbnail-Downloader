import React from 'react'
import { AiOutlineFacebook, AiOutlineMail } from "react-icons/ai"
import {BsInstagram, BsWhatsapp} from "react-icons/bs"
import {RxTwitterLogo} from "react-icons/rx"
import styled from 'styled-components'

export const Footer = () => {
    return (
        <Container>
        <div className='flex'>
            <div className='social'>
                <h2>Get connected with us on social networks:</h2>
                <div className='icons'>
                    <AiOutlineMail />
                    <AiOutlineFacebook />
                    <RxTwitterLogo />
                    <BsInstagram />
                    <BsWhatsapp />
                </div>
            </div>

            <div className='contact'>
                <h2>About us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum excepturi quidem natus vitae sequi exercitationem dolorem odit unde quaerat? Cumque nam alias amet quasi, illum autem expedita sed nihil temporibus, rem placeat aperiam voluptas perspiciatis. Quos..</p>
            </div>

        </div>
        </Container>
    )
}


const Container = styled.div`
background-color: rgba(0, 0, 0, 0.5);
align-items: center;
position: absolute;
top: 80rem;
    .flex{
        width:100vw;
        display: flex;
        .social{
            width: 50%;
            padding: 1rem;
            align-items: center;
            justify-content: center;
            h2{
                font-size: 2.2rem;
            }
            .icons{
                padding: 1.5rem;
                font-size: 1.8rem;
                margin-top: 1rem;
                gap: 1.5rem;
                justify-content: center;
                display: flex;
            }
        }
        .contact{
            width: 50%;
            padding: 1rem;
            h2{
                font-size: 2.2rem;
            }
            p{
                padding: 1.5rem;
            }
        }

}
`
