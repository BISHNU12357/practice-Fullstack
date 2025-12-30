import { Router } from "express";
import { todoInputHandler, allTodos } from "../controller/todo.controller.js";

const router = Router();

router.route( "/" ).get( allTodos );
router.route( "/newTodo" ).post( todoInputHandler );

export default router;