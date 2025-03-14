const data = [
    {
        id: 1,
        name: "Ahmedabad"
    },
    {
        id: 2,
        name: "Surat"
    },
    {
        id: 3,
        name: "Gandhinagar"
    },
    {
        id: 4,
        name: "Rajkot"
    },
    {
        id: 5,
        name: "Vadodara"
    },
    {
        id: 6,
        name: "Mumbai"
    },
    {
        id: 7,
        name: "Pune"
    }
];


import City from '../models/city.model.js';
const seedCity = async () => {
    try {
        // Delete Exiesting 
        await City.deleteMany();

        // Insert 
        await City.insertMany(data);
        console.log('City seeded successfully.');
    } catch (error) {
        console.error('Error seeding City:', error);
        throw error;
    }
};

export default seedCity;