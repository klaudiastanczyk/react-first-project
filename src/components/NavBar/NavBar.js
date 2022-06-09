import styles from './NavBar.module.scss'
import Container from '../Container/Container';
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
              <li><a href='/home'>Home</a></li>
              <li><a href='/favorite'>Favorite</a></li>
              <li><a href='/about'>About</a></li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default NavBar;