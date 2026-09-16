import './App.css';
import { Footer, Header } from './components/layout';
import { Home, Projects, About, Contact } from './pages';
import { useLocale } from './hooks';

function App() {
  const { t } = useLocale();

  return (
    <>
      <a
        href="#main"
        className="absolute left-4 -top-16 z-100 rounded-md bg-accent px-3 py-2 font-mono text-[13px] text-accent-ink focus:top-3"
      >
        {t.meta.skip}
      </a>
      <Header />
      <main id="main">
        <Home />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
