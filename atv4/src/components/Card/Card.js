import './CardBook.module.css'
import { Link } from 'react-router-dom'

export function Card ({id, name, sigla, siglaId, handlerRemove }) {

    const remove = (event) => {
        event.preventDefault();
        handlerRemove(id);
    }

    return(
        <div className={styles.book_card}>

            <h4>{name}</h4>
            
            <p>{id}</p>

            <p className={styles.category_text}>
                <span></span>{sigla.name}
            </p>

            <div className={styles.book_card_actions}>

            <Link to={`/editar/${id}`}>
                    Editar
                </Link>

                <button onClick={remove}>
                    Excluir
                </button>

            </div>

        </div>


    )
}