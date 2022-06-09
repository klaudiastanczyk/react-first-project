import Container from './components/Container/Container';
import Favorite from './components/Favorite/Favorite';
import NavBar from './components/NavBar/NavBar';
import Home from './Home/Home';
import About from './components/About/About'

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Home />
        <About />
        <Favorite />
      </Container>
    </main>
  );
};

export default App;