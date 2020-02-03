import { IVendor } from '../vendor/types';
import { IProductName } from '../product-name/types';

export interface IOrderInListItem {
    id: number;
    billNumber: string;
    vendor: IVendor;
    orderDate: Date | string;
    extraInfo: string;
    orderDetails: IOrderDetailsListItem[];
}

interface IOrderDetailsListItem {
    id: number;
    productId: number;
    productName: IProductName;
    quantity: number;
    price: number;
}
