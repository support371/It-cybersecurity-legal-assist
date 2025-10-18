import { useState, useEffect } from 'react'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [stats, setStats] = useState({
    businesses: '2M+',
    jurisdictions: '50+',
    filings: '25K'
  })

  useEffect(() => {
    // Get search term from URL parameters
    const urlParams = new URLSearchParams(window.location.search)
    const query = urlParams.get('q')
    if (query) {
      setSearchTerm(query)
      handleSearch(query)
    }
  }, [])

  const handleSearch = async (query = searchTerm) => {
    if (!query.trim()) return

    setLoading(true)
    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`)
      const data = await response.json()
      setResults(data.results || [])
    } catch (error) {
      console.error('Search error:', error)
      setResults([])
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleSearch()
  }

  return (
    <>
      <Head>
        <title>Search Directory - Global Business Directory</title>
        <meta name="description" content="Search our comprehensive business directory" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Navigation />

        <main className="container mx-auto px-4 py-8">
          {/* Search Header */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h1 className="text-4xl font-bold mb-6 text-center">Business Directory Search</h1>

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className="flex">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Find a Business by Name, Number, or Jurisdiction"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-r-lg font-semibold transition-colors disabled:opacity-50"
                >
                  {loading ? 'Searching...' : 'Search'}
                </button>
              </div>
            </form>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stats.businesses}</div>
              <p className="text-gray-600">Businesses Indexed</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stats.jurisdictions}</div>
              <p className="text-gray-600">Active Jurisdictions</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stats.filings}</div>
              <p className="text-gray-600">Latest Filings</p>
            </div>
          </div>

          {/* Results */}
          {results.length > 0 && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Search Results</h2>
              <div className="space-y-4">
                {results.map((business, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-semibold mb-2">{business.name}</h3>
                    <p className="text-gray-600 mb-2">{business.jurisdiction}</p>
                    <p className="text-sm text-gray-500">Status: {business.status}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* No Results */}
          {!loading && searchTerm && results.length === 0 && (
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">No Results Found</h2>
              <p className="text-gray-600">Try adjusting your search terms or browse our directory.</p>
            </div>
          )}
        </main>

        <Footer />
      </div>
    </>
  )
}