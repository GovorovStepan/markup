import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { useMediaQuery } from 'react-responsive';
import Hamburger from 'hamburger-react'
import './Header.css'
import { useState } from 'react';

const styles = {
  container: {
    width: '35%',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 90,
    margin: 0,
  },
};


export default function Header({ position }) {
  const isTablet = useMediaQuery({ query: '(max-width: 934px)' });
  const [burgerMenuDisplay, setBurgerMenuDisplay] = useState('none')
  const [isOpen, setOpen] = useState(false)
  const scrollTo = (value) => {
    window.scrollTo(0, 0);
    setOpen(false); 
    setBurgerMenuDisplay('none'); 
    document.getElementById('content').classList.remove('content-blur')
  }
  if (isTablet) {
    if (position === 'right') {
      return (
        <div style={{
          position: "fixed",
          zIndex: 100000,
          width: "100%",
          padding: 10,
          borderBottom: "2px solid black",
          background: "white"
        }}>

          <Hamburger 
          toggled={isOpen}
          toggle={toggled => {
            setOpen(toggled)
            if (toggled) {
              setBurgerMenuDisplay('flex')
              document.getElementById('content').classList.add('content-blur')
            } else {
              setBurgerMenuDisplay('none')
              document.getElementById('content').classList.remove('content-blur')
            }
          }} direction="right" />

          <div id="menu" style={{ display: burgerMenuDisplay }}>
            <div id="links_text">
              <NavLink
                to='/'
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'active ' : ''
                }
                onClick={() => scrollTo()}
              >
                Main
              </NavLink>
              <Link
                to='/#contacts'
                // smooth = 'true'
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'active' : ''
                }
                onClick={() => { setOpen(false); setBurgerMenuDisplay('none'); document.getElementById('content').classList.remove('content-blur')}}
              >
                Contact
              </Link>
              <NavLink
                to='/blog'
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'active' : ''
                }
                onClick={() => scrollTo()}
              >
                Blog
              </NavLink>
              <NavLink
                to='/collection'
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'active ' : ''
                }
                onClick={() => scrollTo()}
              >
                Collection
              </NavLink>

            </div>
          </div>
        </div >
      );
    } else {
      styles.nav = {
        height: 90,
        display: 'flex',
        justifyContent: 'flex-start',
        fontWeight: 400,
        fontSize: 16,
        lineHeight: "22px",
      };
      styles.container =  {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 90,
        margin: 0,
      };
      return (
        <div className='border-bottom'>
          <nav style={styles.nav}>
            <div style={styles.container}>
              <NavLink
                to='/'
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'active' : ''
                }
                onClick={() => scrollTo()}
              >
                Main
              </NavLink>

              <NavLink
                to='/#contacts'
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'active' : ''
                }
                // onClick={() => scrollTo()}
              >
                Contact
              </NavLink>

              <NavLink
                to='/blog'
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'active' : ''
                }
                onClick={() => scrollTo()}
              >
                Blog
              </NavLink>

              <NavLink
                to='/collection'
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'active' : ''
                }
                onClick={() => scrollTo()}
              >
                Collection
              </NavLink>
            </div>
          </nav>
        </div>)

    }

  } else {
    if (position === 'right') {
      styles.nav = {
        marginRight: 30,
        height: 90,
        display: 'flex',
        justifyContent: 'flex-end',
        fontWeight: 400,
        fontSize: 16,
        lineHeight: "22px",
      };
    } else {
      styles.nav = {
        marginLeft: 30,
        height: 90,
        display: 'flex',
        justifyContent: 'flex-start',
        fontWeight: 400,
        fontSize: 16,
        lineHeight: "22px",
      };
    }
    return (
      <div className='border-bottom'>
        <nav style={styles.nav}>
          <div style={styles.container}>
            <NavLink
              to='/'
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'active' : ''
              }
              onClick={() => scrollTo()}
            >
              Main
            </NavLink>

            <Link
              to='/#contacts'
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'active' : ''
              }
              // onClick={() => scrollTo()}
            >
              Contact
            </Link>

            <NavLink
              to='/blog'
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'active' : ''
              }
              onClick={() => scrollTo()}
            >
              Blog
            </NavLink>

            <NavLink
              to='/collection'
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'active' : ''
              }
              onClick={() => scrollTo()}
            >
              Collection
            </NavLink>
          </div>
        </nav>
      </div>
    );
  }

}
