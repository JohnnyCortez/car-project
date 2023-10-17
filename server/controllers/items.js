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
    const id = req.params.id; // Change to req.params.id for consistency
    const selectQuery = `SELECT name, color, wheels, interior, package_, engine FROM CustomItem WHERE id = $1`;
    const results = await pool.query(selectQuery, [id]);

    if (results.rows.length === 0) {
      res.status(404).json({ error: 'Item not found' });
    } else {
      res.status(200).json(results.rows[0]);
    }
  } catch (error) {
    res.status(500).json({ error: error.message }); // Use 500 for internal server error
  }
};

const createItem = async (req, res) => {
  try {
    const { name, color, wheels, interior, package_, engine } = req.body // TK???????
    const results = await pool.query(`
      INSERT INTO CustomItem (name, color, wheels, interior, package_, engine)
      VALUES($1, $2, $3, $4, $5, $6)
      RETURNING *`,
      [name, color, wheels, interior, package_, engine]
    )
    res.status(201).json(results.rows[0])
  } catch (error) {
    res.status(409).json( { error: error.message } )
  }
}

const updateItem = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const { name, color, wheels, interior, package_, engine} = req.body // TK???????
    const results = await pool.query(`
      UPDATE CustomItem SET name = $1, color = $2, wheels = $3, interior = $4, package_ = $5, engine = $6 WHERE id = $7`,
      [name, color, wheels, interior, package_, engine, id]
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