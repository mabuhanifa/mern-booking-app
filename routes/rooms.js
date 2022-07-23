import express from "express";
import {
    createRoom,
    deleteRoom,
    getRoom,
    getRooms,
    updateRoom,
    updateRoomAvailability
} from "../controllers/roomController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

/*
----------Creating RoomsRoutes api------------
----------Includes CRUD operations------------
*/

//Create a Room
router.post("/:hotelid", verifyAdmin, createRoom);

//Update a Room

router.put("/:id", verifyAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvailability);

// Delete a Room

router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

// Get a Room by id

router.get("/:id", getRoom);

// Get all Rooms

router.get("/", getRooms);

export default router;
