const cds = require('@sap/cds');
const { Pets } = cds.entities;

module.exports = cds.service.impl(async (srv) => {

    srv.on('TestAction', async (req) => {
        const { ID, name, last } = req.data;
        console.log("name:", name);
        if (name.length < 30) {
            let insert_result = await cds.run({
                INSERT: {
                    into: { ref: ['Pets'] },
                    columns: ['ID', 'firstname', 'lastname'],
                    values: [ID, name, last]
                }
            })
            return name;
        } else {
            console.log("Te pasaste de caracteres");
            throw new Error("Te pasaste de caracteres");
        }
    });

    srv.on('TestFunction', async (req) => {
        const { name } = req.data;
        console.log("name:", name);
        return name;
    });

    srv.before('CREATE', 'Pets', async (req) => {
        console.log("ReqData: ",req.data); // Array { Manchita;Alonso }
        const tx = cds.transaction(req);
        let aux = await tx.run(SELECT.from(Pets).where({ ID: 1 }));
        console.log("aux: ", aux);
        req.data.firstname = "jaja";
        req.reject(500, "Bad Gateway");
    });

})