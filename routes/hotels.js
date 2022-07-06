import express from "express";
import {
    countByCity,
    countByType,
    createHotel,
    deleteHotel,
    getHotel, getHotels,
    updateHotel
} from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

/*
----------Creating HotelRoutes api------------
----------Includes CRUD operations------------
*/

//Create a hotel
router.post("/", verifyAdmin, createHotel);

//Update a hotel

router.put("/:id", verifyAdmin, updateHotel);

// Delete a hotel

router.delete("/:id", verifyAdmin, deleteHotel);

// Get a hotel by id

router.get("/find/:id", getHotel);

// Get all hotel

router.get("/", getHotels);

router.get("/countByCity", countByCity);
router.get("/countByType", countByType);

export default router;
