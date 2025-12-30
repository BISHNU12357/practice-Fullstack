import mongoose, { Schema } from "mongoose";

const todoSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
});

export const Todo = mongoose.model("Todo", todoSchema);