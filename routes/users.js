import express from "express";
import {
    deleteUser,
    getUser,
    getUsers,
    updateUser
} from "../controllers/userController.js";
const router = express.Router();

/*
----------User Routes api------------
----------Includes CRUD operations------------
*/

//Update a user

router.put("/:id", updateUser);

// Delete a user

router.delete("/:id", deleteUser);

// Get a user by id

router.get("/:id", getUser);

// Get all user

router.get("/", getUsers);

export default router;
