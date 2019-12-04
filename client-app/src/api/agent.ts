import axios, { AxiosResponse } from "axios";
import { IAddVendor } from '../components/vendor/types';
import { IAddProductName, IEditProductName } from '../components/product-name/types';

axios.defaults.baseURL = "http://localhost:5000/api";

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody)
}

const Vendors = {
    list: () => requests.get("/vendor"),
    create: (body: IAddVendor) => requests.post("/vendor", body)
}

const ProductNames = {
    list: () => requests.get("/productName"),
    details: (id: number) => requests.get(`/productName/${id}`),
    create: (body: IAddProductName) => requests.post("/productName", body),
    update: (body: IEditProductName) => requests.put(`/productName/${body.id}`, body),
    delete: (id: number) => requests.delete(`/productName/${id}`)
}