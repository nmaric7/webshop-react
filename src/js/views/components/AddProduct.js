import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

class AddProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            img: '',
            category: '',
            price: '',
            discount: '0'
        };
    }

    handleNameChange = (e) => {
        this.setState({name: e.target.value});
    };
    handleDescriptionChange = (e) => {
        this.setState({description: e.target.value});
    };
    handlePriceChange = (e) => {
        this.setState({price: e.target.value});
    };
    handleDiscountChange = (e) => {
        this.setState({discount: e.target.value});
    };
    handleCategoryChange = (e) => {
        this.setState({category: e.target.value});
    };
    handleImageChange = (e) => {
        const imgPath = e.target.value;
        this.setState({img: imgPath.substring(imgPath.lastIndexOf('\\') + 1)});
    };

    handleAddProduct = () => {
        const {onAddProduct} = this.props;
        onAddProduct(this.state);
    };

    render() {
        const {categories} = this.props;
        return (
            <div>
                <Form className={'add-product-form'}>
                    <FormGroup>
                        <Label>Name</Label>
                        <Input placeholder={'Name'} onChange={this.handleNameChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Description</Label>
                        <Input placeholder={'Description'} onChange={this.handleDescriptionChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for={'category'}>Category</Label>
                        <Input type={'select'} name={'category'} id={'category'} onChange={this.handleCategoryChange}>
                            {categories.map((c, idx) =>
                                <option key={idx} value={c.id}>{c.name}</option>
                            )}
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Price</Label>
                        <Input placeholder={'Price'} onChange={this.handlePriceChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Discount</Label>
                        <Input placeholder={'Discount'} onChange={this.handleDiscountChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for={'img'}>Image</Label>
                        <Input type={'file'} name={'img'} id={'img'} onChange={this.handleImageChange}/>
                        <FormText color="muted">
                            This is some placeholder block-level help text for the above input.
                            It's a bit lighter and easily wraps to a new line.
                        </FormText>
                    </FormGroup>
                    <Button className={'btn-lg btn-dark btn-block'} onClick={this.handleAddProduct}>
                        Add Product
                    </Button>
                </Form>

            </div>
        );
    }
}

AddProduct.propTypes = {};

export default AddProduct;