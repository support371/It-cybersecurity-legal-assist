import { useState, useEffect } from 'react'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Analytics() {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/stats')
      const data = await response.json()
      setStats(data)
    } catch (error) {
      console.error('Error fetching stats:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>Analytics - Global Business Directory</title>
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        <main className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h1 className="text-3xl font-bold mb-6">Analytics Dashboard</h1>
            
            {/* Key Metrics */}
            {loading ? (
              <p>Loading analytics...</p>
            ) : stats ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {stats.businessesIndexed.toLocaleString()}
                  </div>
                  <p className="text-gray-600">Total Businesses</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    {stats.activeJurisdictions}
                  </div>
                  <p className="text-gray-600">Active Jurisdictions</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    {stats.latestFilings.toLocaleString()}
                  </div>
                  <p className="text-gray-600">Recent Filings (30 days)</p>
                </div>
              </div>
            ) : (
              <p>Unable to load analytics data</p>
            )}

            {/* Chart Placeholders */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="border rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">New Businesses per Month</h2>
                <div className="bg-gray-100 h-64 rounded flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-4">📈</div>
                    <p className="text-gray-600">Chart visualization coming soon</p>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Industry Breakdown</h2>
                <div className="bg-gray-100 h-64 rounded flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🥧</div>
                    <p className="text-gray-600">Pie chart visualization coming soon</p>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Jurisdiction Trends</h2>
                <div className="bg-gray-100 h-64 rounded flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🌎</div>
                    <p className="text-gray-600">Geographic data visualization coming soon</p>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Compliance Status Overview</h2>
                <div className="bg-gray-100 h-64 rounded flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-4">📊</div>
                    <p className="text-gray-600">Status breakdown coming soon</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Insights */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Quick Insights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Most Active Entity Types</h3>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Limited Liability Company - CA</li>
                    <li>• Stock Corporation - CA - General</li>
                    <li>• Nonprofit Corporation - CA - Public Benefit</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Top Jurisdictions</h3>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• California - {stats?.businessesIndexed.toLocaleString()} businesses</li>
                    <li>• Other states data coming soon</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Analytics() {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/stats')
      const data = await response.json()
      setStats(data)
    } catch (error) {
      console.error('Error fetching stats:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>Analytics - Global Business Directory</title>
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        <main className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h1 className="text-3xl font-bold mb-6">Business Analytics</h1>
            <p className="text-gray-600 mb-8">
              Comprehensive insights into business registrations and compliance data.
            </p>

            {loading ? (
              <div className="text-center py-8">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <p className="mt-2 text-gray-600">Loading analytics...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-blue-50 rounded-lg p-6 text-center">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">
                    {stats?.totalBusinesses?.toLocaleString() || '0'}
                  </h3>
                  <p className="text-gray-600">Total Businesses</p>
                </div>
                <div className="bg-green-50 rounded-lg p-6 text-center">
                  <h3 className="text-2xl font-bold text-green-600 mb-2">
                    {stats?.activeBusinesses?.toLocaleString() || '0'}
                  </h3>
                  <p className="text-gray-600">Active Businesses</p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-6 text-center">
                  <h3 className="text-2xl font-bold text-yellow-600 mb-2">
                    {stats?.jurisdictions?.toLocaleString() || '0'}
                  </h3>
                  <p className="text-gray-600">Jurisdictions</p>
                </div>
              </div>
            )}

            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Business Types Distribution</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-600">Analytics dashboard coming soon...</p>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}
