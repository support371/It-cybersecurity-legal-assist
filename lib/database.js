const { Pool } = require('pg')

// Create database pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
})

// Database helper functions
async function query(text, params) {
  const client = await pool.connect()
  try {
    const result = await client.query(text, params)
    return result
  } finally {
    client.release()
  }
}

// Create tables
async function createTables() {
  const createAgentsTable = `
    CREATE TABLE IF NOT EXISTS agents (
      id SERIAL PRIMARY KEY,
      entity_name VARCHAR(500),
      entity_num VARCHAR(100),
      org_name VARCHAR(500),
      first_name VARCHAR(200),
      middle_name VARCHAR(200),
      last_name VARCHAR(200),
      physical_address1 VARCHAR(500),
      physical_address2 VARCHAR(500),
      physical_address3 VARCHAR(500),
      physical_city VARCHAR(200),
      physical_state VARCHAR(100),
      physical_country VARCHAR(200),
      physical_postal_code VARCHAR(50),
      agent_type VARCHAR(200),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `

  const createFilingsTable = `
    CREATE TABLE IF NOT EXISTS filings (
      id SERIAL PRIMARY KEY,
      entity_name VARCHAR(500),
      entity_num VARCHAR(100) UNIQUE,
      initial_filing_date DATE,
      jurisdiction VARCHAR(200),
      entity_status VARCHAR(100),
      standing_sos VARCHAR(100),
      entity_type VARCHAR(200),
      filing_type VARCHAR(200),
      foreign_name VARCHAR(500),
      standing_ftb VARCHAR(100),
      standing_vcfcf VARCHAR(100),
      standing_agent VARCHAR(100),
      suspension_date DATE,
      last_si_file_number VARCHAR(200),
      last_si_file_date TIMESTAMP,
      principal_address VARCHAR(500),
      principal_address2 VARCHAR(500),
      principal_city VARCHAR(200),
      principal_state VARCHAR(100),
      principal_country VARCHAR(200),
      principal_postal_code VARCHAR(50),
      mailing_address VARCHAR(500),
      mailing_address2 VARCHAR(500),
      mailing_address3 VARCHAR(500),
      mailing_city VARCHAR(200),
      mailing_state VARCHAR(100),
      mailing_country VARCHAR(200),
      mailing_postal_code VARCHAR(50),
      principal_address_in_ca VARCHAR(500),
      principal_address2_in_ca VARCHAR(500),
      principal_city_in_ca VARCHAR(200),
      principal_state_in_ca VARCHAR(100),
      principal_country_in_ca VARCHAR(200),
      principal_postal_code_in_ca VARCHAR(50),
      llc_management_structure VARCHAR(200),
      type_of_business TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `

  const createPrincipalsTable = `
    CREATE TABLE IF NOT EXISTS principals (
      id SERIAL PRIMARY KEY,
      entity_name VARCHAR(500),
      entity_num VARCHAR(100),
      org_name VARCHAR(500),
      first_name VARCHAR(200),
      middle_name VARCHAR(200),
      last_name VARCHAR(200),
      position_type VARCHAR(200),
      address1 VARCHAR(500),
      address2 VARCHAR(500),
      address3 VARCHAR(500),
      city VARCHAR(200),
      state VARCHAR(100),
      country VARCHAR(200),
      postal_code VARCHAR(50),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (entity_num) REFERENCES filings(entity_num)
    );
  `

  const createIndexes = `
    CREATE INDEX IF NOT EXISTS idx_filings_entity_name ON filings(entity_name);
    CREATE INDEX IF NOT EXISTS idx_filings_entity_num ON filings(entity_num);
    CREATE INDEX IF NOT EXISTS idx_filings_jurisdiction ON filings(jurisdiction);
    CREATE INDEX IF NOT EXISTS idx_filings_entity_type ON filings(entity_type);
    CREATE INDEX IF NOT EXISTS idx_filings_entity_status ON filings(entity_status);
    CREATE INDEX IF NOT EXISTS idx_agents_entity_num ON agents(entity_num);
    CREATE INDEX IF NOT EXISTS idx_principals_entity_num ON principals(entity_num);
  `

  try {
    await query(createFilingsTable)
    await query(createAgentsTable)
    await query(createPrincipalsTable)
    await query(createIndexes)
    console.log('Tables created successfully')
  } catch (error) {
    console.error('Error creating tables:', error)
    throw error
  }
}

module.exports = {
  query,
  createTables,
  pool
}