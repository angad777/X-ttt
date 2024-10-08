import React, { Component } from 'react'

export default class SetName extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  //	------------------------	------------------------	------------------------

  render() {
    return (
      <div id='SetName'>
        <h1>Set Name</h1>

        <form
          onSubmit={this.saveName.bind(this)}
          aria-labelledby='setNameLabel'
        >
          <div ref='nameHolder' className='input_holder left'>
            <label htmlFor='nameInput'>Name</label>
            <input
              ref='name'
              id='nameInput'
              type='text'
              className='input name'
              placeholder='Enter your name'
              aria-required='true'
            />
          </div>

          <button type='submit' className='button' aria-label='Save name'>
            <span>
              SAVE
              <span className='fa fa-caret-right' aria-hidden='true'></span>
            </span>
          </button>
        </form>
      </div>
    )
  }

  //	------------------------	------------------------	------------------------

  saveName(e) {
    // const { name } = this.refs
    // const { onSetName } = this.props
    // onSetName(name.value.trim())

    this.props.onSetName(this.refs.name.value.trim())
  }
}
