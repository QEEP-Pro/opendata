import React, { Component } from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from './Header';
import Chart from './Chart';
import Sidebar from './Sidebar';

const ContentWrapper = styled.main`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
`;

class App extends Component {
  state = {
    type: 'regional'
  }

  setDataType = (dataType) => {
    this.setState({ type: dataType })
  }
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Бюджет Томска | Открытые данные 2018</title>
        </Helmet>
        <Header/>
        <ContentWrapper>
          <Sidebar setDataType={this.setDataType} />
          <Chart type={this.state.type}/>
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default App;
