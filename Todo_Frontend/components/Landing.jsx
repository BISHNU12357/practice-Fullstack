import { useState, useEffect } from "react";
import axios from "axios";

export const Landing = () => {
    const [todos, setTodos] = useState( [] );

    useEffect( () => {
        const result = async () => {
            try {
                const cur = await axios.get( "http://localhost:8000/api/v1/todo/todos" );
                setTodos( cur.data.data );

                console.log(todos);
            } catch ( error ) {
                console.log( `error is ${ error }` )
            }
        }
        result();
    }, [] );

    return <div>
        <ul>
            { todos.map( ( todo ) => ( <li >
                <div>
                    <ul>
                        <li>{ todo.title }</li>
                        <li>{ todo.description }</li>
                        <li>{ todo.isCompleted }</li>
                    </ul>
                </div>
            </li> ) ) }
        </ul>
    </div>
}
