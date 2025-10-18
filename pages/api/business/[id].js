const { query } = require('../../../lib/database')

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { id } = req.query

  try {
    // Get business filing information
    const filingResult = await query(
      `SELECT * FROM filings WHERE entity_num = $1`,
      [id]
    )

    if (filingResult.rows.length === 0) {
      return res.status(404).json({ error: 'Business not found' })
    }

    const business = filingResult.rows[0]

    // Get agents
    const agentsResult = await query(
      `SELECT * FROM agents WHERE entity_num = $1`,
      [id]
    )

    // Get principals
    const principalsResult = await query(
      `SELECT * FROM principals WHERE entity_num = $1`,
      [id]
    )

    res.status(200).json({
      business: business,
      agents: agentsResult.rows,
      principals: principalsResult.rows
    })
  } catch (error) {
    console.error('Business details error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}