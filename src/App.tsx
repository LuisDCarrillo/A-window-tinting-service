import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Benefits from './components/Benefits';
import Coverage from './components/Coverage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Benefits />
        <Coverage />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App