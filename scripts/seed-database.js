const fs = require('fs')
const path = require('path')
const { createTables, query } = require('../lib/database')

// Function to parse CSV with proper handling of pipe-delimited format
function parseCSV(csvContent, delimiter = '*|*') {
  const lines = csvContent.split('\n').filter(line => line.trim())
  const headers = lines[0].split(delimiter).map(h => h.trim())
  const data = []

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(delimiter).map(v => v.trim())
    if (values.length === headers.length) {
      const row = {}
      headers.forEach((header, index) => {
        row[header.toLowerCase().replace(/[^a-zA-Z0-9]/g, '_')] = values[index] === '' ? null : values[index]
      })
      data.push(row)
    }
  }
  
  return data
}

// Function to convert date strings
function parseDate(dateString) {
  if (!dateString || dateString === '' || dateString === 'Jan  1 1900 12:00AM') {
    return null
  }
  try {
    const date = new Date(dateString)
    return date.toISOString().split('T')[0] // Return YYYY-MM-DD format
  } catch (error) {
    return null
  }
}

async function importFilings() {
  console.log('Importing filings data...')
  const csvPath = path.join(__dirname, '../attached_assets/Filings.csv')
  const csvContent = fs.readFileSync(csvPath, 'utf-8')
  const filings = parseCSV(csvContent)

  let imported = 0
  for (const filing of filings) {
    try {
      await query(`
        INSERT INTO filings (
          entity_name, entity_num, initial_filing_date, jurisdiction, entity_status, 
          standing_sos, entity_type, filing_type, foreign_name, standing_ftb, 
          standing_vcfcf, standing_agent, suspension_date, last_si_file_number, 
          last_si_file_date, principal_address, principal_address2, principal_city, 
          principal_state, principal_country, principal_postal_code, mailing_address, 
          mailing_address2, mailing_address3, mailing_city, mailing_state, 
          mailing_country, mailing_postal_code, principal_address_in_ca, 
          principal_address2_in_ca, principal_city_in_ca, principal_state_in_ca, 
          principal_country_in_ca, principal_postal_code_in_ca, llc_management_structure, 
          type_of_business
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, 
                  $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, 
                  $32, $33, $34, $35, $36)
        ON CONFLICT (entity_num) DO NOTHING
      `, [
        filing.entity_name, filing.entity_num, parseDate(filing.initial_filing_date),
        filing.jurisdiction, filing.entity_status, filing.standing_sos, filing.entity_type,
        filing.filing_type, filing.foreign_name, filing.standing_ftb, filing.standing_vcfcf,
        filing.standing_agent, parseDate(filing.suspension_date), filing.last_si_file_number,
        parseDate(filing.last_si_file_date), filing.principal_address, filing.principal_address2,
        filing.principal_city, filing.principal_state, filing.principal_country,
        filing.principal_postal_code, filing.mailing_address, filing.mailing_address2,
        filing.mailing_address3, filing.mailing_city, filing.mailing_state,
        filing.mailing_country, filing.mailing_postal_code, filing.principal_address_in_ca,
        filing.principal_address2_in_ca, filing.principal_city_in_ca, filing.principal_state_in_ca,
        filing.principal_country_in_ca, filing.principal_postal_code_in_ca,
        filing.llc_management_structure, filing.type_of_business
      ])
      imported++
      if (imported % 100 === 0) {
        console.log(`Imported ${imported} filings...`)
      }
    } catch (error) {
      console.error(`Error importing filing ${filing.entity_num}:`, error.message)
    }
  }
  console.log(`Filings import completed: ${imported} records`)
}

async function importAgents() {
  console.log('Importing agents data...')
  const csvPath = path.join(__dirname, '../attached_assets/Agents.csv')
  const csvContent = fs.readFileSync(csvPath, 'utf-8')
  const agents = parseCSV(csvContent)

  let imported = 0
  for (const agent of agents) {
    try {
      await query(`
        INSERT INTO agents (
          entity_name, entity_num, org_name, first_name, middle_name, last_name,
          physical_address1, physical_address2, physical_address3, physical_city,
          physical_state, physical_country, physical_postal_code, agent_type
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
      `, [
        agent.entity_name, agent.entity_num, agent.org_name, agent.first_name,
        agent.middle_name, agent.last_name, agent.physical_address1,
        agent.physical_address2, agent.physical_address3, agent.physical_city,
        agent.physical_state, agent.physical_country, agent.physical_postal_code,
        agent.agent_type
      ])
      imported++
      if (imported % 100 === 0) {
        console.log(`Imported ${imported} agents...`)
      }
    } catch (error) {
      console.error(`Error importing agent for ${agent.entity_num}:`, error.message)
    }
  }
  console.log(`Agents import completed: ${imported} records`)
}

async function importPrincipals() {
  console.log('Importing principals data...')
  const csvPath = path.join(__dirname, '../attached_assets/Principals.csv')
  const csvContent = fs.readFileSync(csvPath, 'utf-8')
  const principals = parseCSV(csvContent)

  let imported = 0
  for (const principal of principals) {
    try {
      // Skip empty rows
      if (!principal.entity_num || !principal.entity_name) continue
      
      await query(`
        INSERT INTO principals (
          entity_name, entity_num, org_name, first_name, middle_name, last_name,
          position_type, address1, address2, address3, city, state, country, postal_code
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
      `, [
        principal.entity_name, principal.entity_num, principal.org_name, principal.first_name,
        principal.middle_name, principal.last_name, principal.position_type, principal.address1,
        principal.address2, principal.address3, principal.city, principal.state,
        principal.country, principal.postal_code
      ])
      imported++
      if (imported % 100 === 0) {
        console.log(`Imported ${imported} principals...`)
      }
    } catch (error) {
      console.error(`Error importing principal for ${principal.entity_num}:`, error.message)
    }
  }
  console.log(`Principals import completed: ${imported} records`)
}

async function main() {
  try {
    console.log('Starting database setup and data import...')
    
    // Create tables
    await createTables()
    
    // Import data
    await importFilings()
    await importAgents()  
    await importPrincipals()
    
    console.log('Database setup and import completed successfully!')
    process.exit(0)
  } catch (error) {
    console.error('Error during import:', error)
    process.exit(1)
  }
}

main()