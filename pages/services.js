import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Services() {
  return (
    <>
      <Head>
        <title>Products & Services - Global Business Directory</title>
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        <main className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8 text-center">
            <h1 className="text-4xl font-bold mb-6">Products & Services</h1>
            <p className="text-xl text-gray-600 mb-8">
              Choose the right plan for your business verification and compliance needs
            </p>
          </div>

          {/* API Access */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6">API Access</h2>
            <p className="text-gray-600 mb-6">
              Integrate our comprehensive business database directly into your applications.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Search API</h3>
                <p className="text-gray-600 mb-4">
                  Search businesses by name, number, or jurisdiction with advanced filtering.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Real-time search</li>
                  <li>• Advanced filters</li>
                  <li>• Pagination support</li>
                  <li>• Rate limiting: 1000 calls/hour</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Business Details API</h3>
                <p className="text-gray-600 mb-4">
                  Get complete business profiles including agents and principals.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Full business profiles</li>
                  <li>• Agent information</li>
                  <li>• Officer details</li>
                  <li>• Compliance status</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Webhooks</h3>
                <p className="text-gray-600 mb-4">
                  Get notified of business status changes and new filings.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Status change alerts</li>
                  <li>• New filing notifications</li>
                  <li>• Custom triggers</li>
                  <li>• Reliable delivery</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Subscription Plans */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Subscription Plans</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Starter Plan */}
              <div className="border rounded-lg p-6 text-center">
                <h3 className="text-2xl font-bold mb-4">Starter</h3>
                <div className="text-4xl font-bold mb-4">$29<span className="text-lg text-gray-600">/month</span></div>
                <ul className="text-left space-y-3 mb-6">
                  <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> 1,000 API calls/month</li>
                  <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Basic search functionality</li>
                  <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Email support</li>
                  <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Standard SLA</li>
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold">
                  Get Started
                </button>
              </div>

              {/* Professional Plan */}
              <div className="border-2 border-blue-500 rounded-lg p-6 text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold mb-4">Professional</h3>
                <div className="text-4xl font-bold mb-4">$99<span className="text-lg text-gray-600">/month</span></div>
                <ul className="text-left space-y-3 mb-6">
                  <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> 10,000 API calls/month</li>
                  <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Advanced search & filters</li>
                  <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Compliance alerts</li>
                  <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Priority support</li>
                  <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Webhook notifications</li>
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold">
                  Upgrade to Pro
                </button>
              </div>

              {/* Enterprise Plan */}
              <div className="border rounded-lg p-6 text-center">
                <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
                <div className="text-4xl font-bold mb-4">Custom</div>
                <ul className="text-left space-y-3 mb-6">
                  <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Unlimited API calls</li>
                  <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Custom integrations</li>
                  <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Dedicated support</li>
                  <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> SLA guarantee</li>
                  <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> On-premise deployment</li>
                </ul>
                <button className="w-full bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg font-semibold">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>

          {/* Enterprise Integrations */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Enterprise Integrations</h2>
            <p className="text-gray-600 mb-6">
              Seamless integration with your existing business systems and workflows.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 border rounded-lg">
                <div className="text-3xl mb-2">🏦</div>
                <h3 className="font-semibold">CRM Systems</h3>
                <p className="text-sm text-gray-600">Salesforce, HubSpot, Pipedrive</p>
              </div>
              
              <div className="text-center p-4 border rounded-lg">
                <div className="text-3xl mb-2">⚖️</div>
                <h3 className="font-semibold">Legal Software</h3>
                <p className="text-sm text-gray-600">Clio, MyCase, PracticePanther</p>
              </div>
              
              <div className="text-center p-4 border rounded-lg">
                <div className="text-3xl mb-2">📊</div>
                <h3 className="font-semibold">Analytics Platforms</h3>
                <p className="text-sm text-gray-600">Tableau, Power BI, Google Analytics</p>
              </div>
              
              <div className="text-center p-4 border rounded-lg">
                <div className="text-3xl mb-2">🔧</div>
                <h3 className="font-semibold">Custom Solutions</h3>
                <p className="text-sm text-gray-600">Tailored integrations for your needs</p>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}