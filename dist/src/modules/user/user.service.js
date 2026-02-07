import { prisma } from "../../lib/prisma";
const getAllUser = async ({ search, page, limit, skip, sortBy, sortOrder }) => {
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
                    email: {
                        contains: search,
                        mode: 'insensitive'
                    },
                },
            ]
        });
    }
    const allUser = await prisma.user.findMany({
        take: limit,
        skip,
        where: {
            AND: andConditions,
            status: "unban"
        },
        orderBy: {
            [sortBy]: sortOrder
        },
    });
    const total = await prisma.user.count({
        where: {
            AND: andConditions,
            status: "unban"
        }
    });
    return {
        data: allUser,
        pagination: {
            total,
            page,
            limit,
            totalpages: Math.ceil(total / limit)
        }
    };
};
const getUserById = async (id) => {
    console.log(id);
    const result = await prisma.user.findUnique({
        where: {
            id
        },
        include: {
            orders: true,
            medicines: true
        }
    });
    return result;
};
const updateUser = async (userId, data) => {
    console.log(userId);
    const result = await prisma.user.update({
        where: {
            id: userId
        },
        data
    });
    return result;
};
const deleteUser = async (userId) => {
    const result = await prisma.user.delete({
        where: {
            id: userId
        },
    });
    return result;
};
export const userService = {
    getAllUser,
    getUserById,
    updateUser,
    deleteUser
};
//# sourceMappingURL=user.service.js.map