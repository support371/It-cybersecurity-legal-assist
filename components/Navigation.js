
import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Trust Badge - Non-intrusive positioning */}
      <div className="bg-blue-900 text-white py-1 px-4 text-xs text-center relative z-10">
        <div className="container mx-auto flex justify-between items-center">
          <span>🔒 Verified Legal Agency | Licensed & Insured</span>
          <span>📞 24/7 Emergency Legal Support Available</span>
        </div>
      </div>
      
      <nav className="bg-white shadow-lg border-b-4 border-blue-600 relative z-20">
        <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <span className="text-2xl mr-2">⚖️</span>
            <div>
              <h1 className="text-xl font-bold text-blue-800">IT & Cybersecurity Attorney</h1>
              <p className="text-xs text-gray-600">Consulting Legal Agency</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </a>
            <a href="/search" className="text-gray-700 hover:text-blue-600 font-medium">
              Search Directory
            </a>
            <a href="/legal-services" className="text-gray-700 hover:text-blue-600 font-medium">
              Legal Services
            </a>
            <a href="/financial-services" className="text-gray-700 hover:text-blue-600 font-medium">
              Financial Services
            </a>
            <a href="/cybersecurity" className="text-gray-700 hover:text-blue-600 font-medium">
              Cybersecurity
            </a>
            <a href="/enterprise" className="text-gray-700 hover:text-blue-600 font-medium">
              Enterprise
            </a>
            <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
              About
            </a>
            <a href="/dashboard" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium">
              Sign In
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <span className="text-2xl">{isMenuOpen ? '✕' : '☰'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <a href="/" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                Home
              </a>
              <a href="/search" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                Search Directory
              </a>
              <a href="/legal-services" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                Legal Services
              </a>
              <a href="/financial-services" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                Financial Services
              </a>
              <a href="/cybersecurity" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                Cybersecurity
              </a>
              <a href="/enterprise" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                Enterprise
              </a>
              <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                About
              </a>
              <a href="/dashboard" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-center">
                Sign In
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
    </>
  )
}
