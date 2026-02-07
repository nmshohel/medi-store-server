import paginationSortingHelpers from "../../helpers/paginationSorting";
import { userService } from "./user.service";
const getAllUser = async (req, res) => {
    try {
        const { search } = req.query;
        const searchString = typeof search === 'string' ? search : undefined;
        const { page, limit, skip, sortBy, sortOrder } = paginationSortingHelpers(req.query);
        const result = await userService.getAllUser({ search: searchString, page, limit, skip, sortBy, sortOrder });
        res.status(200).json(result);
    }
    catch (e) {
        res.status(400).json({
            error: "Fatching problem",
            details: e
        });
    }
};
const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await userService.getUserById(id);
        res.status(200).json(result);
    }
    catch (err) {
        res.status(400).json({
            error: "Fatching problem",
            details: err
        });
    }
};
const updateUser = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const data = req.body;
        const result = await userService.updateUser(userId, data);
        res.status(200).json(result);
    }
    catch (err) {
        res.status(400).json({
            error: "Update Failed",
            details: err
        });
    }
};
const deleteUser = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const result = await userService.deleteUser(userId);
        res.status(200).json(result);
    }
    catch (err) {
        res.status(400).json({
            error: "Delete Failed",
            details: err
        });
    }
};
export const userController = {
    getAllUser,
    getUserById,
    updateUser,
    deleteUser
};
//# sourceMappingURL=user.controller.js.map