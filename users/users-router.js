const router = require('express').Router();
const Users = require('./users-model');

router.get('/', (req, res) => {

    Users.get()
        .then(users => {
            res.json(users)
        })
        .catch(({ name, message, stack, code }) => {
            console.log({ name, message, stack, code })
            res.json(500),json(err)
        })
})

router.get('/:id', (req, res) => {

})

router.put('/:id', (req, res) => {

})

router.delete('/:id', (req, res) => {

})

module.exports = router;