import React, { useState } from 'react'
import {FiltroItem, Label} from './Filtro.styled'

interface FiltroProps{
    texto: string
}

const Filtro = (props: FiltroProps) => {
    const [selecionado, atualizaSelecionado] = useState(false);
    return(
        <FiltroItem selecionado={selecionado} onClick={()=> atualizaSelecionado(!selecionado)}>
            <Label>
                {props.texto}
            </Label>
        </FiltroItem>
    )
}

export default Filtro;


