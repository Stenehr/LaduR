export interface IAddProductName {
    name: string | undefined;
}

export interface IEditProductName extends IAddProductName {
    id: number
}