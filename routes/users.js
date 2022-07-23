import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser
} from "../controllers/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

// ---------------- Optional Routes for verify -----------------------

router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("hello user, you are logged in");
});

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send(
    "hello user, you are logged in and you can update or delete your account"
  );
});

router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
  res.send("hello admin, you are logged in and you can delete all accounts");
});

/*
----------User Routes api------------
----------Includes CRUD operations------------
*/

//Update a user

router.put("/:id", verifyUser, updateUser);

// Delete a user

router.delete("/:id", verifyUser, deleteUser);

// Get a user by id

router.get("/:id", verifyUser, getUser);

// Get all user

router.get("/", verifyAdmin, getUsers);

export default router;
