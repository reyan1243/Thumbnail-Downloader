import { Link } from 'react-router-dom'
import styled from 'styled-components'

function NavBar({isScrolled}) {


  const links = [{ name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
  { name: "Privacy policy", link: "/policy" },
  { name: "DMCA", link: "/dmca" }
  ]

  return (
    <Container>
      <nav className={`flex ${isScrolled ? "scrolled" : ""}`}>
        <div className="left flex a-center">
          <div className="brand flex a-center j-center">
            <ul className="links flex">
              {links.map((obj) => {
                return (
                  <li style={{ color: 'blue' }} key={obj.name}>
                    <Link to={obj.link}>{obj.name}</Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </nav>
    </Container>
  )
}

const Container = styled.div`
.scrolled{
background-color: rgba(0, 0, 0, 0.7);

}

nav{
  position: sticky;
  top: 0;
  width: 100%; 
  justify-content : space-between;
  position: fixed;
  z-index: 2;
  padding: 2rem 0rem;
  align-items: center;
  transition: 0.3s ease-in-out;
  

    .brand{
      gap: 2rem;
      
      img{
        height:4rem;
      }
    }
    .links{
      display: flex;
      color:black;
      justify-content: center;
      list-style-type: none;
      gap: 2rem;

      li{
          a{  
              font-weight: bolder;
              font-size: 1.2rem;
              color: #ffffff;
              text-decoration: none;
            }
            a::before {
              content: "";
              position: absolute;
              display: block;
              width: 100%;
              height: 1.5px;
              bottom: 0;
              left: 0;
              background-color: #6a6868;
              transform: scaleX(0);
              transition: transform 0.8s ease;
              color:red;
            }
              a:hover::before {
              transform: scaleX(1);
              color:red;
            }
        }
    
    }
  }
`

export default NavBar