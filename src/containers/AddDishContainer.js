import React from 'react';
import { DishAddForm } from '../components';
import { hashHistory } from 'react-router';

import { categoryFetchData } from '../libs/helpers';

class AddDishContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            src: '',
            category: {
	            index: '',
	            value: ''
            },
            description: '',
            categories: []
        };
        this.getCategoryData = this.getCategoryData.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeSrc = this.handleChangeSrc.bind(this);
        this.handleChangeCategory = this.handleChangeCategory.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.formClear = this.formClear.bind(this)
    }
    componentDidMount() {
        this.getCategoryData();
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
	handleChangeCategory (event, index, value) {
		const { categories } = this.state;
		this.setState({
			category: {
        value: categories[index],
        index
      }
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
            category: this.state.category.value,
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
            category: {
	            index: 0,
	            value: '',
            },
            description: ''
        })

    }
    getCategoryData() {
	      categoryFetchData().then(category => {
		        this.setState({
			          categories: category.map((item) => {
				          return item['name']
			          })
		        });
	      });
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