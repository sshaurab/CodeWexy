import React from "react";
class HeadTail extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: {}
      };
      this.handleChange = this.handleChange.bind(this);
      this.handlePrint = this.handlePrint.bind(this);
    }
  
    handlePrint() {
      if (this.state.value) {
        document.write(this.state.value);
      }
    }
  
    handleChange(e) {
      this.setState({ value: e.target.value });
    }
  
    render() {
        
      return (
        <div>
          <select onChange={this.handleChange}>
          <option value="none" selected disabled hidden>select value</option>
                <option value={"H"}>H</option>
                <option value={"T"}>T</option>
          </select>
          <button className="uk-button uk-button-mini" onClick={this.handlePrint}>Submit</button> 
          
        </div>
      );
    }
  }
  
  export default HeadTail;