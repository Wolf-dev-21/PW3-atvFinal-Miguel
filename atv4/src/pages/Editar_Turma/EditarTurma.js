import styles from './EditarLivro.module.css'

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Input from '../../components/Input/Input'
import { Select } from '../Select/Select';

function EditarTurma(){

     /* State de dados das categorias vindas do aqruivo db,json */
    const[sigla, setSigla] = useState([]);

    // Recuperando o id da url
    const {id} = useParams();
    console.log('ID:' + id);

    //Objeto de navegação
    const navigate = useNavigate();

    const [turma, setTurma] = useState({});

     /* Recupera os dados de categoria do arquivo db,json */
//     useEffect( ()=>{ 
//     fetch(
//         'http://localhost:5000/categories',
//         {
//             method:'get',
//             headers:{
//             'content-type':'application/json'
//             }
//         }).then(
//         (resp) =>resp.json()
//         ).then(
//             (data)=>{
//             setCategories(data);
//             console.log(data);
//             }
//         ).catch(
//         (error)=>{
//             console.log(error);
//         }
//         )
// }, [])




    // Recuperando os dados de livro para edição
    useEffect(() => {

        fetch(`http://localhost:5000/Turma/${id}`, {
        method: 'GET',
        mode: 'cors',
        headers:{
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Headers':'*',
        },
    })
        .then((resp) => resp.json())
        .then((data)=>{setTurma(data.data); console.log(data.data)})
        .catch((err) =>{console.log(err)});
    
    }, []) ;


    /* Handler de captura dos dados de input (nomde do livro, autor, descrição) */
function handlerOnChangeTurma(event) {

    setBook({...turma, [event.target.name] : event.target.value});
    console.log(turma)
}

  /* Handler de captura dos dados de Select (id e categoria) */
function handlerChangeSigla(event) {
    setBook({...turma, category:{
    id: event.target.value,
    sigla: event.target.options[event.target.selectedIndex].text
    
    }});
}

//Função de submit controlado dos dados
function submit(event){
    event.preventDefault();
    editBook(turma);
}

//Funcionalidade de edição de livro
function editTurma(turma){

    fetch(`http://localhost:5000/Editarturma`, {
        method: 'PUT',
        mode: 'cors',
        headers:{
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Headers':'*',
        },
        body: JSON.stringify(turma)
    })
    .then(resp => resp.json())
    .then((data)=>{
        setBook(data);
        navigate('/Livros',{state:'Turma alterado com sucesso!'});
    })
    .catch((error) => console.log(error));
}

    return(

    <div className={styles.book_container}> 
        <h1>Edição de Turma</h1>

        <form onSubmit={submit}>

        <Input
            type="text"
            name="nome_turma"
            id="nome_turma"
            placeholder="Digite o o nome da turma"
            text="Digite o o nome da turma"
            value={book.nome_livro}
            handlerOnChange={handlerOnChangeTurma}
        />


        <Select
            name="sigla_id"
            text="Selecione a sigla da turma"
            options={sigla}
            handlerOnChange={handlerChangeSigla}
        />

        <p>In<Input type='submit' value='Editar Turma' /></p>

        </form>

    </div>

    );
}

export default EditarTurma;