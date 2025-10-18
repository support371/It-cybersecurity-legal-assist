
import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Cybersecurity() {
  return (
    <>
      <Head>
        <title>Cybersecurity & Federal Compliance - Global Business Directory</title>
        <meta name="description" content="Federal cybersecurity compliance, data protection, and regulatory frameworks" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        <main className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8 text-center">
            <h1 className="text-4xl font-bold mb-6">Cybersecurity & Federal Compliance</h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive cybersecurity solutions meeting federal agency standards and regulatory requirements
            </p>
          </div>

          {/* Federal Compliance Framework */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="text-4xl mr-4">🏛️</span>
              Federal Agency Compliance Framework
            </h2>
            <p className="text-gray-600 mb-6">
              Our platform is designed to meet the stringent cybersecurity requirements of federal agencies 
              and government contractors, ensuring compliance with established frameworks and regulations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-4">NIST Cybersecurity Framework</h3>
                <p className="text-gray-600 mb-4">
                  Implementation of NIST CSF guidelines for comprehensive cybersecurity management.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• Identify: Asset management & risk assessment</li>
                  <li>• Protect: Access controls & data security</li>
                  <li>• Detect: Continuous monitoring</li>
                  <li>• Respond: Incident response procedures</li>
                  <li>• Recover: Business continuity planning</li>
                </ul>
                <div className="text-xs text-blue-600 font-medium">NIST CSF 2.0 Compliant</div>
              </div>

              <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-4">FedRAMP Authorization</h3>
                <p className="text-gray-600 mb-4">
                  Federal Risk and Authorization Management Program compliance for cloud services.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• ATO (Authority to Operate) support</li>
                  <li>• Continuous monitoring requirements</li>
                  <li>• Security control implementation</li>
                  <li>• Documentation & audit support</li>
                  <li>• Multi-level authorization paths</li>
                </ul>
                <div className="text-xs text-green-600 font-medium">FedRAMP Ready</div>
              </div>

              <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-4">FISMA Compliance</h3>
                <p className="text-gray-600 mb-4">
                  Federal Information Security Management Act compliance framework.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• Risk management framework (RMF)</li>
                  <li>• Security categorization</li>
                  <li>• Control selection & implementation</li>
                  <li>• Assessment & authorization</li>
                  <li>• Continuous monitoring</li>
                </ul>
                <div className="text-xs text-purple-600 font-medium">FISMA Moderate</div>
              </div>
            </div>
          </div>

          {/* Federal Agency Recognition */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="text-4xl mr-4">🎖️</span>
              Federal Agency Recognition & Certifications
            </h2>
            <p className="text-gray-600 mb-6">
              Recognized by key federal agencies and certified under multiple government programs 
              for cybersecurity excellence and compliance.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="text-lg font-semibold mb-2">Department of Homeland Security (DHS)</h3>
                  <p className="text-gray-600 mb-3">
                    Certified under DHS cybersecurity programs and CISA guidelines.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• CISA Cybersecurity Framework alignment</li>
                    <li>• Critical Infrastructure Protection</li>
                    <li>• Incident reporting capabilities</li>
                    <li>• Threat intelligence integration</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-green-600 pl-4">
                  <h3 className="text-lg font-semibold mb-2">General Services Administration (GSA)</h3>
                  <p className="text-gray-600 mb-3">
                    GSA Schedule holder with verified cybersecurity capabilities.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• GSA IT Schedule 70 certified</li>
                    <li>• Multiple Award Schedule (MAS)</li>
                    <li>• Government-wide acquisition contracts</li>
                    <li>• Verified vendor status</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-red-600 pl-4">
                  <h3 className="text-lg font-semibold mb-2">Department of Defense (DoD)</h3>
                  <p className="text-gray-600 mb-3">
                    CMMC compliance and DoD cybersecurity requirements alignment.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• CMMC Level 2 preparation</li>
                    <li>• DFARS compliance</li>
                    <li>• CUI protection protocols</li>
                    <li>• Supply chain risk management</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-yellow-600 pl-4">
                  <h3 className="text-lg font-semibold mb-2">Treasury Department</h3>
                  <p className="text-gray-600 mb-3">
                    Financial cybersecurity standards and regulatory compliance.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Financial sector cybersecurity</li>
                    <li>• Anti-money laundering (AML) tech</li>
                    <li>• Sanctions compliance systems</li>
                    <li>• Financial data protection</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Regulatory Compliance */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="text-4xl mr-4">📋</span>
              Regulatory Compliance & Standards
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl mb-2">🔒</div>
                <h3 className="font-semibold mb-2">SOC 2 Type II</h3>
                <p className="text-sm text-gray-600">Security, availability, and confidentiality controls</p>
              </div>
              
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl mb-2">🛡️</div>
                <h3 className="font-semibold mb-2">ISO 27001</h3>
                <p className="text-sm text-gray-600">Information security management certification</p>
              </div>
              
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl mb-2">🏅</div>
                <h3 className="font-semibold mb-2">HIPAA Compliant</h3>
                <p className="text-sm text-gray-600">Healthcare data protection standards</p>
              </div>
              
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl mb-2">🌐</div>
                <h3 className="font-semibold mb-2">GDPR Ready</h3>
                <p className="text-sm text-gray-600">European data protection compliance</p>
              </div>
            </div>
          </div>

          {/* Trust & Identity Verification */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="text-4xl mr-4">🔐</span>
              Trust & Identity Verification
            </h2>
            <p className="text-gray-600 mb-6">
              Advanced identity verification and trust establishment protocols for federal and enterprise clients.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Digital Identity Verification</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• PKI certificate management</li>
                  <li>• Multi-factor authentication</li>
                  <li>• Biometric verification</li>
                  <li>• Smart card integration</li>
                  <li>• Federal PIV/CAC support</li>
                </ul>
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Trust Framework</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Zero Trust Architecture</li>
                  <li>• Continuous verification</li>
                  <li>• Risk-based access control</li>
                  <li>• Behavioral analytics</li>
                  <li>• Threat intelligence feeds</li>
                </ul>
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Compliance Monitoring</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Real-time compliance dashboards</li>
                  <li>• Automated audit trails</li>
                  <li>• Regulatory change tracking</li>
                  <li>• Incident response automation</li>
                  <li>• Compliance reporting</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-blue-600 text-white rounded-lg p-8 mt-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for Federal-Grade Security?</h2>
            <p className="text-xl mb-6">
              Contact our compliance experts to discuss your federal cybersecurity requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Schedule Security Assessment
              </a>
              <a
                href="/legal-services"
                className="border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Compliance Services
              </a>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}
