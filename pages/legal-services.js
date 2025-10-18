
import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function LegalServices() {
  return (
    <>
      <Head>
        <title>IT & Cybersecurity Legal Services - Specialized Technology Law</title>
        <meta name="description" content="Expert legal services for technology companies, cybersecurity compliance, data protection, and IT law matters" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        <main className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8 text-center">
            <h1 className="text-4xl font-bold mb-6">IT & Cybersecurity Legal Services</h1>
            <p className="text-xl text-gray-600 mb-8">
              Specialized legal expertise for technology companies, cybersecurity matters, and digital business operations
            </p>
          </div>

          {/* Core Practice Areas */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="text-4xl mr-4">⚖️</span>
              Core Legal Practice Areas
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="text-2xl mr-2">🔒</span>
                  Data Protection & Privacy Law
                </h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive privacy compliance for global data protection regulations.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• GDPR & CCPA compliance</li>
                  <li>• Privacy policy development</li>
                  <li>• Data breach response</li>
                  <li>• International data transfers</li>
                  <li>• Privacy impact assessments</li>
                </ul>
                <a href="/contact" className="text-blue-600 hover:underline font-medium">
                  Learn More →
                </a>
              </div>

              <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="text-2xl mr-2">🛡️</span>
                  Cybersecurity Law
                </h3>
                <p className="text-gray-600 mb-4">
                  Legal guidance for cybersecurity frameworks and incident response.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• SOC 2 compliance strategy</li>
                  <li>• ISO 27001 implementation</li>
                  <li>• Incident response planning</li>
                  <li>• Vendor security assessments</li>
                  <li>• Cyber insurance claims</li>
                </ul>
                <a href="/contact" className="text-blue-600 hover:underline font-medium">
                  Learn More →
                </a>
              </div>

              <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="text-2xl mr-2">💻</span>
                  Software & Technology Law
                </h3>
                <p className="text-gray-600 mb-4">
                  Legal support for software development and technology transactions.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• Software licensing agreements</li>
                  <li>• SaaS terms of service</li>
                  <li>• API legal frameworks</li>
                  <li>• Open source compliance</li>
                  <li>• Technology M&A support</li>
                </ul>
                <a href="/contact" className="text-blue-600 hover:underline font-medium">
                  Learn More →
                </a>
              </div>

              <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="text-2xl mr-2">🏢</span>
                  Corporate Technology Law
                </h3>
                <p className="text-gray-600 mb-4">
                  Business formation and governance for technology companies.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• Startup legal packages</li>
                  <li>• Board governance</li>
                  <li>• Employment law compliance</li>
                  <li>• Executive compensation</li>
                  <li>• Equity structure planning</li>
                </ul>
                <a href="/contact" className="text-blue-600 hover:underline font-medium">
                  Learn More →
                </a>
              </div>

              <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="text-2xl mr-2">🤖</span>
                  AI & Emerging Technology
                </h3>
                <p className="text-gray-600 mb-4">
                  Cutting-edge legal guidance for AI and emerging technologies.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• AI governance frameworks</li>
                  <li>• Machine learning compliance</li>
                  <li>• Algorithmic transparency</li>
                  <li>• Blockchain legal issues</li>
                  <li>• IoT device regulations</li>
                </ul>
                <a href="/contact" className="text-blue-600 hover:underline font-medium">
                  Learn More →
                </a>
              </div>

              <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="text-2xl mr-2">🏥</span>
                  Industry-Specific Compliance
                </h3>
                <p className="text-gray-600 mb-4">
                  Specialized compliance for regulated industries.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• HIPAA for health tech</li>
                  <li>• Financial services (GLBA)</li>
                  <li>• Education (FERPA)</li>
                  <li>• Government contracting</li>
                  <li>• International compliance</li>
                </ul>
                <a href="/contact" className="text-blue-600 hover:underline font-medium">
                  Learn More →
                </a>
              </div>
            </div>
          </div>

          {/* Service Packages */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6">Service Packages</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border rounded-lg p-6 text-center">
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-4">Startup Legal Package</h3>
                <div className="text-2xl font-bold mb-4">$2,500</div>
                <ul className="text-left space-y-2 mb-6 text-sm">
                  <li>✓ Corporate formation</li>
                  <li>✓ Privacy policy & terms</li>
                  <li>✓ Employment agreements</li>
                  <li>✓ Founder agreements</li>
                  <li>✓ IP protection basics</li>
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold">
                  Get Started
                </button>
              </div>

              <div className="border-2 border-blue-500 rounded-lg p-6 text-center relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </div>
                <div className="text-3xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold mb-4">Compliance Audit</h3>
                <div className="text-2xl font-bold mb-4">$5,000</div>
                <ul className="text-left space-y-2 mb-6 text-sm">
                  <li>✓ Full privacy compliance review</li>
                  <li>✓ Security framework assessment</li>
                  <li>✓ Gap analysis report</li>
                  <li>✓ Remediation roadmap</li>
                  <li>✓ 3 months follow-up support</li>
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold">
                  Schedule Audit
                </button>
              </div>

              <div className="border rounded-lg p-6 text-center">
                <div className="text-3xl mb-4">🏢</div>
                <h3 className="text-xl font-semibold mb-4">Enterprise Support</h3>
                <div className="text-2xl font-bold mb-4">Custom</div>
                <ul className="text-left space-y-2 mb-6 text-sm">
                  <li>✓ Dedicated legal counsel</li>
                  <li>✓ Ongoing compliance monitoring</li>
                  <li>✓ Crisis response team</li>
                  <li>✓ Board-level advisory</li>
                  <li>✓ M&A transaction support</li>
                </ul>
                <button className="w-full bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg font-semibold">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Why Choose Our Firm</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-2xl mr-4">🎓</span>
                  <div>
                    <h3 className="font-semibold mb-2">Technical Expertise</h3>
                    <p className="text-gray-600">Our attorneys have technical backgrounds and understand the complexities of modern technology.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-2xl mr-4">🌐</span>
                  <div>
                    <h3 className="font-semibold mb-2">Global Compliance</h3>
                    <p className="text-gray-600">Experience with international privacy laws and cross-border data transfer requirements.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-2xl mr-4">⚡</span>
                  <div>
                    <h3 className="font-semibold mb-2">Rapid Response</h3>
                    <p className="text-gray-600">24/7 incident response support for cybersecurity events and data breaches.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-2xl mr-4">💼</span>
                  <div>
                    <h3 className="font-semibold mb-2">Business-Focused</h3>
                    <p className="text-gray-600">Practical legal solutions that support your business objectives and growth.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-blue-600 rounded-lg p-8 mt-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Technology Business?</h2>
            <p className="text-xl mb-6">
              Schedule a consultation with our IT & cybersecurity legal experts today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule Free Consultation
              </a>
              <a
                href="/resources"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Legal Resources
              </a>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}
