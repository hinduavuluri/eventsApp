// Write your code here
import './index.css'

const registrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeEventRegistartionStatus} = props

  const noActiveEventView = () => (
    <p className="text">Click an event, to view ites registration details</p>
  )

  const yetToRegisterView = () => (
    <div className="yet-to-register-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register"
      />
      <p className="paragraph">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button className="button" type="button">
        {' '}
        Register Here{' '}
      </button>
    </div>
  )

  const registeredView = () => (
    <div className="registered-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-icon"
      />
      <p className="text">You have already registered for the event</p>
    </div>
  )

  const registrationsClosedView = () => (
    <div className="registrations-closed-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registrations-closed"
      />
      <h1 className="head">Registrations Are Closed Now!</h1>
      <p className="caption">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const renderActiveRegistrationDetails = () => {
    switch (activeEventRegistartionStatus) {
      case registrationStatus.yetToRegister:
        return yetToRegisterView()
      case registrationStatus.registered:
        return registeredView()
      case registrationStatus.registrationsClosed:
        return registrationsClosedView()
      default:
        return noActiveEventView()
    }
  }

  return <div>{renderActiveRegistrationDetails()}</div>
}
export default ActiveEventRegistrationDetails
