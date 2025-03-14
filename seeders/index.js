import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();
import connect from "../config/database.js";
connect();

// Import all the seeders
import seedCity from './citySeeder.js';
import seedCompany from './companySeeder.js';

// Run the seeder function to seed the database with the default data
const seed = async () => {
    try {        
        await seedCity();
        await seedCompany();
        mongoose.connection.close();
    } catch (error) {
        console.log('Error Seeding:', error);
        mongoose.connection.close();
    }
};

seed();
