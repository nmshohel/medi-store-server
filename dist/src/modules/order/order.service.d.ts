import { Order } from "../../../generated/prisma/client";
export declare const OrderService: {
    createOrder: (data: any, userId: string) => Promise<{
        orderItems: {
            id: string;
            price: number;
            medicineId: string;
            quantity: number;
            orderId: string;
        }[];
    } & {
        status: import("../../../generated/prisma/enums").OrderStatus;
        id: string;
        createdAt: Date;
        userId: string;
        orderNumber: number | null;
        totalAmount: number;
        deliveryFee: number;
        address: string;
        paymentMethod: string;
    }>;
    getAllOrder: ({ search, page, limit, skip, sortBy, sortOrder }: {
        search: string | undefined;
        page: number;
        limit: number;
        skip: number;
        sortBy: string;
        sortOrder: string;
    }) => Promise<{
        data: ({
            user: {
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
            };
        } & {
            status: import("../../../generated/prisma/enums").OrderStatus;
            id: string;
            createdAt: Date;
            userId: string;
            orderNumber: number | null;
            totalAmount: number;
            deliveryFee: number;
            address: string;
            paymentMethod: string;
        })[];
        pagination: {
            total: number;
            page: number;
            limit: number;
            totalpages: number;
        };
    }>;
    getOrderById: (id: string) => Promise<({
        user: {
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
        };
    } & {
        status: import("../../../generated/prisma/enums").OrderStatus;
        id: string;
        createdAt: Date;
        userId: string;
        orderNumber: number | null;
        totalAmount: number;
        deliveryFee: number;
        address: string;
        paymentMethod: string;
    }) | null>;
    updateOrder: (orderId: string, data: Partial<Order>) => Promise<{
        status: import("../../../generated/prisma/enums").OrderStatus;
        id: string;
        createdAt: Date;
        userId: string;
        orderNumber: number | null;
        totalAmount: number;
        deliveryFee: number;
        address: string;
        paymentMethod: string;
    }>;
    deleteOrder: (orderId: string) => Promise<{
        status: import("../../../generated/prisma/enums").OrderStatus;
        id: string;
        createdAt: Date;
        userId: string;
        orderNumber: number | null;
        totalAmount: number;
        deliveryFee: number;
        address: string;
        paymentMethod: string;
    }>;
    getMyOrder: ({ search, page, limit, skip, sortBy, sortOrder, userId }: {
        search: string | undefined;
        page: number;
        limit: number;
        skip: number;
        sortBy: string;
        sortOrder: string;
        userId: string;
    }) => Promise<{
        data: ({
            user: {
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
            };
        } & {
            status: import("../../../generated/prisma/enums").OrderStatus;
            id: string;
            createdAt: Date;
            userId: string;
            orderNumber: number | null;
            totalAmount: number;
            deliveryFee: number;
            address: string;
            paymentMethod: string;
        })[];
        pagination: {
            total: number;
            page: number;
            limit: number;
            totalpages: number;
        };
    }>;
};
//# sourceMappingURL=order.service.d.ts.map