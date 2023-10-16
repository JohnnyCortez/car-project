import express from 'express'
// import controller for custom items
import ItemsController from '../controllers/items.js'

const router = express.Router()

// define routes to get, create, edit, and delete items

router.get('/', ItemsController.getItems)

router.get('/:itemId', ItemsController.getItemById)

router.post('/', ItemsController.createItem)

router.delete('/:id', ItemsController.deleteItem)

router.patch('/:id', ItemsController.updateItem)

export default router