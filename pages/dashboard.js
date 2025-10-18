
import { useState } from 'react'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Dashboard() {
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')
  const [signInData, setSignInData] = useState({ email: '', password: '' })
  const [signUpData, setSignUpData] = useState({ 
    name: '', 
    email: '', 
    password: '', 
    confirmPassword: '',
    organization: '',
    role: '' 
  })
  const [isSignUp, setIsSignUp] = useState(false)

  const handleSignIn = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate authentication
    setTimeout(() => {
      if (signInData.email && signInData.password) {
        setIsSignedIn(true)
        localStorage.setItem('federalAuth', 'true')
      }
      setIsLoading(false)
    }, 2000)
  }

  const handleSignUp = async (e) => {
    e.preventDefault()
    if (signUpData.password !== signUpData.confirmPassword) {
      alert('Passwords do not match')
      return
    }
    setIsLoading(true)
    
    setTimeout(() => {
      setIsSignedIn(true)
      localStorage.setItem('federalAuth', 'true')
      setIsLoading(false)
    }, 2000)
  }

  const handleSignOut = () => {
    setIsSignedIn(false)
    localStorage.removeItem('federalAuth')
    setSignInData({ email: '', password: '' })
    setSignUpData({ name: '', email: '', password: '', confirmPassword: '', organization: '', role: '' })
  }

  // Check for existing auth on mount
  useState(() => {
    const authStatus = localStorage.getItem('federalAuth')
    if (authStatus === 'true') {
      setIsSignedIn(true)
    }
  }, [])

  if (!isSignedIn) {
    return (
      <>
        <Head>
          <title>Federal Authentication Portal - Federal Business Directory</title>
          <meta name="description" content="Secure access to federal business services and compliance tools" />
        </Head>

        <div className="min-h-screen bg-gray-50">
          <Navigation />
          
          {/* Federal Authentication Header */}
          <div className="bg-blue-800 text-white py-4">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-2xl font-bold flex items-center justify-center">
                <span className="text-3xl mr-3">🏛️</span>
                FEDERAL AUTHENTICATION PORTAL
              </h1>
              <p className="text-blue-200 mt-1">Secure Access to Government Business Services</p>
            </div>
          </div>
          
          <main className="container mx-auto px-4 py-8">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
              {/* Toggle between Sign In and Sign Up */}
              <div className="flex mb-6">
                <button
                  onClick={() => setIsSignUp(false)}
                  className={`flex-1 py-2 px-4 text-center font-semibold rounded-l-lg ${
                    !isSignUp 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => setIsSignUp(true)}
                  className={`flex-1 py-2 px-4 text-center font-semibold rounded-r-lg ${
                    isSignUp 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Register
                </button>
              </div>

              {!isSignUp ? (
                // Sign In Form
                <>
                  <h2 className="text-2xl font-bold text-center mb-6">Federal Sign In</h2>
                  <form onSubmit={handleSignIn} className="space-y-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Federal Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={signInData.email}
                        onChange={(e) => setSignInData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your.email@agency.gov"
                      />
                    </div>

                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        required
                        value={signInData.password}
                        onChange={(e) => setSignInData(prev => ({ ...prev, password: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your password"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-3 px-4 rounded-lg font-semibold transition-colors"
                    >
                      {isLoading ? 'Authenticating...' : 'Sign In to Federal Portal'}
                    </button>
                  </form>
                </>
              ) : (
                // Sign Up Form
                <>
                  <h2 className="text-2xl font-bold text-center mb-6">Federal Registration</h2>
                  <form onSubmit={handleSignUp} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={signUpData.name}
                        onChange={(e) => setSignUpData(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="signup-email"
                        required
                        value={signUpData.email}
                        onChange={(e) => setSignUpData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        placeholder="your.email@domain.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                        Organization/Agency
                      </label>
                      <input
                        type="text"
                        id="organization"
                        required
                        value={signUpData.organization}
                        onChange={(e) => setSignUpData(prev => ({ ...prev, organization: e.target.value }))}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        placeholder="Department/Agency/Company name"
                      />
                    </div>

                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                        Role
                      </label>
                      <select
                        id="role"
                        required
                        value={signUpData.role}
                        onChange={(e) => setSignUpData(prev => ({ ...prev, role: e.target.value }))}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select your role</option>
                        <option value="federal-employee">Federal Employee</option>
                        <option value="contractor">Government Contractor</option>
                        <option value="business-owner">Business Owner</option>
                        <option value="legal-professional">Legal Professional</option>
                        <option value="compliance-officer">Compliance Officer</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                      </label>
                      <input
                        type="password"
                        id="signup-password"
                        required
                        value={signUpData.password}
                        onChange={(e) => setSignUpData(prev => ({ ...prev, password: e.target.value }))}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        placeholder="Create a secure password"
                      />
                    </div>

                    <div>
                      <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        id="confirm-password"
                        required
                        value={signUpData.confirmPassword}
                        onChange={(e) => setSignUpData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        placeholder="Confirm your password"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-3 px-4 rounded-lg font-semibold transition-colors"
                    >
                      {isLoading ? 'Creating Account...' : 'Create Federal Account'}
                    </button>
                  </form>
                </>
              )}

              {/* Federal Benefits */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold mb-4 text-center">Federal Access Benefits</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">🔒</span>
                    FISMA-compliant secure access
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">📋</span>
                    Save compliance documentation
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">⚡</span>
                    Priority federal support
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">🔑</span>
                    API access for integrations
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">📊</span>
                    Advanced analytics dashboard
                  </li>
                </ul>
              </div>
            </div>
          </main>

          <Footer />
        </div>
      </>
    )
  }

  // Dashboard for signed-in users
  return (
    <>
      <Head>
        <title>Federal Dashboard - Federal Business Directory</title>
        <meta name="description" content="Manage your federal business compliance and services" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        {/* Federal Dashboard Header */}
        <div className="bg-blue-800 text-white py-4">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold flex items-center">
                  <span className="text-3xl mr-3">🏛️</span>
                  FEDERAL DASHBOARD
                </h1>
                <p className="text-blue-200">Welcome, Federal User</p>
              </div>
              <button
                onClick={handleSignOut}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-semibold transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>

        <main className="container mx-auto px-4 py-8">
          {/* Tab Navigation */}
          <div className="bg-white rounded-lg shadow-lg mb-8">
            <div className="border-b border-gray-200">
              <nav className="flex">
                {[
                  { id: 'overview', name: 'Overview', icon: '📊' },
                  { id: 'compliance', name: 'Compliance', icon: '⚖️' },
                  { id: 'services', name: 'Services', icon: '🔧' },
                  { id: 'api', name: 'API Keys', icon: '🔑' },
                  { id: 'settings', name: 'Settings', icon: '⚙️' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-4 text-sm font-medium border-b-2 ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600 bg-blue-50'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <span className="mr-2">{tab.icon}</span>
                    {tab.name}
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-8">
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-6">Federal Dashboard Overview</h2>
                    
                    {/* Quick Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                      <div className="bg-blue-100 rounded-lg p-6 text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
                        <p className="text-blue-800 font-medium">Active Searches</p>
                      </div>
                      <div className="bg-green-100 rounded-lg p-6 text-center">
                        <div className="text-3xl font-bold text-green-600 mb-2">5</div>
                        <p className="text-green-800 font-medium">Compliance Alerts</p>
                      </div>
                      <div className="bg-yellow-100 rounded-lg p-6 text-center">
                        <div className="text-3xl font-bold text-yellow-600 mb-2">8</div>
                        <p className="text-yellow-800 font-medium">API Calls (Today)</p>
                      </div>
                      <div className="bg-purple-100 rounded-lg p-6 text-center">
                        <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
                        <p className="text-purple-800 font-medium">Active Services</p>
                      </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-white border rounded-lg">
                      <div className="p-6 border-b">
                        <h3 className="text-xl font-bold">Recent Federal Activity</h3>
                      </div>
                      <div className="p-6">
                        <div className="space-y-4">
                          <div className="flex items-center space-x-4">
                            <span className="text-2xl">🔍</span>
                            <div className="flex-1">
                              <p className="font-medium">Business Verification Search</p>
                              <p className="text-sm text-gray-600">Searched for "Tech Solutions LLC" - 2 hours ago</p>
                            </div>
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">Verified</span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <span className="text-2xl">⚖️</span>
                            <div className="flex-1">
                              <p className="font-medium">Compliance Check</p>
                              <p className="text-sm text-gray-600">FISMA compliance review completed - 1 day ago</p>
                            </div>
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">Passed</span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <span className="text-2xl">📋</span>
                            <div className="flex-1">
                              <p className="font-medium">Documentation Update</p>
                              <p className="text-sm text-gray-600">Updated Power of Attorney forms - 3 days ago</p>
                            </div>
                            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">Updated</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'compliance' && (
                <div>
                  <h2 className="text-3xl font-bold mb-6">Federal Compliance Status</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border rounded-lg p-6">
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <span className="text-2xl mr-3">🔒</span>
                        FISMA Compliance
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span>Security Controls</span>
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">Compliant</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Risk Assessment</span>
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">Up to Date</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Continuous Monitoring</span>
                          <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-medium">In Progress</span>
                        </div>
                      </div>
                    </div>

                    <div className="border rounded-lg p-6">
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <span className="text-2xl mr-3">☁️</span>
                        FedRAMP Status
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span>Authorization</span>
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">In Process</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Security Package</span>
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">Submitted</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>ATO Timeline</span>
                          <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-medium">Q2 2025</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'api' && (
                <div>
                  <h2 className="text-3xl font-bold mb-6">API Management</h2>
                  <div className="space-y-6">
                    <div className="border rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold">Production API Key</h3>
                          <p className="text-gray-600">Use this key for production applications</p>
                        </div>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium">
                          Regenerate
                        </button>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <code className="text-sm font-mono">fbd_prod_1234567890abcdef1234567890abcdef12345678</code>
                      </div>
                    </div>

                    <div className="border rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold">Development API Key</h3>
                          <p className="text-gray-600">Use this key for testing and development</p>
                        </div>
                        <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium">
                          Regenerate
                        </button>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <code className="text-sm font-mono">fbd_dev_abcdef1234567890abcdef1234567890abcdef12</code>
                      </div>
                    </div>

                    <div className="border rounded-lg p-6">
                      <h3 className="text-xl font-semibold mb-4">API Usage Statistics</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">1,247</div>
                          <p className="text-gray-600">Requests Today</p>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">34,892</div>
                          <p className="text-gray-600">Total Requests</p>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-yellow-600">99.8%</div>
                          <p className="text-gray-600">Uptime</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div>
                  <h2 className="text-3xl font-bold mb-6">Account Settings</h2>
                  <div className="space-y-6">
                    <div className="border rounded-lg p-6">
                      <h3 className="text-xl font-semibold mb-4">Profile Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                            defaultValue="Federal User"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                          <input
                            type="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                            defaultValue="user@agency.gov"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Organization</label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                            defaultValue="Federal Agency"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                          <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                            <option value="federal-employee">Federal Employee</option>
                            <option value="contractor">Government Contractor</option>
                            <option value="business-owner">Business Owner</option>
                          </select>
                        </div>
                      </div>
                      <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium">
                        Update Profile
                      </button>
                    </div>

                    <div className="border rounded-lg p-6">
                      <h3 className="text-xl font-semibold mb-4">Notification Preferences</h3>
                      <div className="space-y-3">
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-3" defaultChecked />
                          <span>Compliance status updates</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-3" defaultChecked />
                          <span>Security alerts</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-3" />
                          <span>API usage reports</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-3" defaultChecked />
                          <span>System maintenance notifications</span>
                        </label>
                      </div>
                      <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium">
                        Save Preferences
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}
