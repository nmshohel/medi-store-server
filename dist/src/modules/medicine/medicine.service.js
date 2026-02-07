import { prisma } from "../../lib/prisma";
const createMedicine = async (data) => {
    const result = await prisma.medicine.create({
        data: {
            ...data,
        }
    });
    return result;
};
const getAllMedicine = async ({ search, page, limit, skip, sortBy, sortOrder }) => {
    const andConditions = [];
    if (search) {
        andConditions.push({
            OR: [
                {
                    name: {
                        contains: search,
                        mode: 'insensitive'
                    },
                },
                {
                    manufacturer: {
                        contains: search,
                        mode: 'insensitive'
                    },
                },
            ]
        });
    }
    const allMedicine = await prisma.medicine.findMany({
        take: limit,
        skip,
        where: {
            AND: andConditions
        },
        orderBy: {
            [sortBy]: sortOrder
        },
        include: {
            reviews: true
        }
    });
    const total = await prisma.medicine.count({
        where: {
            AND: andConditions
        }
    });
    return {
        data: allMedicine,
        pagination: {
            total,
            page,
            limit,
            totalpages: Math.ceil(total / limit)
        }
    };
};
const getMedicineById = async (id) => {
    const result = await prisma.medicine.findUnique({
        where: {
            id
        },
        include: {
            category: true,
            reviews: true
        }
    });
    return result;
};
const updateMedicine = async (medicineId, data) => {
    const result = await prisma.medicine.update({
        where: {
            id: medicineId
        },
        data
    });
    return result;
};
const deleteMedicine = async (medicineId) => {
    const isExist = await prisma.medicine.findUnique({
        where: {
            id: medicineId
        }
    });
    console.log(isExist, "**************");
    if (isExist === null) {
        throw new Error("Medicine not found");
    }
    const result = await prisma.medicine.delete({
        where: {
            id: medicineId
        },
    });
    return result;
};
export const medicineService = {
    createMedicine,
    getAllMedicine,
    getMedicineById,
    updateMedicine,
    deleteMedicine
};
//# sourceMappingURL=medicine.service.js.map