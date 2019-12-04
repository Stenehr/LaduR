export interface IAddVendor {
    name: string | undefined;
    address: string | undefined;
}

export interface IEditVendor extends IAddVendor {
    id: number;
}