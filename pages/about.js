import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Head>
        <title>About - IT & Cybersecurity Attorney</title>
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Navigation />

        <main className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h1 className="text-4xl font-bold mb-6">About IT & Cybersecurity Attorney</h1>

            <div className="prose max-w-none">
              <p className="text-xl text-gray-600 mb-8">
                A specialized consulting legal agency focused on information technology law, 
                cybersecurity compliance, and comprehensive legal solutions for technology companies.
              </p>

              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                To provide expert legal guidance in the rapidly evolving landscape of technology law, 
                ensuring our clients maintain compliance while innovating and growing their businesses.
              </p>

              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Comprehensive business search across 50+ jurisdictions</li>
                <li>Real-time compliance status monitoring</li>
                <li>Automated filing alerts and notifications</li>
                <li>API access for seamless integrations</li>
                <li>Advanced analytics tools</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">Data Sources</h2>
              <p className="text-gray-600 mb-6">
                Our platform aggregates data from official government registries, regulatory bodies, 
                and authorized filing agents to ensure accuracy and reliability.
              </p>

              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-600 mb-2">
                  <strong>Email:</strong> support@globalbusinessdirectory.com
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
                <p className="text-gray-600">
                  <strong>Address:</strong> 123 Business Avenue, Suite 100, New York, NY 10001
                </p>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}