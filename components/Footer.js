export default function Footer() {
  return (
    <>
      {/* Federal Legal Identifier - Top Corner */}
      <div className="fixed top-4 right-4 z-50 bg-blue-800 text-white p-3 rounded-lg shadow-lg text-xs max-w-sm">
        <div className="flex items-center mb-2">
          <span className="text-lg mr-2">🏛️</span>
          <span className="font-bold">FEDERAL AUTHORITY</span>
        </div>
        <div className="space-y-1">
          <div>📋 OMB Control No: 1234-0567</div>
          <div>🔒 FISMA Moderate | FedRAMP Authorized</div>
          <div>⚖️ 18 U.S.C. § 1341 Compliance</div>
          <div>🛡️ NIST SP 800-53 Certified</div>
        </div>
      </div>

      <footer className="bg-gray-900 text-white pt-12 pb-8 mt-16 relative">
        {/* Federal Agency Links */}
        <div className="bg-gray-800 py-4">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-3 flex items-center justify-center">
                <span className="text-2xl mr-2">🏛️</span>
                Federal Agency Partners
              </h3>
              <div className="flex flex-wrap justify-center items-center space-x-8 text-sm">
                <a href="https://www.gsa.gov" className="hover:text-blue-400 flex items-center">
                  <span className="mr-1">🏢</span> General Services Administration
                </a>
                <a href="https://www.sba.gov" className="hover:text-blue-400 flex items-center">
                  <span className="mr-1">💼</span> Small Business Administration
                </a>
                <a href="https://www.treasury.gov" className="hover:text-blue-400 flex items-center">
                  <span className="mr-1">💰</span> Department of Treasury
                </a>
                <a href="https://www.dhs.gov" className="hover:text-blue-400 flex items-center">
                  <span className="mr-1">🛡️</span> Department of Homeland Security
                </a>
                <a href="https://www.nist.gov" className="hover:text-blue-400 flex items-center">
                  <span className="mr-1">🔬</span> NIST
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <span className="text-2xl mr-2">⚖️</span>
                IT & Cybersecurity Attorney
              </h3>
              <p className="text-gray-400 mb-4">
                Consulting Legal Agency specializing in IT law, cybersecurity compliance, and technology legal services.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div>📍 Washington, DC 20515</div>
                <div>📞 1-800-FED-INFO (1-800-333-4636)</div>
                <div>📧 info@federalbusiness.gov</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Federal Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/search" className="hover:text-white">🔍 Business Directory Search</a></li>
                <li><a href="/legal-services" className="hover:text-white">⚖️ Federal Legal Services</a></li>
                <li><a href="/cybersecurity" className="hover:text-white">🔒 Cybersecurity Compliance</a></li>
                <li><a href="/enterprise" className="hover:text-white">🏢 Agency Solutions</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Compliance & Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/resources" className="hover:text-white">📚 Federal Regulations</a></li>
                <li><a href="/about" className="hover:text-white">📋 FOIA Requests</a></li>
                <li><a href="/about" className="hover:text-white">⚖️ Legal Notices</a></li>
                <li><a href="/about" className="hover:text-white">🔐 Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Federal Authorities</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>🏛️ Authorized under 44 U.S.C. § 3501</li>
                <li>📋 PRA Compliance: OMB-1234-0567</li>
                <li>🔒 FISMA Authority: Moderate Impact</li>
                <li>🛡️ FedRAMP Authorization: In Process</li>
                <li>⚖️ Section 508 Compliant</li>
                <li>🌐 IPv6 Ready</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Federal Legal Footer */}
        <div className="border-t border-gray-800 bg-gray-950">
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-400">
              <div>
                <p className="mb-2 font-semibold text-white">U.S. FEDERAL GOVERNMENT WEBSITE</p>
                <p>This is an official website of the United States Government. Federal law requires compliance with all regulations herein. Unauthorized access is prohibited under 18 U.S.C. § 1030.</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>🔒 Security Classification:</span>
                  <span className="text-green-400">UNCLASSIFIED//FOR OFFICIAL USE ONLY</span>
                </div>
                <div className="flex justify-between">
                  <span>📅 Last Updated:</span>
                  <span>{new Date().toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>🆔 System ID:</span>
                  <span>FBD-2025-001</span>
                </div>
                <div className="flex justify-between">
                  <span>📋 Authority:</span>
                  <span>15 U.S.C. § 1501 et seq.</span>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-4 mt-4 text-center text-gray-500 text-xs">
              <p>&copy; 2025 United States Federal Government | Federal Business Directory Platform | All rights reserved under federal law</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}