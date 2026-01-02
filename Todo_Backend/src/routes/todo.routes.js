import { Router } from "express";
import { todoInputHandler, allTodos } from "../controller/todo.controller.js";

const router = Router();

router.route( "/todos" ).get( allTodos );
router.route( "/newTodo" ).post( todoInputHandler );

export default router;