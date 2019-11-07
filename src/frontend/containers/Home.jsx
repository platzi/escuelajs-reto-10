import React, { Component } from 'react';
import Products from '../components/Products';

class Home extends Component {
  componentDidMount() {
    const products = async () => {
      let response;
      try {
        response = await fetch('http://localhost:8080/api/products')
          .then(res => res.json())
          .then((json) => {
            console.log(json);
            return json;
          })
          .catch(() => console.error('Ups! Somenthing went wrong. Try again later.'));
      } catch (error) {
      }
      return response.data;
    };
  }

  render() {
    return (<div>{this.products}</div>);
  }
}

export default Home;
