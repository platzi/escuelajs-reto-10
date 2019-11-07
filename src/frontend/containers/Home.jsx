import React, { Component } from 'react';
import Products from '../components/Products';

class Home extends Component {
  constructor() {
    super();
    this.products = null;
  }

  componentDidMount() {
    this.products = async () => {
      let response;
      try {
        response = await fetch('http://localhost:8080/api/products')
          .then(res => res.json())
          .then((json) => {
            console.log(json);
            return json;
          })
          .catch();
      } catch (error) {}
      return response.data;
    };
  }

  render() {
    return <Products products={this.products} />;
  }
}

export default Home;
