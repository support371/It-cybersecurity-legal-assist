import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Resources() {
  return (
    <>
      <Head>
        <title>Legal Resources & Documentation - IT & Cybersecurity Attorney</title>
        <meta name="description" content="Access comprehensive IT law resources, cybersecurity compliance guides, and legal documentation" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Navigation />

        <main className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8 text-center">
            <h1 className="text-4xl font-bold mb-6">Legal Resources & Documentation</h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive collection of IT law resources, cybersecurity compliance guides, and technology legal documentation
            </p>
          </div>

          {/* Resource Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4 text-center">⚖️</div>
              <h3 className="text-xl font-semibold mb-3 text-center">IT Law Resources</h3>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>• Software Licensing Agreements</li>
                <li>• Technology Transfer Laws</li>
                <li>• Intellectual Property Guides</li>
                <li>• SaaS Legal Framework</li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium">
                Access IT Law Resources
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4 text-center">🔒</div>
              <h3 className="text-xl font-semibold mb-3 text-center">Cybersecurity Compliance</h3>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>• GDPR Compliance Templates</li>
                <li>• CCPA Implementation Guide</li>
                <li>• SOC 2 Preparation Kit</li>
                <li>• ISO 27001 Documentation</li>
              </ul>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium">
                View Compliance Guides
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4 text-center">📋</div>
              <h3 className="text-xl font-semibold mb-3 text-center">Legal Templates</h3>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>• Privacy Policy Templates</li>
                <li>• Terms of Service Generator</li>
                <li>• Data Processing Agreements</li>
                <li>• Incident Response Plans</li>
              </ul>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium">
                Download Templates
              </button>
            </div>
          </div>

          {/* Industry-Specific Resources */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6">Industry-Specific Legal Guidance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">🏥 Healthcare Technology</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-blue-600 hover:underline flex items-center">📄 HIPAA Compliance for Tech Companies</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline flex items-center">🔐 Health Data Security Standards</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline flex items-center">⚕️ Medical Device Software Regulations</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline flex items-center">📊 Telehealth Legal Framework</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">💰 Financial Technology</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-blue-600 hover:underline flex items-center">🏦 FinTech Regulatory Compliance</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline flex items-center">💳 Payment Processing Laws</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline flex items-center">🔒 Cryptocurrency Legal Guide</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline flex items-center">📈 Investment Tech Regulations</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Legal Updates & Blog */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6">Latest Legal Updates</h2>
            <div className="space-y-6">
              <article className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold mb-2">New EU AI Act: What Tech Companies Need to Know</h3>
                <p className="text-gray-600 mb-2">Understanding the compliance requirements for AI systems under the new European Union regulations.</p>
                <div className="text-sm text-gray-500">Published: January 15, 2025 | Category: AI Law</div>
              </article>

              <article className="border-l-4 border-green-500 pl-6">
                <h3 className="text-lg font-semibold mb-2">Cybersecurity Disclosure Rules for Public Companies</h3>
                <p className="text-gray-600 mb-2">SEC's new requirements for cybersecurity incident reporting and risk management disclosure.</p>
                <div className="text-sm text-gray-500">Published: January 10, 2025 | Category: Securities Law</div>
              </article>

              <article className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-lg font-semibold mb-2">State Privacy Laws Update: 2025 Compliance Calendar</h3>
                <p className="text-gray-600 mb-2">Key dates and requirements for new state privacy laws taking effect this year.</p>
                <div className="text-sm text-gray-500">Published: January 5, 2025 | Category: Privacy Law</div>
              </article>
            </div>
          </div>

          {/* Consultation CTA */}
          <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Personalized Legal Guidance?</h2>
            <p className="text-xl mb-6">
              Schedule a consultation with our IT & cybersecurity legal experts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Schedule Consultation
              </a>
              <a
                href="/legal-services"
                className="border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Our Services
              </a>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}