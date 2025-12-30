import { Todo } from "../model/todo.model.js"

export const todoInputHandler = async ( req, res ) => {
    const { title, description, isCompleted } = req.body;

    try {
        const confirm = await Todo.create( {
            title,
            description,
            isCompleted
        } )

        if ( confirm ) {
            res.status( 200 ).json( {
                success: true,
                message: "The task got registered",
            } )
        }
    } catch ( error ) {
        res.status( 400 ).json( {
            success: false,
            message: error.message
        } )
    }

};

export const allTodos = async ( req, res ) => {
    try {
        const todos = await Todo.find();
        if ( todos ) {
            res.status( 200 ).json( {
                success: true,
                count: todos.length,
                data: todos,
            } );
        }
    } catch ( error ) {
        res.status.json( {
            success: false,
            message: error.message,
        } );
    }
}