import React from 'react'
import { Route, Switch } from 'react-router'

import './App.css'

// Importação dos Componentes
import Header from '../Header/Header.js'
import Inicio from '../Inicio/Inicio.js'
import Record from '../Record/Record.js'
import Cultura from '../Cultura/Cultura.js'
import Band from '../Band/Band.js'
import Globo from '../Globo/Globo.js'
import Sbt from '../SBT/SBT.js'

import FalaBrasil from '../Record/MenuN1/FalaBrasil.js'
import BalancoGeral from '../Record/MenuN1/BalancoGeral.js'
import CidadeAlerta from '../Record/MenuN1/CidadeAlerta.js'
import AFazenda from '../Record/MenuN1/AFazenda.js'
import RaulGil from '../Record/MenuN1/RaulGil.js'

import Capital from '../Record/MenuN2/Capital.js'
import Interior from '../Record/MenuN2/Interior.js'
import Brasilia from '../Record/MenuN2/Brasilia.js'
import Culinaria from '../Record/MenuN2/Culinaria.js'

import Politica from '../Record/MenuN3/Politica.js'
import Educacao from '../Record/MenuN3/Educacao.js'
import Policia from '../Record/MenuN3/Policia.js'
import CulinariaNot from '../Record/MenuN3/CulinariaNot.js'
import Esportes from '../Record/MenuN3/Esportes.js'

function App() {
    return (
        <div>
            <Header />
            <main>
                <Switch>
                    {/* Primeiro Menu (nível do conjunto de opções) */}
                    <Route exact path="/" component={Inicio}></Route>
                    <Route exact path="/record" component={Record}></Route>
                    <Route exact path="/cultura" component={Cultura}></Route>
                    <Route exact path="/band" component={Band}></Route>
                    <Route exact path="/globo" component={Globo}></Route>
                    <Route exact path="/sbt" component={Sbt}></Route>
                    {/* Segundo Menu (nível do conjunto de opções) */}
                    <Route exact path="/record/falabrasil" component={FalaBrasil}></Route>
                    <Route exact path="/record/balancogeral" component={BalancoGeral}></Route>
                    <Route exact path="/record/cidadealerta" component={CidadeAlerta}></Route>
                    <Route exact path="/record/afazenda" component={AFazenda}></Route>
                    <Route exact path="/record/raulgil" component={RaulGil}></Route>
                    {/* Terceiro Menu (nível do conjunto de opções) */}
                    <Route exact path="/record/balancogeral/capital" component={Capital}></Route>
                    <Route exact path="/record/balancogeral/interior" component={Interior}></Route>
                    <Route exact path="/record/balancogeral/brasilia" component={Brasilia}></Route>
                    <Route exact path="/record/balancogeral/culinaria" component={Culinaria}></Route>
                    {/* Quarto Menu (nível do conjunto de opções) */}
                    <Route exact path="/record/balancogeral/capital/politica" component={Politica}></Route>
                    <Route exact path="/record/balancogeral/capital/educacao" component={Educacao}></Route>
                    <Route exact path="/record/balancogeral/capital/policia" component={Policia}></Route>
                    <Route exact path="/record/balancogeral/capital/culinarianot" component={CulinariaNot}></Route>
                    <Route exact path="/record/balancogeral/capital/esportes" component={Esportes}></Route>
                </Switch>
            </main>
        </div>
    )
}

export default App