const data = [
    {
        name: "Vagaro",
        website: "https://www.vagaro.com/pro/careers",
        city: {
            name: "Ahmedabad",
            id: 1
        },
        linkedinProfileURL: "https://www.linkedin.com/company/vagaro-technologies-pvt-ltd"
    },
    {
        name: "Cmarix",
        website: "https://www.cmarix.com/career.html",
        city: {
            name: "Ahmedabad",
            id: 1
        },
        linkedinProfileURL: "https://www.linkedin.com/company/cmarix"
    },
    {
        name: "Adrta Technologies Private Limited",
        website: "https://adrtatech.com/career",
        city: {
            name: "Ahmedabad",
            id: 1
        },
        linkedinProfileURL: "https://www.linkedin.com/company/adrta"
    },
    {
        name: "Msp Concepts",
        website: "https://www.mspconcepts.com/career",
        city: {
            name: "Ahmedabad",
            id: 1
        },
        linkedinProfileURL: "https://www.linkedin.com/company/msp-concepts"
    },
    {
        name: "Hupp Technologies",
        website: "https://www.hupp.in/careers",
        city: {
            name: "Ahmedabad",
            id: 1
        },
        linkedinProfileURL: "https://www.linkedin.com/company/hupp-technologies"
    },
    {
        name: "Esparkbiz",
        website: "https://www.esparkinfo.com/careers.html",
        city: {
            name: "Ahmedabad",
            id: 1
        },
        linkedinProfileURL: "https://www.linkedin.com/company/esparkbiz-technologies-pvt-ltd"
    },
    {
        name: "Infilon Technologies",
        website: "https://www.infilon.com/careers",
        city: {
            name: "Ahmedabad",
            id: 1
        },
        linkedinProfileURL: "https://www.linkedin.com/company/infilon-technologies"
    },
    {
        name: "Variance Infotech",
        website: "https://www.varianceinfotech.com/career",
        city: {
            name: "Ahmedabad",
            id: 1
        },
        linkedinProfileURL: "https://www.linkedin.com/company/variance-infotech"
    },
    {
        name: "IT Path Solutions",
        website: "https://www.itpathsolutions.com/career",
        city: {
            name: "Ahmedabad",
            id: 1
        },
        linkedinProfileURL: "https://www.linkedin.com/company/it-path-solutions-pvt-ltd"
    },
    {
        name: "Zealous System",
        website: "https://www.zealousys.com/careers",
        city: {
            name: "Ahmedabad",
            id: 1
        },
        linkedinProfileURL: "https://www.linkedin.com/company/zealous-system"
    },
    {
        name: "Technource",
        website: "https://www.technource.com/career",
        city: {
            name: "Ahmedabad",
            id: 1
        },
        linkedinProfileURL: "https://www.linkedin.com/company/technource"
    },
    {
        name: "Hidden Brains",
        website: "https://www.hiddenbrains.com/career.html",
        city: {
            name: "Ahmedabad",
            id: 1
        },
        linkedinProfileURL: "https://www.linkedin.com/company/hidden-brains-infotech-pvt-ltd"
    },
    {
        name: "Vrinsoft Technology",
        website: "https://www.vrinsofts.com/careers",
        city: {
            name: "Ahmedabad",
            id: 1
        },
        linkedinProfileURL: "https://www.linkedin.com/company/vrinsoft-technology"
    },
    {
        name: "Intelligent IT Hub Pvt Ltd",
        website: "https://www.iihglobal.com/careers",
        city: {
            name: "Ahmedabad",
            id: 1
        },
        linkedinProfileURL: "https://www.linkedin.com/company/intelligent-it-hub-pvt-ltd"
    },
    {
        name: "eClinicalWorks",
        website: "https://www.eclinicalworks.com/careers",
        city: {
            name: "Ahmedabad",
            id: 1
        },
        linkedinProfileURL: "https://www.linkedin.com/company/eclinicalworks"
    },
    {
        name: "Ecosmob Technologies",
        website: "https://www.ecosmob.com/careers",
        city: {
            name: "Ahmedabad",
            id: 1
        },
        linkedinProfileURL: "https://www.linkedin.com/company/ecosmob-technologies-pvt-ltd"
    },
    {
        name: "Virtual Height IT Services Pvt Ltd",
        website: "https://www.virtualheight.com/career",
        city: {
            name: "Ahmedabad",
            id: 1
        },
        linkedinProfileURL: "https://www.linkedin.com/company/virtual-height-it-services-pvt-ltd"
    },
    {
        name: "Tridhya Tech",
        website: "https://www.tridhya.com/careers",
        city: {
            name: "Ahmedabad",
            id: 1
        },
        linkedinProfileURL: "https://www.linkedin.com/company/tridhya-tech"
    },
    {
        name: "BiztechCS",
        website: "https://www.biztechcs.com/careers",
        city: {
            name: "Ahmedabad",
            id: 1
        },
        linkedinProfileURL: "https://www.linkedin.com/company/biztech-consulting-and-solutions"
    },
    {
        name: "MindInventory",
        website: "https://www.mindinventory.com/careers.php",
        city: {
            name: "Ahmedabad",
            id: 1
        },
        linkedinProfileURL: "https://www.linkedin.com/company/mindinventory"
    },
    {
        name: "WebClues Infotech",
        website: "https://www.webcluesinfotech.com/career",
        city: {
            name: "Ahmedabad",
            id: 1
        },
        linkedinProfileURL: "https://www.linkedin.com/company/webclues-infotech"
    },
    {
        name: "Agile Infoways",
        website: "https://www.agileinfoways.com/careers",
        city: {
            name: "Ahmedabad",
            id: 1
        },
        linkedinProfileURL: "https://www.linkedin.com/company/agile-infoways"
    },
    {
        name: "Bytes Technolabs",
        website: "https://www.bytestechnolab.com/careers",
        city: {
            name: "Ahmedabad",
            id: 1
        },
        linkedinProfileURL: "https://www.linkedin.com/company/bytes-technolab-inc"
    }    
];

import Company from "../models/company.model.js";
const seedCompany = async () => {
    try {
        // Delete Exiesting 
        await Company.deleteMany();

        // Insert 
        await Company.insertMany(data);
        console.log('Company seeded successfully.');
    } catch (error) {
        console.error('Error seeding Company:', error);
        throw error;
    }
};

export default seedCompany;