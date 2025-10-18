
import { useState } from 'react'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchTerm.trim())}`
    }
  }

  return (
    <>
      <Head>
        <title>IT & Cybersecurity Attorney - Consulting Legal Agency</title>
        <meta name="description" content="Expert IT law, cybersecurity compliance, technology legal services, and consulting solutions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        {/* Hero Section */}
        <main className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              IT & Cybersecurity Legal Expertise
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Specialized legal consulting for technology companies, cybersecurity compliance, 
              data protection law, and comprehensive IT legal solutions.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a
                href="/legal-services"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-center transition-colors text-lg"
              >
                Explore Legal Services
              </a>
              <a
                href="/contact"
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-4 rounded-lg font-semibold text-center transition-colors text-lg"
              >
                Schedule Consultation
              </a>
            </div>
          </div>

          {/* Service Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-semibold mb-3">Legal Services</h3>
              <p className="text-gray-600 mb-4">Power of Attorney, Trust Management, Compliance & Documentation</p>
              <a href="/legal-services" className="text-blue-600 hover:underline font-medium">Learn More →</a>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-semibold mb-3">Financial Services</h3>
              <p className="text-gray-600 mb-4">Business Banking, Investment Protection, Secure Operations</p>
              <a href="/financial-services" className="text-blue-600 hover:underline font-medium">Learn More →</a>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-3">Cybersecurity</h3>
              <p className="text-gray-600 mb-4">Data Protection, Regulatory Compliance, Security Solutions</p>
              <a href="/cybersecurity" className="text-blue-600 hover:underline font-medium">Learn More →</a>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold mb-3">Enterprise Solutions</h3>
              <p className="text-gray-600 mb-4">Corporate Legal Packages, Global Compliance, API Access</p>
              <a href="/enterprise" className="text-blue-600 hover:underline font-medium">Learn More →</a>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Trusted by Professionals</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <p className="text-gray-600">Active Clients</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <p className="text-gray-600">Jurisdictions Covered</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
                <p className="text-gray-600">Compliance Rate</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <p className="text-gray-600">Emergency Support</p>
              </div>
            </div>
          </div>

          {/* How It Works Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl">📋</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">1. Consultation</h3>
                <p className="text-gray-600">Schedule a consultation to discuss your legal and financial needs with our experts.</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl">📄</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">2. Documentation</h3>
                <p className="text-gray-600">We prepare and file all necessary legal documents with proper compliance oversight.</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 w-20 h-20 rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl">🔐</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">3. Secure Management</h3>
                <p className="text-gray-600">Ongoing secure management and compliance monitoring of your legal and financial affairs.</p>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}
