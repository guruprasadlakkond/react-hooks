import React from 'react';
import axios from 'axios';

class ResourceList extends React.Component {
  state = { resources: [], name: '' };
  async componentDidMount() {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/' + this.props.resource
    );
    this.setState({ resources: response.data });
    console.log('did mount');
    this.setState({ name: 'Guru' + Date.now() });
    console.log('did mount after update name');
  }

  async componentDidUpdate(prevProps, prevState, snapShot) {
    if (prevProps.resource !== this.props.resource) {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/' + this.props.resource
      );
      this.setState({ resources: response.data });
    }
    console.log('update ', prevProps, prevState, snapShot);
  }

  render() {
    console.log('render');
    return (
      <div>
        {this.state.resources.length}
        {this.props.resource}
      </div>
    );
  }
}

export default ResourceList;
