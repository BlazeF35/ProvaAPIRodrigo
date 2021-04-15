const express = require('express');
const router = express.Router();

const controler = require('./controller')

router.get('/', (req, res) => {
    res.send('')
})

router.get('/customers', controler.getCustumer)

router.get('/customers/:cpf', controler.getCustumer)

router.get('/customer/:cpf/dependents', controler.getDependents)

router.post('/customers', controler.addCustomer)

router.put('/customers/:cpf', controler.updateCustomer)

router.delete('/customers/:cpf', controler.deleteCostumer)

module.exports = router

