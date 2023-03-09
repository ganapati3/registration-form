import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    isFormSubmitted: false,
    isLastNameEntered: false,
    isFirstNameEntered: false,
    firstName: '',
    lastName: '',
  }

  onBlurFirstName = event => {
    if (event.target.value === '') {
      this.setState({isFirstNameEntered: true})
    } else {
      this.setState({isFirstNameEntered: false})
    }
  }

  onBlurLastName = event => {
    if (event.target.value === '') {
      this.setState({isLastNameEntered: true})
    } else {
      this.setState({isLastNameEntered: false})
    }
  }

  updateFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  updateLastName = event => {
    this.setState({lastName: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '') {
      this.setState({isFirstNameEntered: true})
    }
    if (lastName === '') {
      this.setState({isLastNameEntered: true})
    }
    if (firstName !== '' && lastName !== '') {
      this.setState({isFormSubmitted: true, firstName: '', lastName: ''})
    }
  }

  submitAnotherForm = () => {
    this.setState({isFormSubmitted: false})
  }

  renderForm = () => {
    const {
      isFirstNameEntered,
      isLastNameEntered,
      firstName,
      lastName,
    } = this.state
    const errorFirstName = isFirstNameEntered ? 'error-input' : ''
    const errorLastName = isLastNameEntered ? 'error-input' : ''

    return (
      <>
        <form className="form-container" onSubmit={this.submitForm}>
          <div>
            <label htmlFor="firstName">FIRST NAME</label>
            <br />
            <input
              value={firstName}
              placeholder="First name"
              onChange={this.updateFirstName}
              onBlur={this.onBlurFirstName}
              className={`input-bar ${errorFirstName}`}
              type="text"
              id="lastName"
            />
            {isFirstNameEntered && <p className="error-msg">*Required</p>}
            <br />
            <label htmlFor="firstName">LAST NAME</label>
            <br />
            <input
              value={lastName}
              placeholder="Last name"
              onChange={this.updateLastName}
              onBlur={this.onBlurLastName}
              className={`input-bar ${errorLastName}`}
              type="text"
              id="lastName"
            />
            {isLastNameEntered && <p className="error-msg">*Required</p>}
            <br />
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </>
    )
  }

  renderSubmitted = () => (
    <div className="response-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p>Submitted Successfully</p>
      <button
        onClick={this.submitAnotherForm}
        type="button"
        className="submit-response-btn"
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isFormSubmitted} = this.state

    return (
      <div className="home-container">
        <h1 className="heading">Registration</h1>
        {isFormSubmitted ? this.renderSubmitted() : this.renderForm()}
      </div>
    )
  }
}

export default RegistrationForm
