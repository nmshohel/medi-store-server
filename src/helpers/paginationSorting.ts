type Ioptions={
    page?:number|string
    limit?:number|string
    sortBy?:string
    sortOrder?:string
}

type IoptionResult={
    page:number;
    limit:number;
    skip:number;
    sortBy:string;
    sortOrder:string

}

const paginationSortingHelpers=(options:Ioptions):IoptionResult=>{
    const page:number=Number(options.page) || 1
    const limit:number=Number(options.limit) || 5
    const skip=(page-1)*limit
    const sortBy:string=options.sortBy|| "createdAt"
    const sortOrder:string=options.sortOrder|| "desc"
    return {
        page,
        limit,
        skip,
        sortBy,
        sortOrder
    }

}

export default paginationSortingHelpers;