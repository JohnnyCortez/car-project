import { pool } from '../config/database.js'

const getItems = async (req, res) => {
  try {
    const results = await pool.query('SELECT * FROM CustomItem ORDER BY id ASC')
    res.status(200).json(results.rows)
  } catch (error) {
    res.status(400).json( { error: error.message } )
  }
}

const getItemById = async (req, res) => {
  try {
    const id = req.params.id
    const selectQuery = `SELECT name, color, roof, wheels, interior FROM CustomItem WHERE id = ${id}`
    const results = await pool.query(selectQuery)

    res.status(200).json(results.rows[0])
  } catch (error) {
    res.status(409).json( { error: error.message } )
  }
}

const createItem = async (req, res) => {
  try {
    const { name, color, roof, wheels, interior } = req.body // TK???????
    const results = await pool.query(`
      INSERT INTO CustomItem (name, color, roof, wheels, interior)
      VALUES($1, $2, $3, $4, $5)
      RETURNING *`,
      [name, color, roof, wheels, interior]
    )
    res.status(201).json(results.rows[0])
  } catch (error) {
    res.status(409).json( { error: error.message } )
  }
}

const updateItem = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const { name, color, roof, wheels, interior} = req.body // TK???????
    const results = await pool.query(`
      UPDATE CustomItem SET name = $1, color = $2, roof = $3, wheels = $4, interior = $5 WHERE id = $6`,
      [name, color, roof, wheels, interior, id]
    )
    res.status(200).json(results.rows[0])
  } catch (error) {
    res.status(409).json( { error: error.message } )
  }
}

const deleteItem = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const results = await pool.query('DELETE FROM CustomItem WHERE id = $1', [id])
    res.status(200).json(results.rows[0])
  } catch (error) {
    res.status(409).json( { error: error.message } )
  }
}

export default {
  getItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem
}