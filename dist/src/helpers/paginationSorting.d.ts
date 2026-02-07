type Ioptions = {
    page?: number | string;
    limit?: number | string;
    sortBy?: string;
    sortOrder?: string;
};
type IoptionResult = {
    page: number;
    limit: number;
    skip: number;
    sortBy: string;
    sortOrder: string;
};
declare const paginationSortingHelpers: (options: Ioptions) => IoptionResult;
export default paginationSortingHelpers;
//# sourceMappingURL=paginationSorting.d.ts.map