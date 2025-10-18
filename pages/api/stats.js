const { query } = require('../../lib/database')

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Get business count
    const businessCountResult = await query(
      'SELECT COUNT(*) as count FROM filings'
    )
    
    // Get jurisdiction count
    const jurisdictionCountResult = await query(
      'SELECT COUNT(DISTINCT jurisdiction) as count FROM filings WHERE jurisdiction IS NOT NULL'
    )
    
    // Get recent filings count (last 30 days)
    const recentFilingsResult = await query(
      `SELECT COUNT(*) as count FROM filings 
       WHERE initial_filing_date >= CURRENT_DATE - INTERVAL '30 days'`
    )

    res.status(200).json({
      businessesIndexed: parseInt(businessCountResult.rows[0].count),
      activeJurisdictions: parseInt(jurisdictionCountResult.rows[0].count),
      latestFilings: parseInt(recentFilingsResult.rows[0].count)
    })
  } catch (error) {
    console.error('Stats error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}