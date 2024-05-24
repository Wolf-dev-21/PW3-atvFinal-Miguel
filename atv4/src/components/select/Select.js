import style from './Select.module.css'

export function Select({ text, name, options, handlerOnChange, value, }) 

{

    const Turmas = options.map((event) => {
        <options value = {event.id} key={event.id}>
            {event.sigla}</options>
    })
return (
    <div className={style.form_control}>

        <label htmlFor={name}>{text}</label>
        
        <select name={name} id={name} onChange={handlerOnChange}>

            <option value={0}> {text}</option>

                {
                    options.map((option) => (
                        <option
                        value={option.id}
                        key={option.id}>
                        
                        {option.name}
                        </option>
                    ))
                }


            
            

        </select>

    </div>
)
}

