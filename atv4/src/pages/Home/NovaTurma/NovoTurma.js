import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import Input from '../../components/Input/Input'
import { Select } from '../Select/Select';

import styles from './NovoLivro.module.css'


export default function NovoTurma() {

  /* Objeto de navegação*/
  const navigate = useNavigate();

    /* State de dados das categorias vindas do aqruivo db,json */
  const[sigla, setSigla] = useState([]);

  /* State de dados que vai armazenar o objeto json de livro*/
  const[turma, setTurma] = useState({});



   /* Recupera os dados de categoria do arquivo db,json */
//   useEffect( ()=>{ 
//   fetch(
//       'http://localhost:5000/categories',
//       {
//         method:'get',
//         headers:{
//           'content-type':'application/json'
//         }
//       }).then(
//         (resp) =>resp.json()
//       ).then(
//           (data)=>{
//             setCategories(data);
//             console.log(data);
//           }
//       ).catch(
//         (error)=>{
//           console.log(error);
//         }
//       )
// }, [])



  /* Handler de captura dos dados de input (nomde do livro, autor, descrição) */
  function handlerOnChangeTurma(event) {

    setTurma({...turma, [event.target.name] : event.target.value});
    console.log(turma)
  }

  /* Handler de captura dos dados de Select (id e categoria) */
  function handlerChangeSigla(event) {
    setTurma({...turma, sigla:{
      id: event.target.value,
      sigla: event.target.options[event.target.selectedIndex].text
      
    }});
  }

   /* inserção dos dados de livro */
  function createTurma(turma){
    fetch('http://localhost:5000/Turma',{
      method:'post',
      mode:'cors' ,
      headers:{
        'content-type':'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
    },
    body: JSON.stringify(turma)
  })
    .then(
      (resp) => resp.json()
    )
    .then(
      (data) => {
        console.log(data)
        navigate('/livros',{state:'Turma cadastrado com sucesso!'})
      }
    )
    .catch(
      (err)=>{console.log(err)}
    )

  }

   /* Função de submit */
  function submit(event){
    event.preventDefault();
    createTurma(turma);
  }


  return (
    <section className={styles.novolivros_container}>
      <h1>Cadastre Turma</h1>

      <form onSubmit={submit}>
      
        {/*<p>
          <input type="text" placeholder="Nome do livro" id="" />
        </p>} */}
        <Input
          type="text"
          name="nome_turma"
          id="nome_turma"
          placeholder="Digite o titulo do livro"
          text="Digite o titulo do livro"
          handlerOnChange={handlerOnChangeTurma}
        />




      

        <Select
            name="categoria_id"
            text="Selecione a categoria do livro"
            options={sigla}
            handlerOnChange={handlerChangeSigla}
        />

        <p>
          <button type="submit">Enviar</button>
        </p> 

      </form>
    </section>
  )
}
