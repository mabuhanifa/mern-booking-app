import express from "express";
import {
    deleteUser,
    getUser,
    getUsers,
    updateUser
} from "../controllers/userController.js";
import { verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("hello user, you are logged in");
});

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send("hello user, you are logged in and you can update or delete your account");
});
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
