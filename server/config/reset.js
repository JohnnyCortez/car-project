import { pool } from '../config/database.js'
import '../config/dotenv.js'

const createItemsTable = async () => {
    console.log("hello")
  const createTableQuery = `
    DROP TABLE IF EXISTS CustomItem;

    CREATE TABLE IF NOT EXISTS CustomItem (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      color VARCHAR(255) NOT NULL,
      roof VARCHAR(255) NOT NULL,
      wheels VARCHAR(255) NOT NULL,
      iterior VARCHAR(255) NOT NULL
    )
  `

  try {
    await pool.query(createTableQuery)
    console.log('🎉 items table created successfully')
  } catch (err) {
    console.error('⚠️ error creating items table', err)
  }
}

const create = async () => {
    await createItemsTable()
}

create()