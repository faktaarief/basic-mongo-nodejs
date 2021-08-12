const router = require('express').Router()
const postController = require('../controllers/post.controller')

router.post('/', postController.store)
router.get('/', postController.findAll)
router.get('/:id', postController.findById)
router.put('/:id', postController.update)
router.delete('/:id', postController.destroy)

module.exports = router
