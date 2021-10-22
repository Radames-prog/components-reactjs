import './App.css'
import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from'./components/ComFilhos'
import Card from'./components/Layout/Card'
import Repeticao from'./components/Repeticao'
import Condicional from'./components/Condicional'
import CondicionalComIf from'./components/CondicionalComIf'


export default (props)=>(
    <div className="App">
        <Card titulo="#5 - Condicional v1">
            <Condicional numero={1}></Condicional>
        </Card>
        <Card titulo="#6 - Condicional v2">
            <CondicionalComIf numero={1}></CondicionalComIf>
        </Card>
        <Card titulo="#4 - Repetição">
            <Repeticao></Repeticao>
        </Card>
        <Card titulo="#1 Primeiro Componente">
            <Primeiro/>
        </Card>
        <Card titulo="#2 Componente com Parâmetro">
            <ComParametro 
            titulo="Entrando no mundo do React"
            subtitulo="Esta complicado mas vamos la!!"/>
            
        </Card>
        <Card titulo="#3 Componente com filho">
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