import api from '../../../infrastructure/api'

const obterProdutos = async () => {
    const response = await api.get('Produtos/obterProdutos')

    return response.data
}

export {obterProdutos}