const cds = require('@sap/cds');

module.exports = cds.service.impl(async (srv) => {

    srv.on('TestAction', async (req) => {
        const { name } = req.data;
        console.log("name:", name);
        return name;
    });

    srv.on('TestFunction', async (req) => {
        const { name } = req.data;
        console.log("name:", name);
        return name;
    });

    srv.before('CREATE', 'Pets', async (req) => {
        console.log("ReqData: ",req.data); // Array { Manchita;Alonso }
    });

})