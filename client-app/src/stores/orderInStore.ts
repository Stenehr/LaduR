import { observable, action } from "mobx";
import { createContext } from "react";
import { IVendor, IAddVendor } from '../components/vendor/types';
import agent from "../api/agent";

class OrderInStore {
    @observable loadingInitial = false;
    @observable loadingVendorAdding = false;
    @observable vendors: IVendor[] = [];
    @observable selectedVendor: IVendor | null = null;
    
    @action loadVendors = () => {
        this.loadingInitial = true;

        agent.Vendors.list().then((vendors) => {
            this.vendors = vendors;
        }).finally(() => this.loadingInitial = false);
    }

    @action addVendor = (vendorDto: IAddVendor) => {
        this.loadingVendorAdding = true;

        agent.Vendors.create(vendorDto).then((vendor) => {
            this.vendors.push(vendor);
            this.selectedVendor = vendor;
        }).finally(() => this.loadingVendorAdding = false);
    }
}

export default createContext(new OrderInStore());
