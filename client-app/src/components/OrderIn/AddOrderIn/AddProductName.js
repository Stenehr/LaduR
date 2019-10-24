import React from "react";
import ProductNameForm from "../../Shared/ProductNameForm";
import SimpleModal from "../../Shared/SimpleModal";

class AddProductName extends React.Component {


    render() {
        return (
            <SimpleModal
                header="Lisa tootenimi"
            >
                <ProductNameForm/>
            </SimpleModal>
        );
    }

}

export default AddProductName;
