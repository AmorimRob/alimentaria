import React from 'react'
import * as S from './ResultadoPesquisa.styled'
import ProdutoItem from './components/produtoItem/ProdutoItem'
import { Produto } from './ResultadoPesquisa.types' 

interface ResultadoPesquisaProps {
    produtoPesquisado: string
    produtosEncontrados: Produto[]
}

const ResultadoPesquisa = (props: ResultadoPesquisaProps) => {
    return (
        <S.Container>
            <S.Header>
                <S.ContadorResultados>Econtramos {props.produtosEncontrados.length} produtos para {props.produtoPesquisado}</S.ContadorResultados>
                <p>Classificar por Preço</p>
            </S.Header>
            <S.GridContainer>
                {props.produtosEncontrados.map(produto => {
                   return <ProdutoItem imagem={produto.imagem} 
                    titulo={produto.titulo}
                    categoria={produto.categoria}
                    preco={produto.preco}
                    local={produto.local}
                    endereco={produto.endereco} 
                    urlEstabelecimento={produto.urlEstabelecimento}/>
                })}
            </S.GridContainer>
            <S.Paginacao>
                <S.PaginacaoItem>#</S.PaginacaoItem>
                <S.PaginacaoItem>1</S.PaginacaoItem>
                <S.PaginacaoItem>2</S.PaginacaoItem>
                <S.PaginacaoItem>3</S.PaginacaoItem>
                <S.PaginacaoItem>#</S.PaginacaoItem>
            </S.Paginacao>
        </S.Container>
    )
}

export default ResultadoPesquisa