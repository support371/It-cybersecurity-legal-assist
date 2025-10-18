const { query } = require('../../lib/database')

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { q, jurisdiction, entity_type, status, page = 1, limit = 20 } = req.query

  try {
    let whereClause = 'WHERE 1=1'
    const params = []
    let paramCount = 0

    // Search by name or entity number
    if (q) {
      paramCount++
      whereClause += ` AND (entity_name ILIKE $${paramCount} OR entity_num ILIKE $${paramCount})`
      params.push(`%${q}%`)
    }

    // Filter by jurisdiction
    if (jurisdiction) {
      paramCount++
      whereClause += ` AND jurisdiction = $${paramCount}`
      params.push(jurisdiction)
    }

    // Filter by entity type
    if (entity_type) {
      paramCount++
      whereClause += ` AND entity_type = $${paramCount}`
      params.push(entity_type)
    }

    // Filter by status
    if (status) {
      paramCount++
      whereClause += ` AND entity_status = $${paramCount}`
      params.push(status)
    }

    // Calculate offset for pagination
    const offset = (parseInt(page) - 1) * parseInt(limit)

    // Get total count
    const countResult = await query(
      `SELECT COUNT(*) FROM filings ${whereClause}`,
      params
    )
    const totalCount = parseInt(countResult.rows[0].count)

    // Get paginated results
    const searchResult = await query(
      `SELECT 
        entity_name, 
        entity_num, 
        jurisdiction, 
        entity_status, 
        entity_type, 
        initial_filing_date,
        principal_city,
        principal_state,
        type_of_business
      FROM filings 
      ${whereClause} 
      ORDER BY entity_name 
      LIMIT $${paramCount + 1} 
      OFFSET $${paramCount + 2}`,
      [...params, parseInt(limit), offset]
    )

    const totalPages = Math.ceil(totalCount / parseInt(limit))

    res.status(200).json({
      results: searchResult.rows,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        totalCount,
        totalPages,
        hasNext: parseInt(page) < totalPages,
        hasPrev: parseInt(page) > 1
      }
    })
  } catch (error) {
    console.error('Search error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}