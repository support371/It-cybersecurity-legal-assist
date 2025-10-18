import { useState } from 'react'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Tools() {
  const [verificationTerm, setVerificationTerm] = useState('')
  const [verificationResult, setVerificationResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleVerification = async (e) => {
    e.preventDefault()
    if (!verificationTerm.trim()) return

    setLoading(true)
    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(verificationTerm)}&limit=1`)
      const data = await response.json()
      
      if (data.results && data.results.length > 0) {
        setVerificationResult(data.results[0])
      } else {
        setVerificationResult(null)
      }
    } catch (error) {
      console.error('Verification error:', error)
      setVerificationResult(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>Compliance Tools - Global Business Directory</title>
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        <main className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h1 className="text-3xl font-bold mb-6">Compliance Tools</h1>
            <p className="text-gray-600 mb-8">
              Verify business compliance and generate reports for due diligence.
            </p>

            {/* Business Verification Tool */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Business Verification Tool</h2>
              
              <form onSubmit={handleVerification} className="mb-6">
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Enter business name or entity number"
                    value={verificationTerm}
                    onChange={(e) => setVerificationTerm(e.target.value)}
                    style={{
                      flex: '1',
                      padding: '0.75rem 1rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '0.5rem 0 0 0.5rem',
                      fontSize: '1rem'
                    }}
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      backgroundColor: '#2563eb',
                      color: 'white',
                      padding: '0.75rem 2rem',
                      borderRadius: '0 0.5rem 0.5rem 0',
                      fontWeight: '600'
                    }}
                  >
                    {loading ? 'Verifying...' : 'Verify'}
                  </button>
                </div>
              </form>

              {verificationResult && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <span className="text-green-600 text-2xl">✓</span>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-semibold text-green-800 mb-2">
                        Business Verified
                      </h3>
                      <div className="space-y-2 text-green-700">
                        <p><strong>Name:</strong> {verificationResult.entity_name}</p>
                        <p><strong>Entity #:</strong> {verificationResult.entity_num}</p>
                        <p><strong>Status:</strong> {verificationResult.entity_status}</p>
                        <p><strong>Jurisdiction:</strong> {verificationResult.jurisdiction}</p>
                        <p><strong>Type:</strong> {verificationResult.entity_type}</p>
                      </div>
                      <div className="mt-4">
                        <button
                          onClick={() => window.open(`/business/${verificationResult.entity_num}`)}
                          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-semibold"
                        >
                          View Full Profile
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {verificationResult === null && verificationTerm && !loading && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <span className="text-red-600 text-2xl">⚠</span>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-semibold text-red-800 mb-2">
                        Business Not Found
                      </h3>
                      <p className="text-red-700">
                        No business found matching "{verificationTerm}". Please check the spelling or try a different search term.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Risk Score Dashboard */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Risk Score Dashboard</h2>
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <div className="text-6xl mb-4">📊</div>
                <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
                <p className="text-gray-600">
                  Advanced risk scoring and compliance analytics will be available in the next release.
                </p>
              </div>
            </div>

            {/* Additional Tools */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Bulk Verification</h3>
                <p className="text-gray-600 mb-4">
                  Upload a CSV file to verify multiple businesses at once.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold">
                  Upload CSV
                </button>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Compliance Report</h3>
                <p className="text-gray-600 mb-4">
                  Generate detailed compliance reports for any business.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold">
                  Generate Report
                </button>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}