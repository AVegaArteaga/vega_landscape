import express from 'express';
import mongoose from 'mongoose';

import PostAddress from '../models/address.js';

const router = express.Router();


export const getAddressPosts = async (req, res) => { 
    
    try {
        const postAddresses = await PostAddress.find();
                
        res.status(200).json(postAddresses);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createAddressPosts= async (req, res) => {
    const post = req.body;

    const newPostAddresses = new PostAddress({ ...post, creator: req.userId, createdAt: new Date().toISOString() })

    try {
        await newPostAddresses.save();

        res.status(201).json(newPostAddresses );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export default router;