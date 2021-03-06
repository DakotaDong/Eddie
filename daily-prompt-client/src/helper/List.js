import React, { Component } from "react";
import { Dropdown } from "react-dropdown-now";
import { connect } from "react-redux";

const options = [
    'one', 'two', 'three'
  ]
  
  class List extends Component {
    constructor (props) {
      super(props)
      this.state = {
        selected: ''
      }
      this._onSelect = this._onSelect.bind(this)
    }
  
    _onSelect (option) {
      console.log('You selected ', option.label)
      this.setState({selected: option})
    }
  
    render () {
      const defaultOption = this.state.selected
      const placeHolderValue = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.label
  
      return (
        <section>
          <h3>Flat Array Example </h3>
          <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
          <div className='result'>
            You selected
            <strong> {placeHolderValue} </strong>
          </div>
  
          <section>
            <h4>Options: </h4>
            <div className='code'>
              <pre>
                {`
                    const options = [
                        'one', 'two', 'three'
                    ]
                `}
              </pre>
            </div>
          </section>
        </section>
      );
    }
}

function mapStateToProps(state) {
    return {
      currentUser: state.currentUser
    };
  }
  
  export default connect(mapStateToProps)(List);