import './App.css'
import { Footer, Header } from './components/layout';
import { Home, Experience, Projects, Contact } from './pages';

function App() {
  return (
    <>
      <Header />
        <Home />
        <Projects />
        <Experience />
        <Contact />
      <Footer />
    </>
  )
}

export default App
