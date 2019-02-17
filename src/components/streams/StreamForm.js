import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class StreamForm extends Component {
  state = {}

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched && 'error'}`
    return (
      <div className={className} >
        <label>{label}</label>
        <input
          // type="text"
          // onChange={input.onChange}
          // value={input.value}
          {...input}
          autoComplete="off"
        />
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit = (formValues) => {
    // event.preventDefault() // => automated execute on props.handleSubmit (redux-form)
    this.props.onSubmit(formValues)
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field
          name="title"
          component={this.renderInput}
          label="Enter Title"
        />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    )
  }
}

const validate = (formValues) => {
  const errors = {}

  if (!formValues.title) {
    /* property should same as the name of Field */
    errors.title = 'You must enter a title'
  }
  if (!formValues.description) {
    /* property should same as the name of Field */
    errors.description = 'You must enter a description'
  }

  return errors
}

export default  reduxForm({
  form: 'streamForm',
  validate,
})(StreamForm)
