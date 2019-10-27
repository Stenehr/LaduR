import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api";

const responseBody = (response) => response.data;

const request = {
    get: (url) => axios.get(url).then(responseBody),
    post: (url, body) => axios.post(url, body).then(responseBody),
    put: (url, id, body) => axios.put(`${url}/${id}`, body).then(responseBody),
    delete: (url, id) => axios.delete(`${url}/${id}`).then(responseBody)
}


const productNameController = "productname";
const productName = {
    list: () => request.get(productNameController),
    add: (body) => request.post(productNameController, body),
    update: (id, body) => request.put(productNameController, id, body),
    delete: (id) => request.delete(productNameController, id)
}

const vendorController = "vendor";
const vendor = {
    list: () => request.get(vendorController),
    add: (body) => request.post(vendorController, body)
}

export default {
    productName,
    vendor
}
