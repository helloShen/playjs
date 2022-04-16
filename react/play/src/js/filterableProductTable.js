import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

function ProductRow(props) {
  const name = (props.stocked) ?
    props.name :
    <span style={{color: 'red'}}>{props.name}</span>
  return (
    <tr>
      <td>
        {name}
      </td>
      <td>
        {props.price}
      </td>
    </tr>
  );
}

function ProductCategoryRow(props) {
  return (
    <tr>
      <th colSpan="2">
        {props.category}
      </th>
    </tr>
  );
}

function ProductTable(props) {
  const data = props.data;
  const rows = Object.keys(data).reduce((arr, category) => {
    arr.push(<ProductCategoryRow category={category} />);
    const products = data[category];
    arr = products.reduce((result, product) => {
      result.push(<ProductRow
        name={product.name}
        stocked={product.stocked}
        price={product.price}
      />);
      return result;
    }, arr);
    return arr;
  }, []);
  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Price</td>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar(props) {
  const searchText = props.searchText;
  const isInStock=props.isInStock;
  const handleSearchTextChange = props.handleSearchTextChange;
  const handleIsInStockChange = props.handleIsInStockChange;
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={handleSearchTextChange}
      />
      <p>
        <input
          type="checkbox"
          checked={isInStock}
          onChange={handleIsInStockChange}
        />
        {' '}
        Only show products in stock
      </p>
    </form>
  );
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.handleIsInStockChange = this.handleIsInStockChange.bind(this);
    this.state = {
      searchText: '',
      isInStock: false
    }
  }

  handleSearchTextChange(e) {
    this.setState({
      searchText: e.target.value
    });
  }

  handleIsInStockChange(e) {
    this.setState({
      isInStock: e.target.checked
    });
  }

  filter(rawData) {
    const searchText = this.state.searchText;
    const isInStock = this.state.isInStock;
    return rawData.filter((product) => {
      return (isInStock) ?
        (
          product.name.indexOf(searchText) !== -1 &&
          product.stocked === true
        ) :
        (
          product.name.indexOf(searchText) !== -1
        );
    });
  }

  parse(filteredData) {
    return filteredData.reduce((result, ele) => {
      const category = ele.category;
      const price = ele.price;
      const stocked = ele.stocked;
      const name = ele.name;
      if (!result[category]) result[category] = [];
      result[category].push({
        price: price,
        stocked: stocked,
        name: name
      });
      return result;
    }, {});
  }


  render() {
    const data = this.props.data;
    const searchText = this.state.searchText;
    const isInStock = this.state.isInStock;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          isInStock={isInStock}
          handleSearchTextChange={this.handleSearchTextChange}
          handleIsInStockChange={this.handleIsInStockChange}
        />
        <ProductTable data={this.parse(this.filter(data))} />
      </div>
    );
  }
}

/**
 * Main Render
 */
const root = ReactDOM.createRoot(
  document.getElementById('root')
);

const DATA = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

root.render(<FilterableProductTable data={DATA} />);