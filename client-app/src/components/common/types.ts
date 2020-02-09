export class PagedList<T> {
    items: T[] = [];
    pageNum: number = 1;
    totalPages: number = 1;

    update(init?: Partial<PagedList<T>>) {
        if (init) {
            Object.assign(this, init);
        }
    }
}