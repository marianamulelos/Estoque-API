const connection = require('../database/connection');

module.exports = {
    async index (request,response) {
        const categorias = await connection('categorias').select('*');
    
        return response.json(categorias);
    }, 

    async create (request, response){
        const { categoria } = request.body;

        console.log(categoria);
        
        const [id_categoria] = await connection('categorias').insert({ categoria });

        return response.json(id_categoria);
    },

    async changes (request, response){
        const { categoria } = request.body;
        const id_categoria = request.headers.authorization;

       await connection('categorias').where('id_categoria', id_categoria).update("categoria", categoria);

        return response.json({categoria});
    },

    async delete(request, response){
        const { id } = request.params;

        await connection('categorias').where('id_categoria', id).delete();

        return response.status(204).send(); 
    }
};
