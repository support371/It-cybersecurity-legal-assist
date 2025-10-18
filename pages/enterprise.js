
import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Enterprise() {
  return (
    <>
      <Head>
        <title>Enterprise & Federal Solutions - Global Business Directory</title>
        <meta name="description" content="Enterprise-grade solutions for federal agencies and large organizations" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        <main className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8 text-center">
            <h1 className="text-4xl font-bold mb-6">Enterprise & Federal Solutions</h1>
            <p className="text-xl text-gray-600 mb-8">
              Scalable, secure solutions designed for federal agencies, government contractors, and large enterprises
            </p>
          </div>

          {/* Federal Enterprise Solutions */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="text-4xl mr-4">🏛️</span>
              Federal Enterprise Solutions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-semibold mb-3">Government-Wide Solutions</h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive platform solutions designed for federal agency requirements and inter-agency collaboration.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Cross-agency data sharing protocols</li>
                    <li>• Federated identity management</li>
                    <li>• Multi-tenant security architecture</li>
                    <li>• Government cloud deployment</li>
                    <li>• FISMA-compliant infrastructure</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-xl font-semibold mb-3">Defense & Intelligence</h3>
                  <p className="text-gray-600 mb-4">
                    Specialized solutions for defense contractors and intelligence agencies with enhanced security requirements.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• CMMC compliance automation</li>
                    <li>• Classified data handling</li>
                    <li>• Supply chain verification</li>
                    <li>• Foreign ownership, control, or influence (FOCI) tracking</li>
                    <li>• Security clearance integration</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-purple-600 pl-6">
                  <h3 className="text-xl font-semibold mb-3">Financial & Treasury</h3>
                  <p className="text-gray-600 mb-4">
                    Regulatory compliance solutions for financial institutions and Treasury Department requirements.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Anti-money laundering (AML) compliance</li>
                    <li>• Sanctions screening automation</li>
                    <li>• Financial crimes enforcement</li>
                    <li>• Bank Secrecy Act reporting</li>
                    <li>• FinCEN compliance monitoring</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-orange-600 pl-6">
                  <h3 className="text-xl font-semibold mb-3">Healthcare & HHS</h3>
                  <p className="text-gray-600 mb-4">
                    HIPAA-compliant solutions for healthcare agencies and Department of Health and Human Services.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• HIPAA compliance automation</li>
                    <li>• PHI protection protocols</li>
                    <li>• Healthcare interoperability</li>
                    <li>• FDA regulatory tracking</li>
                    <li>• Public health reporting</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Enterprise Features */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6">Enterprise Platform Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 border rounded-lg">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-xl font-semibold mb-3">API Integration</h3>
                <p className="text-gray-600 mb-4">RESTful APIs with government-grade security and authentication</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• OAuth 2.0 / OpenID Connect</li>
                  <li>• Rate limiting & throttling</li>
                  <li>• Comprehensive audit logging</li>
                  <li>• Real-time data synchronization</li>
                </ul>
              </div>
              
              <div className="text-center p-6 border rounded-lg">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold mb-3">Advanced Analytics</h3>
                <p className="text-gray-600 mb-4">Business intelligence and compliance analytics for decision makers</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Custom dashboard creation</li>
                  <li>• Predictive compliance modeling</li>
                  <li>• Risk trend analysis</li>
                  <li>• Automated reporting</li>
                </ul>
              </div>
              
              <div className="text-center p-6 border rounded-lg">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-semibold mb-3">Security Controls</h3>
                <p className="text-gray-600 mb-4">Multi-layered security architecture with continuous monitoring</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Zero Trust implementation</li>
                  <li>• End-to-end encryption</li>
                  <li>• Multi-factor authentication</li>
                  <li>• Behavioral analytics</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Deployment Options */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6">Deployment Options</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="border rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">☁️</div>
                <h3 className="font-semibold mb-2">FedRAMP Cloud</h3>
                <p className="text-sm text-gray-600">Authorized cloud services for federal agencies</p>
              </div>
              
              <div className="border rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">🏢</div>
                <h3 className="font-semibold mb-2">On-Premises</h3>
                <p className="text-sm text-gray-600">Full control deployment within agency infrastructure</p>
              </div>
              
              <div className="border rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">🔗</div>
                <h3 className="font-semibold mb-2">Hybrid</h3>
                <p className="text-sm text-gray-600">Flexible deployment across cloud and on-premises</p>
              </div>
              
              <div className="border rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">🔒</div>
                <h3 className="font-semibold mb-2">Air-Gapped</h3>
                <p className="text-sm text-gray-600">Isolated deployment for classified environments</p>
              </div>
            </div>
          </div>

          {/* Support & Services */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Enterprise Support & Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Professional Services</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Implementation and deployment planning
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Custom integration development
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Data migration and transformation
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Compliance assessment and remediation
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Training and change management
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Enterprise Support</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    24/7 dedicated support team
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    Government-cleared support staff
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    Priority incident response (15-minute SLA)
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    Dedicated customer success manager
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    Quarterly business reviews and optimization
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-blue-600 text-white rounded-lg p-8 mt-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Scale Your Operations?</h2>
            <p className="text-xl mb-6">
              Contact our enterprise team to discuss your federal compliance and security requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Request Enterprise Demo
              </a>
              <a
                href="/resources"
                className="border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Download Solution Brief
              </a>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}
