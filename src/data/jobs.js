const jobs = [
    { id: 1, name: "Marketing Manager", salary: "$78,950", industryId: 1 },
    {
        id: 2,
        name: "Digital Marketing Specialist",
        salary: "$65,230",
        industryId: 1,
    },
    { id: 3, name: "SEO Specialist", salary: "$55,000", industryId: 1 },
    { id: 4, name: "Content Strategist", salary: "$60,000", industryId: 1 },
    { id: 5, name: "Social Media Manager", salary: "$52,500", industryId: 1 },
    { id: 6, name: "Brand Strategist", salary: "$70,000", industryId: 1 },
    {
        id: 7,
        name: "Email Marketing Specialist",
        salary: "$58,000",
        industryId: 1,
    },
    { id: 8, name: "Marketing Analyst", salary: "$68,000", industryId: 1 },
    {
        id: 9,
        name: "Product Marketing Manager",
        salary: "$90,000",
        industryId: 1,
    },
    {
        id: 10,
        name: "Public Relations Specialist",
        salary: "$65,000",
        industryId: 1,
    },

    { id: 11, name: "Farm Manager", salary: "$58,220", industryId: 2 },
    { id: 12, name: "Agricultural Engineer", salary: "$71,730", industryId: 2 },
    { id: 13, name: "Crop Consultant", salary: "$62,000", industryId: 2 },
    { id: 14, name: "Soil Scientist", salary: "$65,000", industryId: 2 },
    {
        id: 15,
        name: "Agricultural Technician",
        salary: "$48,000",
        industryId: 2,
    },
    {
        id: 16,
        name: "Farm Equipment Operator",
        salary: "$42,000",
        industryId: 2,
    },
    { id: 17, name: "Animal Scientist", salary: "$75,000", industryId: 2 },
    {
        id: 18,
        name: "Agronomy Sales Representative",
        salary: "$55,500",
        industryId: 2,
    },
    { id: 19, name: "Horticulturist", salary: "$50,000", industryId: 2 },
    { id: 20, name: "Farm Worker", salary: "$35,000", industryId: 2 },

    { id: 21, name: "Automotive Technician", salary: "$46,630", industryId: 3 },
    {
        id: 22,
        name: "Automotive Sales Manager",
        salary: "$72,500",
        industryId: 3,
    },
    { id: 23, name: "Service Manager", salary: "$65,000", industryId: 3 },
    {
        id: 24,
        name: "Auto Body Repair Technician",
        salary: "$50,000",
        industryId: 3,
    },
    { id: 25, name: "Parts Specialist", salary: "$42,500", industryId: 3 },
    { id: 26, name: "Tire Technician", salary: "$35,000", industryId: 3 },
    {
        id: 27,
        name: "Transmission Specialist",
        salary: "$55,000",
        industryId: 3,
    },
    { id: 28, name: "Automotive Detailer", salary: "$30,000", industryId: 3 },
    { id: 29, name: "Fleet Manager", salary: "$70,000", industryId: 3 },
    { id: 30, name: "Service Advisor", salary: "$45,000", industryId: 3 },

    { id: 31, name: "Bank Teller", salary: "$34,750", industryId: 4 },
    { id: 32, name: "Financial Analyst", salary: "$66,750", industryId: 4 },
    { id: 33, name: "Loan Officer", salary: "$59,000", industryId: 4 },
    { id: 34, name: "Branch Manager", salary: "$80,000", industryId: 4 },
    { id: 35, name: "Investment Advisor", salary: "$90,000", industryId: 4 },
    { id: 36, name: "Mortgage Consultant", salary: "$72,000", industryId: 4 },
    { id: 37, name: "Insurance Underwriter", salary: "$65,000", industryId: 4 },
    { id: 38, name: "Financial Consultant", salary: "$78,000", industryId: 4 },
    { id: 39, name: "Wealth Manager", salary: "$110,000", industryId: 4 },
    { id: 40, name: "Risk Manager", salary: "$95,000", industryId: 4 },

    { id: 41, name: "Cosmetologist", salary: "$42,310", industryId: 5 },
    { id: 42, name: "Beauty Consultant", salary: "$48,900", industryId: 5 },

    { id: 43, name: "Chemical Engineer", salary: "$108,770", industryId: 6 },
    { id: 44, name: "Chemist", salary: "$62,750", industryId: 6 },

    { id: 45, name: "Civil Engineer", salary: "$87,060", industryId: 7 },
    {
        id: 46,
        name: "Construction Project Manager",
        salary: "$99,230",
        industryId: 7,
    },

    { id: 47, name: "Management Consultant", salary: "$88,030", industryId: 8 },
    { id: 48, name: "Strategy Consultant", salary: "$110,420", industryId: 8 },

    { id: 49, name: "Product Manager", salary: "$97,770", industryId: 9 },
    { id: 50, name: "Brand Manager", salary: "$89,550", industryId: 9 },

    { id: 51, name: "Teacher", salary: "$57,950", industryId: 10 },
    { id: 52, name: "School Principal", salary: "$102,750", industryId: 10 },

    { id: 53, name: "Electrical Engineer", salary: "$99,070", industryId: 11 },

    { id: 54, name: "Energy Analyst", salary: "$73,660", industryId: 12 },

    { id: 55, name: "Film Director", salary: "$82,910", industryId: 13 },

    { id: 56, name: "Fashion Designer", salary: "$75,810", industryId: 14 },

    { id: 57, name: "Financial Advisor", salary: "$90,530", industryId: 15 },

    { id: 58, name: "Restaurant Manager", salary: "$54,670", industryId: 16 },

    { id: 59, name: "Nurse Practitioner", salary: "$112,030", industryId: 17 },

    { id: 60, name: "Hotel Manager", salary: "$60,210", industryId: 18 },

    { id: 61, name: "Insurance Agent", salary: "$52,190", industryId: 19 },

    { id: 62, name: "Software Engineer", salary: "$105,590", industryId: 20 },

    { id: 63, name: "Lawyer", salary: "$122,960", industryId: 21 },

    {
        id: 64,
        name: "Logistics Coordinator",
        salary: "$52,820",
        industryId: 22,
    },

    {
        id: 65,
        name: "Manufacturing Engineer",
        salary: "$83,960",
        industryId: 23,
    },

    { id: 66, name: "Journalist", salary: "$48,870", industryId: 24 },

    { id: 67, name: "Mining Engineer", salary: "$93,720", industryId: 25 },
];

export default jobs;
