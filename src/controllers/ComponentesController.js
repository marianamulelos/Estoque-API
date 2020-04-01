const connection = require('../database/connection');

module.exports = {
    async index (request,response) {
        const componentes = await connection('componentes').select('*');
    
        return response.json(componentes);
    },
    
    async create (request, response){
        const { part_number, encapsulamento, descricao, categoria_id, status, tensao,
             potencia, faixa_tolerancia, diamensoes, num_posicoes, quantidade} = request.body;
        
        const [id_componentes] = await connection('componentes').insert({
            part_number,
            encapsulamento,
            descricao,
            categoria_id,
            status,
            tensao,
            potencia,
            faixa_tolerancia,
            diamensoes,
            num_posicoes,
            quantidade,
        });
        
        return response.json(id_componentes);
             
    },

    async changes (request, response){
        const { part_number, encapsulamento, descricao, categoria_id, status, tensao,
            potencia, faixa_tolerancia, diamensoes, num_posicoes, quantidade } = request.body;
        const id_componentes = request.headers.authorization;
       
        await connection('componentes').where('id_componentes', id_componentes)
        .update("part_number", part_number)
        .update("encapsulamento", encapsulamento)
        .update("descricao", descricao)
        .update("categoria_id", categoria_id)
        .update("status", status)
        .update("tensao", tensao)
        .update("potencia", potencia)
        .update("faixa_tolerancia", faixa_tolerancia)
        .update("diamensoes", diamensoes)
        .update("num_posicoes", num_posicoes)
        .update("quantidade", quantidade);

        return response.json({part_number, quantidade});
    },

    async delete (request, response){
        const { id } = request.params;
        
        await connection('componentes').where('id_componentes', id).delete();

        return response.status(204).send(); // 

    }
};
