import React, { useState } from 'react'
import Pesquisa from './components/pesquisa/Pesquisa'
import ResultadoPesquisa from './components/resultadoPesquisa/ResultadoPesquisa'
import * as S from './Home.styled'
import Lottie from 'react-lottie';
import loading from '../../assets/loading.json'
import { obterProdutos } from './services/Home.service'
import { Produto } from './components/resultadoPesquisa/ResultadoPesquisa.types'

const Home = () => {

    const [produtosEncontrados, setprodutosEncontrados] = useState<Produto[] | undefined>(undefined)
    const [carregando, setCarregando] = useState(false);
    const [textoPesquisa, setTextoPesquisa] = useState('')

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loading,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      };

    const handlePesquisarProdutos = async () => {
        setCarregando(true);
        setprodutosEncontrados(await obterProdutos());
        setCarregando(false);
    }

    return <>
        <S.Container>
            
            <Pesquisa handlePesquisar={handlePesquisarProdutos} textoPesquisa={textoPesquisa} setTextoPesquisa={setTextoPesquisa}  />
            
            {carregando ? <Lottie options={defaultOptions} height={200} width={200} /> : null}

            {produtosEncontrados  && carregando === false 
            ? <ResultadoPesquisa produtoPesquisado={textoPesquisa} produtosEncontrados={produtosEncontrados} /> 
            : <S.BoasVindas hidden={carregando}>O que quer comer hoje? :)</S.BoasVindas>}

        </S.Container>
    </>
}

export default Home;
