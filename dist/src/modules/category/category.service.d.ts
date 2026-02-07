import { Category } from "../../../generated/prisma/client";
export declare const categoryService: {
    createCategory: (data: any) => Promise<{
        name: string;
        id: string;
        createdAt: Date;
    }>;
    getAllCategory: () => Promise<{
        name: string;
        id: string;
        createdAt: Date;
    }[]>;
    getCategoryById: (id: string) => Promise<{
        name: string;
        id: string;
        createdAt: Date;
    } | null>;
    deleteCategory: (categoryId: string) => Promise<{
        name: string;
        id: string;
        createdAt: Date;
    }>;
    updateCategory: (categoryId: string, data: Partial<Category>) => Promise<{
        name: string;
        id: string;
        createdAt: Date;
    }>;
};
//# sourceMappingURL=category.service.d.ts.map