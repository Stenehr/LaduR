import { observable, action, runInAction, computed } from "mobx";
import { createContext } from "react";
import { IVendor, IAddVendor } from "../components/vendor/types";
import agent from "../api/agent";
import { IDropdownItem } from '../components/common/form/types';
import { history } from "..";
import { IProductName, IAddProductName } from '../components/product-name/types';

interface IOrderIn {
    vendorId: number | string | null;
    orderDate: null | string | Date;
    billNumber: null | string;
    extraInfo: null | string;
    products: IProduct[];
}

export interface IProduct {
    productNameId: number | null;
    quantity: number | null;
    price: number | null;
}

function emptyProduct(): IProduct {
    return {
        productNameId: null,
        quantity: null,
        price: null
    }
}

class OrderInStore {
    @observable loadingInitial = false;

    @observable loadingVendorAdding = false;
    @observable vendors: IVendor[] = [];
    @observable vendorsLoaded = false;

    @observable loadingProductNameAdding = false;
    @observable productNames: IProductName[] = [];
    @observable productNamesLoaded = false;

    @observable orderIn: IOrderIn = {
        vendorId: null,
        orderDate: new Date(new Date().setHours(0, 0, 0, 0)),
        billNumber: null,
        extraInfo: null,
        products: []
    };

    @observable selectedProduct: IProduct = emptyProduct();

    @computed get dropdownVendors(): IDropdownItem[] {
        return Array.from(this.vendors).map(vendor => ({
            key: vendor.id,
            text: `${vendor.name} - ${vendor.address}`,
            value: vendor.id
        }));
    }

    @computed get dropdownProductNames(): IDropdownItem[] {
        return this.productNames.map((productName) => ({
            key: productName.id,
            text: productName.name,
            value: productName.id
        }));
    }

    @action getProductName = (productNameId: number) => this.productNames.filter((name) => name.id === productNameId)[0].name;

    @action loadVendors = async () => {
        this.loadingInitial = true;

        try {
            const vendors = await agent.Vendors.list();
            runInAction(() => {
                this.vendors = vendors;
                this.vendorsLoaded = true;
            });
        } finally {
            runInAction(() => (this.loadingInitial = false));
        }
    };

    @action addVendor = async (vendorDto: IAddVendor) => {
        this.loadingVendorAdding = true;

        try {
            const vendor = await agent.Vendors.create(vendorDto);
            runInAction(() => {
                this.vendors.push(vendor);
                this.orderIn.vendorId = vendor.id;
                history.push("/add-order-in");
            });
        } finally {
            runInAction(() => this.loadingVendorAdding = false);
        }
    };

    @action loadProductNames = async() => {
        this.loadingInitial = true;

        try {
            const productNames = await agent.ProductNames.list();
            runInAction(() => {
                this.productNames = productNames;
                this.productNamesLoaded = true;
            })
        } finally {
            runInAction(() => this.loadingInitial = false);
        }
    }

    @action addProductName = async (productNameDto: IAddProductName) => {
        this.loadingProductNameAdding = true;

        try {
            const productName = await agent.ProductNames.create(productNameDto);
            runInAction(() => {
                this.productNames.push(productName);
                this.selectedProduct.productNameId = productName.id;
                history.push("/add-order-in");
            })
        } finally {
            this.loadingProductNameAdding = false;
        }
    }

    @action addProduct = (productDto: IProduct) => {
        this.orderIn.products.push(productDto);
        this.selectedProduct = emptyProduct();
    }

    @action removeProduct = (index: number) => {
        this.orderIn.products.splice(index, 1);
    }
}

export default createContext(new OrderInStore());
