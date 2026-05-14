import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';

function App() {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <Skills />
        <Projects />
      </div>
      <Footer />
    </>
  )
}

export default App;