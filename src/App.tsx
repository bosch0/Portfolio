import './App.css';
import { Footer, Header } from './components/layout';
import { ImageViewerProvider } from './components/ui';
import { Home, Projects, Stack, About, Contact } from './pages';
import { useLocale } from './hooks';

function App() {
  const { t } = useLocale();

  return (
    <ImageViewerProvider>
      <a
        href="#main"
        className="absolute left-4 -top-20 z-500 rounded-full bg-yellow px-4 py-2 font-mono text-[13px] font-medium text-ink focus:top-3"
      >
        {t.meta.skip}
      </a>
      <Header />
      <main id="main" className="overflow-x-clip">
        <Home />
        <Projects />
        <Stack />
        <About />
        <Contact />
      </main>
      <Footer />
    </ImageViewerProvider>
  );
}

export default App;
