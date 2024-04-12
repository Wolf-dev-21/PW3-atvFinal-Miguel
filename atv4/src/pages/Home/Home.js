import styles from './Home.module.css'
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

}