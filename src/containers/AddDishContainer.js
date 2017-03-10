import React from 'react';
import { DishAddForm } from '../components';
import { hashHistory } from 'react-router';

class AddDishContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            src: '',
            category: '',
            description: ''
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeSrc = this.handleChangeSrc.bind(this);
        this.handleChangeCategory = this.handleChangeCategory.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.formClear = this.formClear.bind(this)
    }

    handleChangeName(event) {
        this.setState({
            name: event.target.value
        });
    }
    handleChangeSrc(event) {
        this.setState({
            src: event.target.value
        });
    }
    handleChangeCategory(event) {
        this.setState({
            category: event.target.value
        });
    }
    handleChangeDescription(event) {
        this.setState({
            description: event.target.value
        });
    }

    handleSubmit() {
        const data = {
            dishName: this.state.name,
            srcImage: this.state.src,
            category: this.state.category,
            description: this.state.description,
        };
        fetch('http://localhost:8080/category/dishes', {
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.message);
                this.formClear();
                hashHistory.push('/admin/dishes');
            });
    }
    formClear() {
        this.setState({
            name: '',
            src: '',
            category: '',
            description: ''
        })

    }

    render() {
        return (
            <DishAddForm
                data={this.state}
                handleSubmit={this.handleSubmit}
                handleChangeName={this.handleChangeName}
                handleChangeSrc={this.handleChangeSrc}
                handleChangeCategory={this.handleChangeCategory}
                handleChangeDescription={this.handleChangeDescription}
            />
        );
    }
}

export default AddDishContainer;