import { useEffect, useState, } from 'react'
import { api } from './services/api'


import './App.css'


function App() {

  const [ nome , setNome ] = useState('');
  const [ descri , setDescri ] = useState('');
  const [ qtda , setQtda ] = useState('');
  const [ fabricante , setFabricante ] = useState('');


  const [ nomeList , setNomeList ] = useState('');
  const [ descriList , setDescriList ] = useState('');
  const [ qtdaList , setQtdaList ] = useState('');
  const [ fabricanteList , setFabricanteList ] = useState('');
  
  


  async function consultar(){
    const response = await api.get('/produtos');
    setNomeList(response.data.result[0].nome)
    setDescriList(response.data.result[0].descri)
    setQtdaList(response.data.result[0].qtda)
    setFabricanteList(response.data.result[0].fabricante)
    
  }



  async function inclusao(){

    const data = { 
        nome: nome,
        descri:descri,
        qtda:qtda,
        fabricante:fabricante,
    }

    const response = await api.post('/produtos', data );
    
}


  return (
    <>
     <h1>Aula de Rec</h1>
     <p>Nome: {nomeList}</p>
     <p>Descrição: {descriList}</p>
     <p>Quantidade: {qtdaList}</p>
     <p>Fabricante: {fabricanteList}</p>
     <button onClick={ consultar}>Consultar</button>

     <p>nome</p><input type="text" onChange={e => setNome(e.target.value)} />
     <p>Descrição</p><input type="text"  onChange={e => setDescri(e.target.value)} />
     <p>Quantidade</p><input type="text" onChange={e => setQtda(e.target.value)}/>
     <p>Fabricante</p><input type="text" onChange={e => setFabricante(e.target.value)}/>
     <br/>
     <button
      onClick={inclusao}
     >Cadastrar</button>

    </>
  )
}

export default App
