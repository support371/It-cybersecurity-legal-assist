import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export default function BusinessProfile() {
  const router = useRouter()
  const { id } = router.query
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (id) {
      fetchBusinessData(id)
    }
  }, [id])

  const fetchBusinessData = async (entityId) => {
    try {
      setLoading(true)
      const response = await fetch(`/api/business/${entityId}`)
      
      if (!response.ok) {
        throw new Error('Business not found')
      }
      
      const businessData = await response.json()
      setData(businessData)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!data) return <div>No data found</div>

  const { business, agents, principals } = data

  return (
    <>
      <Head>
        <title>{business.entity_name} - Global Business Directory</title>
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        <main className="container mx-auto px-4 py-8">
          {/* Business Header */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {business.entity_name}
                </h1>
                <p className="text-gray-600">Entity #: {business.entity_num}</p>
              </div>
              <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                business.entity_status === 'Active' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {business.entity_status}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Basic Information</h3>
                <div className="space-y-2">
                  <p><strong>Jurisdiction:</strong> {business.jurisdiction}</p>
                  <p><strong>Entity Type:</strong> {business.entity_type}</p>
                  <p><strong>Filing Type:</strong> {business.filing_type}</p>
                  <p><strong>Filing Date:</strong> {business.initial_filing_date}</p>
                  {business.type_of_business && (
                    <p><strong>Business Type:</strong> {business.type_of_business}</p>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Compliance Status</h3>
                <div className="space-y-2">
                  <p><strong>SOS Standing:</strong> {business.standing_sos || 'N/A'}</p>
                  <p><strong>FTB Standing:</strong> {business.standing_ftb || 'N/A'}</p>
                  <p><strong>Agent Standing:</strong> {business.standing_agent || 'N/A'}</p>
                  {business.suspension_date && (
                    <p><strong>Suspension Date:</strong> {business.suspension_date}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Principal Address */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Principal Address</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Primary Address</h3>
                <div className="space-y-1">
                  {business.principal_address && <p>{business.principal_address}</p>}
                  {business.principal_address2 && <p>{business.principal_address2}</p>}
                  <p>
                    {business.principal_city}, {business.principal_state} {business.principal_postal_code}
                  </p>
                  {business.principal_country && <p>{business.principal_country}</p>}
                </div>
              </div>

              {business.mailing_address && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Mailing Address</h3>
                  <div className="space-y-1">
                    <p>{business.mailing_address}</p>
                    {business.mailing_address2 && <p>{business.mailing_address2}</p>}
                    <p>
                      {business.mailing_city}, {business.mailing_state} {business.mailing_postal_code}
                    </p>
                    {business.mailing_country && <p>{business.mailing_country}</p>}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Agents */}
          {agents.length > 0 && (
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Registered Agents</h2>
              <div className="space-y-4">
                {agents.map((agent, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">
                          {agent.org_name || `${agent.first_name || ''} ${agent.middle_name || ''} ${agent.last_name || ''}`.trim()}
                        </h3>
                        <p className="text-gray-600">{agent.agent_type}</p>
                        <div className="mt-2 text-sm text-gray-600">
                          {agent.physical_address1 && <p>{agent.physical_address1}</p>}
                          {agent.physical_address2 && <p>{agent.physical_address2}</p>}
                          <p>
                            {agent.physical_city}, {agent.physical_state} {agent.physical_postal_code}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Principals */}
          {principals.length > 0 && (
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Officers & Directors</h2>
              <div className="space-y-4">
                {principals.map((principal, index) => (
                  <div key={index} className="border-l-4 border-green-500 pl-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">
                          {principal.org_name || `${principal.first_name || ''} ${principal.middle_name || ''} ${principal.last_name || ''}`.trim()}
                        </h3>
                        <p className="text-gray-600">{principal.position_type}</p>
                        {principal.address1 && (
                          <div className="mt-2 text-sm text-gray-600">
                            <p>{principal.address1}</p>
                            {principal.address2 && <p>{principal.address2}</p>}
                            <p>
                              {principal.city}, {principal.state} {principal.postal_code}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Compliance Actions */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Compliance Tools</h2>
            <div className="flex space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">
                Generate Compliance Report
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold">
                Download Certificate
              </button>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}