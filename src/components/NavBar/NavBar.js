import styles from './NavBar.module.scss'
import Container from '../Container/Container';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  return (
    <div className={styles.nav}>
      <Container>
        <div  className={styles.navIns}>
          <div>
            <a href='/' className={styles.link}><i className="fa fa-tasks"></i></a>
          </div>
          <div>
            <ul className={styles.list}>
              <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink></li>
              <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorite">Favorite</NavLink></li>
              <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink></li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default NavBar;