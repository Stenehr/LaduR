import { observable, action, runInAction, computed } from "mobx";
import { createContext } from "react";
import { IVendor, IAddVendor } from '../components/vendor/types';
import agent from "../api/agent";

interface IOrderIn {
    vendorId: number | string | null
}

class OrderInStore {
    @observable loadingInitial = false;
    @observable loadingVendorAdding = false;
    @observable vendors: IVendor[] = [];
    @observable selectedVendor: IVendor | null = null;
    @observable orderIn: IOrderIn = {
        vendorId: "2"
    }

    @computed get dropdownVendors(): {text: string, value: string | number}[] {
        return this.vendors.map((vendor) => ({ text: `${vendor.name} - ${vendor.address}`, value: vendor.id }));
    }
    
    @action loadVendors = async () => {
        this.loadingInitial = true;

        try {
            const vendors = await agent.Vendors.list();
            runInAction(() => {
                this.vendors = vendors;
            });
        } finally {
            runInAction(() => this.loadingInitial = false);
        }
    }

    @action addVendor = async (vendorDto: IAddVendor) => {
        this.loadingVendorAdding = true;

        try {
            const vendor = await agent.Vendors.create(vendorDto);
            runInAction(() => {
                this.vendors.push(vendor);
                this.orderIn.vendorId = vendor.id;
            });
        } finally {
            runInAction(() => this.loadingVendorAdding = false);
        }
    }
}

export default createContext(new OrderInStore());
