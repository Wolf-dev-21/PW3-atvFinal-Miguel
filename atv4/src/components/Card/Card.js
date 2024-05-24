import './CardBook.module.css'

export function Card ({id, name, sigla}) {

    return(
        <div className={styles.book_card}>

            <h4>{name}</h4>
            
            <p>Turma: {id}</p>

            <p className={styles.category_text}>
                <span></span>{sigla.name}
            </p>
        </div>
    )
}