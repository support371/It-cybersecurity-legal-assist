
import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function FinancialServices() {
  return (
    <>
      <Head>
        <title>Financial & Asset Services - Global Business Directory</title>
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        <main className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h1 className="text-4xl font-bold mb-6">Financial & Asset Services</h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive financial solutions integrated with legal protections for secure business operations.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Business Bank Account Setup */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Business Bank Account Setup</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold mb-2">Corporate Account Services</h3>
                  <p className="text-gray-600 mb-3">
                    Streamlined business banking setup with compliance documentation.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Multi-currency accounts</li>
                    <li>• Merchant services integration</li>
                    <li>• Wire transfer capabilities</li>
                    <li>• Cash management solutions</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-lg font-semibold mb-2">Documentation & Compliance</h3>
                  <p className="text-gray-600 mb-3">
                    Complete paperwork and regulatory compliance support.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• KYC/AML compliance</li>
                    <li>• Beneficial ownership documentation</li>
                    <li>• CRS/FATCA reporting setup</li>
                    <li>• Regulatory filing assistance</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Investment Protection */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Investment Protection</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-lg font-semibold mb-2">Asset Protection Strategies</h3>
                  <p className="text-gray-600 mb-3">
                    Safeguard investments through legal structures and compliance.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Trust-based protection</li>
                    <li>• Liability limitation strategies</li>
                    <li>• Insurance coordination</li>
                    <li>• Risk assessment</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-lg font-semibold mb-2">Portfolio Management</h3>
                  <p className="text-gray-600 mb-3">
                    Professional investment oversight with legal protection.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Fiduciary management</li>
                    <li>• Investment policy statements</li>
                    <li>• Performance monitoring</li>
                    <li>• Tax optimization</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Secure Financial Operations */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Secure Financial Operations</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="text-lg font-semibold mb-2">Payment Processing Security</h3>
                  <p className="text-gray-600 mb-3">
                    Secure payment systems with fraud protection and compliance.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• PCI DSS compliance</li>
                    <li>• Encrypted transactions</li>
                    <li>• Fraud monitoring</li>
                    <li>• Chargeback protection</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-teal-500 pl-4">
                  <h3 className="text-lg font-semibold mb-2">Financial Reporting</h3>
                  <p className="text-gray-600 mb-3">
                    Automated reporting with regulatory compliance built-in.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Real-time transaction reporting</li>
                    <li>• Compliance dashboards</li>
                    <li>• Audit trail management</li>
                    <li>• Tax reporting integration</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Legal Integration */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Legal Integration (POA, Trusts)</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h3 className="text-lg font-semibold mb-2">Power of Attorney Financial Services</h3>
                  <p className="text-gray-600 mb-3">
                    Financial management through properly executed POA documents.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Banking authority setup</li>
                    <li>• Investment management powers</li>
                    <li>• Bill payment authorization</li>
                    <li>• Financial decision delegation</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-pink-500 pl-4">
                  <h3 className="text-lg font-semibold mb-2">Trust Financial Management</h3>
                  <p className="text-gray-600 mb-3">
                    Integrated trust and financial services for comprehensive planning.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Trust banking accounts</li>
                    <li>• Trustee financial services</li>
                    <li>• Beneficiary distributions</li>
                    <li>• Trust tax compliance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Financial Operations?</h2>
            <p className="text-xl mb-6">
              Combine our financial services with legal protections for complete peace of mind.
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
                View Legal Services
              </a>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}
