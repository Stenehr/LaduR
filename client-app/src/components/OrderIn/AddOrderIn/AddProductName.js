import React from "react";
import ProductNameForm from "../../Shared/ProductNameForm";
import SimpleModal from "../../Shared/SimpleModal";
import { Button } from "semantic-ui-react";

class AddProductName extends React.Component {


    render() {
        return (
            <SimpleModal
                trigger={<Button primary>Lisa tootenimi</Button>}
                size={"tiny"}
                header="Lisa tootenimi"
            >
                <ProductNameForm/>
            </SimpleModal>
        );
    }

}

export default AddProductName;
