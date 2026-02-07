import { categoryService } from "./category.service";
const createCategory = async (req, res, next) => {
    try {
        const result = await categoryService.createCategory(req.body);
        res.status(201).json(result);
    }
    catch (e) {
        res.status(200).json({
            error: "Created Failed",
            details: e
        });
    }
};
const getAllCategory = async (req, res) => {
    try {
        const result = await categoryService.getAllCategory();
        res.status(200).json(result);
    }
    catch (e) {
        res.status(400).json({
            error: "Fatching problem",
            details: e
        });
    }
};
const getCategoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await categoryService.getCategoryById(id);
        res.status(200).json(result);
    }
    catch (err) {
        res.status(400).json({
            error: "Fatching problem",
            details: err
        });
    }
};
const deleteCategory = async (req, res, next) => {
    try {
        const { categoryId } = req.params;
        const result = await categoryService.deleteCategory(categoryId);
        res.status(200).json(result);
    }
    catch (err) {
        res.status(400).json({
            error: "Delete Failed",
            details: err
        });
    }
};
const updateCategory = async (req, res, next) => {
    try {
        const { categoryId } = req.params;
        const data = req.body;
        const result = await categoryService.updateCategory(categoryId, data);
        res.status(200).json(result);
    }
    catch (err) {
        res.status(400).json({
            error: "Update Failed",
            details: err
        });
    }
};
export const categoryController = {
    createCategory,
    getAllCategory,
    getCategoryById,
    deleteCategory,
    updateCategory
};
//# sourceMappingURL=category.controller.js.map