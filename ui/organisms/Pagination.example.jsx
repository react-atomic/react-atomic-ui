import React, {PureComponent} from 'react'; 

import {PaginationController} from 'organism-react-navigation';

class PaginationExample extends PureComponent
{

  handlePageChange = ({begin}) => {
    this.setState({begin});
  }

  render()
  {
    const {begin} = this.state || {};
    return (
      <PaginationController style={Styles.container} onPageChange={this.handlePageChange} total={500} begin={begin} />
    );
  }
}

export default PaginationExample;

const Styles = {
  container: {
    textAlign: 'center'
  }
};
