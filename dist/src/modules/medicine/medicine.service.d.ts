import { Medicine } from "../../../generated/prisma/client";
import { ICreateMedicineData } from "../../types";
export declare const medicineService: {
    createMedicine: (data: ICreateMedicineData) => Promise<{
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
    }>;
    getAllMedicine: ({ search, page, limit, skip, sortBy, sortOrder }: {
        search: string | undefined;
        page: number;
        limit: number;
        skip: number;
        sortBy: string;
        sortOrder: string;
    }) => Promise<{
        data: ({
            reviews: {
                id: string;
                createdAt: Date;
                medicineId: string;
                rating: number;
                comment: string | null;
            }[];
        } & {
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
        })[];
        pagination: {
            total: number;
            page: number;
            limit: number;
            totalpages: number;
        };
    }>;
    getMedicineById: (id: string) => Promise<({
        category: {
            name: string;
            id: string;
            createdAt: Date;
        };
        reviews: {
            id: string;
            createdAt: Date;
            medicineId: string;
            rating: number;
            comment: string | null;
        }[];
    } & {
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
    }) | null>;
    updateMedicine: (medicineId: string, data: Partial<Medicine>) => Promise<{
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
    }>;
    deleteMedicine: (medicineId: string) => Promise<{
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
    }>;
};
//# sourceMappingURL=medicine.service.d.ts.map