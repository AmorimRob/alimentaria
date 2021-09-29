import 'jest-styled-components'
import { FiltroItem } from './Filtro.styled'
import renderer from 'react-test-renderer'

describe('Filtro.styled tests', () => {
    test('Deve definir estilo de não selecionado quando selecionado por false',()=>{
    
        const filtro = renderer.create(<FiltroItem selecionado={false} />).toJSON()
    
        expect(filtro).toHaveStyleRule('color', '#71bce4')
    })
    
    test('Deve definir estilo de selecionado quando selecionado por true',()=>{
    
        const filtro = renderer.create(<FiltroItem selecionado={true} />).toJSON()
    
        expect(filtro).toHaveStyleRule('color', 'white')
    })
})