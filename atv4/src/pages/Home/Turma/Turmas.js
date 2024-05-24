import { useState, useEffect } from "react";

import Input from '../../../components/Nome/Nome'
import {Select} from '../../../components/select/Select';
import { useNavigate } from "react-router-dom";

import styles from '../Turma/NovoLivro.module.css'

export default function CriarTurma(){
    const navigate = useNavigate();

    const[turma, setTurma] = useState([]);
    const[nome, setNome] = useState([]);

useEffect( () => {
    fetch(
        'http://localhost:5000/turma',
        {
            method:'get',
            headers:{
                'content-type':'application/json'
            } 
        }).then((resp) => resp.json()
        ).then((data) =>{
            setTurma(data);
            console.log(data);
        }).catch((error)=>{console.log(error);
        }
        )
},[])

// function handlerOnChanceTurma(event){
//     setTurma({...turma. [event.target.name] : event.target.value});
//     console.log(turma)
// }

function handlerOnChanceNome(event) {
    setTurma({...turma, nome:{
        id: event.target.value,
        nome: event.target.options[event.target.selectedIndex].text
    }});
}

}