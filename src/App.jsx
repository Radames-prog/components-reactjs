import './App.css'
import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from'./components/ComFilhos'
import Card from'./components/Layout/Card'

export default (props)=>(
    <div className="App">
        <Card titulo="Primeiro Componente">
            <Primeiro/>
        </Card>
        <Card titulo="Componente com Parâmetro">
            <ComParametro 
            titulo="Entrando no mundo do React"
            subtitulo="Esta complicado mas vamos la!!"/>
            
        </Card>
        <Card titulo="Componente com filho">
            <ComFilhos>
            <ul>
                <li>Ana</li>
                <li>Bia</li>
                <li>Calos</li>
                <li>Daniel</li>
            </ul>
            </ComFilhos>
        </Card>
           
    </div>
    )