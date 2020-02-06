export interface IPageList<T> {
    items: T[];
    pageNum: number;
    totalPages: number;
}