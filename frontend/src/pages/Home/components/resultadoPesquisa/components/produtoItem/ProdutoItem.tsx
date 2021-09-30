import React from 'react'
import * as S from './ProdutoItem.styled'
import { Produto } from '../../ResultadoPesquisa.types'
import { BsArrowRight } from "react-icons/bs";
import { FiMapPin, FiShoppingCart, FiLayers } from "react-icons/fi";

const ProdutoItem = (produto: Produto ) => {
    return <S.ContainerProduto>
    <S.ImagemProdutoContainer>
        <S.ImagemProduto src={produto.imagem} alt="leite"/>
    </S.ImagemProdutoContainer>

    <S.InformacaoProdutoContainer>
        <S.Titulo>{produto.titulo}</S.Titulo>
        <S.ContainerHorizontal>
            <S.ContainerHorizontalCentralizado>
                <FiLayers style={{marginRight: '10px'}}/>
                <S.TextoPequeno>{produto.categoria}</S.TextoPequeno>
            </S.ContainerHorizontalCentralizado>
            <S.ContainerHorizontalCentralizado>
                <FiShoppingCart style={{marginRight: '10px', marginLeft: '10px'}} />
                <S.TextoPequeno>{produto.local}</S.TextoPequeno>
            </S.ContainerHorizontalCentralizado>
        </S.ContainerHorizontal>

        <S.ContainerHorizontalCentralizado>
            <FiMapPin style={{marginRight: '10px', fontSize: '20px'}}/>
            <S.TextoMedio>{produto.endereco}</S.TextoMedio>
        </S.ContainerHorizontalCentralizado>

        <S.ContainerPreco>
            <S.Preco>R$ 10,00</S.Preco>
            <S.Unidade> / unidade</S.Unidade>
        </S.ContainerPreco>
    </S.InformacaoProdutoContainer>
    <a href={produto.urlEstabelecimento} target="_blank" rel="noreferrer"> 
        <S.BotaoLink>
            <BsArrowRight style={{fontSize: "25px", color: "#67afd6"}} />
        </S.BotaoLink>
    </a>
</S.ContainerProduto>
}

export default ProdutoItem;