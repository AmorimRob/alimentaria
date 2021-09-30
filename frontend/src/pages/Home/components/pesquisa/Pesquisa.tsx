import React, {useState} from 'react'
import { Input, Stack, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'
import Filtro from '../../../../components/Filtro/Filtro'
import { Container, Opcoes, Header } from  './Pesquisa.styled'

interface PesquisaProps {
    handlePesquisar: () => void,
    textoPesquisa: string,
    setTextoPesquisa: (texto: string) => void
}

const Pesquisa = (props: PesquisaProps) => {
    const realizarPesquisa = (e: any) => {
        if (e.key === 'Enter') {
            props.handlePesquisar()
        }
      }

    return (
        <Container>
            <Header>
                <Stack spacing={4} style={{ width: '100%', alignItems: 'center'}}>
                    <InputGroup style={{width: '70%', alignItems: 'center'}}>
                        <InputLeftElement children={<SearchIcon color="#cfcfd3" />} />
                        <Input 
                            onChange={(e)=>props.setTextoPesquisa(e.target.value)} 
                            value={props.textoPesquisa}
                            placeholder="digite aqui o que você quer comer ..."
                            size="md"
                            style={{borderRadius: '30px'}}
                            onKeyDown={realizarPesquisa}></Input>
                    </InputGroup>
                </Stack>
            </Header>
            <Opcoes>
                <Filtro texto="Sem açucar" />
                <Filtro texto="Sem glutem" />
                <Filtro texto="Sem lactose" />
                <Filtro texto="Sem farinha de trigo" />
                <Filtro texto="Sem açúcar branco" />
                <Filtro texto="Baixo carboidrato" />
                <Filtro texto="Baixa gordura" />
            </Opcoes>
        </Container>

    )
}

export default Pesquisa
