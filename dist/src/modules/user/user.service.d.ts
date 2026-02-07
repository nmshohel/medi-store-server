import { User } from "../../../generated/prisma/client";
export declare const userService: {
    getAllUser: ({ search, page, limit, skip, sortBy, sortOrder }: {
        search: string | undefined;
        page: number;
        limit: number;
        skip: number;
        sortBy: string;
        sortOrder: string;
    }) => Promise<{
        data: {
            name: string;
            role: string | null;
            phone: string | null;
            status: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            emailVerified: boolean;
            image: string | null;
        }[];
        pagination: {
            total: number;
            page: number;
            limit: number;
            totalpages: number;
        };
    }>;
    getUserById: (id: string) => Promise<({
        medicines: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            image: string | null;
            description: string | null;
            price: number;
            stock: number;
            manufacturer: string;
            sellerId: string;
            categoryId: string;
        }[];
        orders: {
            status: import("../../../generated/prisma/enums").OrderStatus;
            id: string;
            createdAt: Date;
            userId: string;
            orderNumber: number | null;
            totalAmount: number;
            deliveryFee: number;
            address: string;
            paymentMethod: string;
        }[];
    } & {
        name: string;
        role: string | null;
        phone: string | null;
        status: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        emailVerified: boolean;
        image: string | null;
    }) | null>;
    updateUser: (userId: string, data: Partial<User>) => Promise<{
        name: string;
        role: string | null;
        phone: string | null;
        status: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        emailVerified: boolean;
        image: string | null;
    }>;
    deleteUser: (userId: string) => Promise<{
        name: string;
        role: string | null;
        phone: string | null;
        status: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        emailVerified: boolean;
        image: string | null;
    }>;
};
//# sourceMappingURL=user.service.d.ts.map