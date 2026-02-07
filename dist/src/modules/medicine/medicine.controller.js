import { medicineService } from "./medicine.service";
import paginationSortingHelpers from "../../helpers/paginationSorting";
const createMedicine = async (req, res, next) => {
    try {
        const result = await medicineService.createMedicine(req.body);
        res.status(201).json(result);
    }
    catch (e) {
        res.status(400).json({
            error: "Medicine Added Failed",
            details: e
        });
    }
};
const getAllMedicine = async (req, res) => {
    try {
        const { search } = req.query;
        const searchString = typeof search === 'string' ? search : undefined;
        const { page, limit, skip, sortBy, sortOrder } = paginationSortingHelpers(req.query);
        const result = await medicineService.getAllMedicine({ search: searchString, page, limit, skip, sortBy, sortOrder });
        res.status(200).json(result);
    }
    catch (e) {
        res.status(400).json({
            error: "Fatching problem",
            details: e
        });
    }
};
const getMedicineById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await medicineService.getMedicineById(id);
        res.status(200).json(result);
    }
    catch (err) {
        res.status(400).json({
            error: "Fatching problem",
            details: err
        });
    }
};
const updateMedicine = async (req, res, next) => {
    try {
        const { medicineId } = req.params;
        const data = req.body;
        const result = await medicineService.updateMedicine(medicineId, data);
        res.status(200).json(result);
    }
    catch (err) {
        res.status(400).json({
            error: "Update Failed",
            details: err
        });
    }
};
const deleteMedicine = async (req, res, next) => {
    try {
        const { medicineId } = req.params;
        const result = await medicineService.deleteMedicine(medicineId);
        res.status(200).json(result);
    }
    catch (err) {
        res.status(400).json({
            error: "Delete Failed",
            details: err
        });
    }
};
export const medicineController = {
    createMedicine,
    getAllMedicine,
    getMedicineById,
    updateMedicine,
    deleteMedicine
};
//# sourceMappingURL=medicine.controller.js.map