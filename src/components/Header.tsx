import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gray-800 text-gray-100 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-red-500">A Window Tinting</div>
        <nav className="hidden md:flex space-x-4">
          <a href="#services" className="hover:text-red-400">Services</a>
          <a href="#benefits" className="hover:text-red-400">Benefits</a>
          <a href="#coverage" className="hover:text-red-400">Coverage</a>
          <a href="#contact" className="hover:text-red-400">Contact</a>
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-700 p-4">
          <a href="#services" className="block py-2 hover:text-red-400">Services</a>
          <a href="#benefits" className="block py-2 hover:text-red-400">Benefits</a>
          <a href="#coverage" className="block py-2 hover:text-red-400">Coverage</a>
          <a href="#contact" className="block py-2 hover:text-red-400">Contact</a>
        </nav>
      )}
    </header>
  )
}

export default Header

