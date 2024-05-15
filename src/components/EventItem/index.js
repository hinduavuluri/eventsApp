// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, renderResultView, isActive} = props
  const {imageUrl, name, location, id} = eventDetails

  const eventImageClassName = isActive ? 'event-image active' : 'event-image'

  const displayResult = () => {
    renderResultView(id)
  }

  return (
    <li>
      <div className="container">
        <button onClick={displayResult} type="button">
          <img src={imageUrl} alt="event" className={eventImageClassName} />
        </button>
        <p className="event-name">{name}</p>
        <p className="event-location">{location}</p>
      </div>
    </li>
  )
}

export default EventItem
