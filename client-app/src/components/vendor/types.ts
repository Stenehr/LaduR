export interface IVendor {
    id: number;
    name: string;
    address: string | null;
}

export interface IAddVendor {
    name: string;
    address: string | null;
}

export interface IEditVendor extends IAddVendor {
    id: number;
}