import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { IAddVendor, IVendor } from '../components/vendor/types';
import { IAddProductName, IProductName } from '../components/product-name/types';
import { IOrderIn, IOrderInFilter } from '../stores/orderInStore';
import { IOrderInListItem } from '../components/order-in/types';

axios.defaults.baseURL = "http://localhost:5000/api";

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string, config?: AxiosRequestConfig ) => axios.get(url, config).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody)
}

const Vendors = {
    list: (): Promise<IVendor[]> => requests.get("/vendor"),
    create: (body: IAddVendor): Promise<IVendor> => requests.post("/vendor", body)
}

const ProductNames = {
    list: (): Promise<IProductName[]> => requests.get("/productName"),
    details: (id: number): Promise<IProductName[]> => requests.get(`/productName/${id}`),
    create: (body: IAddProductName): Promise<IProductName> => requests.post("/productName", body),
    update: (body: IAddProductName): Promise<IProductName> => requests.put(`/productName/${body.id}`, body),
    delete: (id: number) => requests.delete(`/productName/${id}`)
}

const OrderIn = {
    list: (query: IOrderInFilter): Promise<IOrderInListItem[]> => requests.get("/orderIn", { data: { query }}),
    create: (body: IOrderIn): Promise<any> => requests.post("/orderIn", body)
}

export default {
    Vendors,
    ProductNames,
    OrderIn
}