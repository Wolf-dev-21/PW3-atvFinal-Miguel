import { useEffect, useState } from 'react'

import {useNavigate} from 'react-router-dom';

import Input from '../../components/Nome/Nome';
import { Select } from '../../components/select/Select';

import style from './Home.module.css'




export default function Home() {
  const [sigla, setSigla] = useState([]);

  const [nome, setNome] = useState([]);

  useEffect(() => {
    fetch(
      'http://localhost:5000/sigla',
      {
        method:'get',
        headers:{
          'content-type':'application/json'
        }
      }).then(
        (resp) => resp.json()
      ).then(
        (data)=>{
          setSigla(data);
          console.log(data);
        }
      ).catch(
        (error)=>{
          console.log(error);
        }
      )
}, [])

function handlerOnChanceNome(event) {
  setTurma({...nome, [event.target.name] : event.target.value});
  console.log(nome)
}

function handlerOnChanceSigla(event){
  setSigla({...nome, sigla:{
    id: event.target.value,
    sigla: event.target.options[event.target.selelectedIndex].text
  }});
}

function createNome(nome){
  fetch('http://localhost:5000/turma',{
    method:'post',
    headers:{
      'content-type':'application/json'
    },
    body: JSON.stringify(nome)
  })
    .then(
      (resp) => resp.json()
    )
    .then(
      (data) => {
        console.log(data)
        navigate('./Nome',{state:'Turma cadastrada'})
      }
    )
    .catch(
      (error)=>{console.log(error)}
    )

    function submit(event){
      event.preventDefault();
      createNome(nome);
    }
}

return(

  <div className='home'>
    <h1> Turmas</h1>

    <form onSubmit={submit}>

    <Input
      type="text"
      name="nome da turma"
      id="id_nome"
      placeholder="Turma:"
      text="Digitar o nome da turma"
      handlerOnChange={handlerOnChanceNome}
    />

    <Select
    name="sigla da turma"
    id="id_sigla"
    options={sigla}
    text="Selecione a sigla referente a Turma"
    handlerOnChange={handlerOnChanceSigla}
    />

        <p>
          <button type="submit">Enviar</button>
        </p>

    </form>

  </div>

)

}