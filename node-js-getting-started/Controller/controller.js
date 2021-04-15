
let custumers = []

function deleteCostumer(req, res){
    res.send(req.params.cpf)
}

function getCustumer(req, res) => {
    var cpf = '$(req.body.cpf)';
    customer.forEach(Element => {
        console.log(cpf)
        console.log(Element.cpf); res.json(Element)
})

res.json({message: "Custumer not found"}, 404)


function updateCustomer(req, res){
    var body = req.body;
    let valid = false;
    for (let i= 0; i < customer.lenght; i++) {
        custumer[i] = body;
        valid = true;
    }
}

function addCustomer(req, res){
    res.send(req.params.cpf)
}

module.exports = {
    deleteCostumer,
    getCustumer,
    updateCustomer,
    addCustomer
}