import React, { Component } from 'react';
 
class App extends Component {
 
  constructor(props) {
    super(props);
    this.selectCountry = this.selectCountry.bind(this);
    this.state = {
      countries: [],
      gender: {}
    };
  }
  componentDidMount() {
    this.setState({
      countries: [
        {id: '대한민국', name: '대한민국'},
        {id: '영국', name: '영국'},
        {id: '중국', name: '중국'},
        {id: '필리핀', name: '필리핀'},
        {id: '미국', name: '미국'}
      ]
    });
 
    this.setState({
      gender: {
        "Male": "남자",
        "Female": "여자"
      }
    });
  }
 
  selectCountry = (e) => {
    let idx = e.target.value;
    alert(idx)
  }
  render() {
    const { countries } = this.state;
    const { gender } = this.state;
 
    let countriesList = countries.length > 0
        && countries.map((item, i) => {
      return (
        <option key={i} value={item.id}>{item.name}</option>
      )
    }, this);
 
    let genderList = Object.keys(gender).map((k) => {
      return (
        <option key={k} value={k}>{gender[k]}</option>
      )
    }, this);
 
    return (
      <div className="container">
        <div className="row">
          <h1>테스트</h1>
          <form>
          <div className="form-group">
            <label>Country: </label>
            <select className="form-select" onChange={this.selectCountry}>
              {countriesList}
            </select>
          </div>
          <div className="form-group">
          <label>성별: </label>
            <select className="form-select">
              {genderList}
            </select>
          </div>
          </form>
        </div>
      </div>
    );
  }
}export default App;
