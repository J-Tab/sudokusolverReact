import React from 'react';
import './Solver.css'
class Solver extends React.Component{
  constructor(props){
    super(props);
    this.state = {value: null};
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" maxlength = "1" min="1" max="9" value={this.state.value} onInput={this.handleChange.bind(this) } />
          </label>
        </form>
      </div>
    );
  }

}

export default Solver;
