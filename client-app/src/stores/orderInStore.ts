import { observable, action, runInAction } from "mobx";
import { createContext } from "react";
import { IVendor, IAddVendor } from '../components/vendor/types';
import agent from "../api/agent";

interface IOrderIn {
    vendor: IVendor | null
}

class OrderInStore {
    @observable loadingInitial = false;
    @observable loadingVendorAdding = false;
    @observable vendors: IVendor[] = [];
    @observable selectedVendor: IVendor | null = null;
    @observable orderIn: IOrderIn = {
        vendor: null
    }
    
    @action loadVendors = () => {
        this.loadingInitial = true;

        agent.Vendors.list().then((vendors) => {
            this.vendors = vendors;
        }).finally(() => this.loadingInitial = false);
    }

    @action addVendor = async (vendorDto: IAddVendor) => {
        this.loadingVendorAdding = true;

        try {
            const vendor = await agent.Vendors.create(vendorDto);
            runInAction(() => {
                this.vendors.push(vendor);
                this.orderIn.vendor = vendor;
            });
        } finally {
            runInAction(() => this.loadingVendorAdding = false);
        }
    }
}

export default createContext(new OrderInStore());
