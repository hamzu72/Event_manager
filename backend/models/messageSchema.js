import validator from "validator";
import express from "express";
import mongoose from "mongoose";
const messageSchema = new mongoose.Schema({
    name: {
        type: String, 
        required:[true, "Name Required"],
    minlength: [3, "Name must be at least 3 characters"],
    },
    email:
    {
        type: String, 
        required:[true, "Email Required"],
        validate: [validator.isEmail, "Please enter a valid email address"],
    },
    subject: {
        type: String,
        required: [true, "Subject Required"],
        minlength: [5, "Subject must be at least 5 characters"],
    },
    message: {
        type: String,
        required: [true, "Message Required"],
        minlength: [20, "Message must be at least 20 characters"],
    },
});
export const Message = mongoose.model("Message", messageSchema);