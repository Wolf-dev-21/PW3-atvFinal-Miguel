import './Home.module.css'
import Input from '../../components/Nome/Nome'
import { Select } from '../../components/select/Select';
import { useEffect } from 'react'

export default function Home() {
  const [sigla, setSigla] = useState([]);

  useEffect(() => {
    fetch(
      'http://localhost:5000/turmas',
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

return(

  <div className='home'>
    <h1> Turmas</h1>

    <form>

    <Input
      type="text"
      name="nome da turma"
      id="id_nome"
      placeholder="Turma:"
      text="Digitar o nome da turma"
    />

    <Select
    name="sigla da turma"
    id="id_sigla"
    options={sigla}
    text="Selecione a sigla referente a Turma"
    />


    </form>

  </div>

)

}