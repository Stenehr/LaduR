import React from "react";
import ProductNameForm from "../../Shared/ProductNameForm";
import SimpleModal from "../../Shared/SimpleModal";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { addProductName } from "../../../actions/productNameActions";

class AddProductName extends React.Component {


    onSubmit = (name) => this.props.addProductName(name); 

    render() {
        return (
            <SimpleModal
                trigger={<Button primary>Lisa tootenimi</Button>}
                size={"tiny"}
                header="Lisa tootenimi"
            >
                <ProductNameForm 
                    onSubmit={this.onSubmit}
                />
            </SimpleModal>
        );
    }

}

const mapStateToProps = (state) =>  {
    return { ...state }
}

export default connect(mapStateToProps, { addProductName })(AddProductName);
