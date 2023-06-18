import { NavLink } from 'react-router-dom';

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
  if (position === 'right') {
    styles.nav = {
      marginRight: 175,
      height: 90,
      display: 'flex',
      justifyContent: 'flex-end',
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "22px",
    };
  } else {
    styles.nav = {
      marginLeft: 175,
      height: 90,
      display: 'flex',
      justifyContent: 'flex-start',
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "22px",
    };
  }

  return (
    <div>
      <nav style={styles.nav}>
        <div style={styles.container}>
          <NavLink
            to='/'
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }
          >
            Main
          </NavLink>

          <NavLink
            to='/contact'
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }
          >
            Contact
          </NavLink>

          <NavLink
            to='/blog'
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }
          >
            Blog
          </NavLink>

          <NavLink
            to='/collection'
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }
          >
            Collection
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
