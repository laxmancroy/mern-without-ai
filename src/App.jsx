import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Skills } from './components/Skills';

function App() {
  return (
    <>
      <Header />
      <div className="bg-red-600">This is App</div>
      <Skills />
      <Footer />
    </>
  )
}

export default App;