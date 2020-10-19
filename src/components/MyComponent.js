import React from 'react';

// const MyComponent = (props) => {
//   console.log(props);
//   return <h1> {props.data.attrs.message} </h1>;
// };
// export default MyComponent;

class MyComponent extends React.Component {
  render() {
    console.log(this.props.message);
    return (
        <h1> {this.props.message} </h1>
    );
  }
}

export default MyComponent;
