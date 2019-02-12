import React, { Component } from 'react';
import ErrorButton from '../error-button';
import './item-details.css';

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{field}</span>
    </li>
  );
};

export {
  Record
};

export default class ItemDetails extends Component {

  state = {
    item: null,
    image: null
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  onPersonLoaded = item => {
    this.setState({ item });
  };

  updateItem = () => {
    const { itemId, getData, getImageUrl } = this.props;

    if (!itemId) {
      return;
    }

    getData(itemId)
      .then((item) => {
        this.setState({
          item,
          image: getImageUrl(item)
        })
      });
  };

  render() {
    const { item, image } = this.state;

    if (!this.state.item) {
      return <span>Select a item from a list</span>;
    }

    const { name, gender, birthYear, eyeColor } = item;

    return (
      <div className="item-details card">

      <img
        className="person-image"
        src={image}
        alt="Ulala"
      />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {
            React.Children.map(this.props.children, (child) => {
              return child;
            })
           }
        </ul>
          <ErrorButton />
      </div>
      </div>
    );
  }
}
