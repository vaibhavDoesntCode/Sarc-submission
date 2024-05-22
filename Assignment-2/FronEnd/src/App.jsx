import { useEffect, useState } from 'react'
import './App.css'
import Carousel from './components/Carousel/Carousel'

function App() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/events/')
      .then((res) => res.json())
      .then((res) => {
        setEvents(res);
        console.log(res)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

      console.log(events)
  }, []);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
    
  };


 return(
  <div className='bodyy'>
    <h1 className='heading' >Events of  <div className='sarc-logo' ></div>   </h1>
    <div className='horizontal-rule' ></div>
    <div className='heading-page' ></div>
    <Carousel data={events}  />
    
    <div className='head'>
      
      
    </div>
    <div className='events-div'>
    {events.map((event) => (
      <div className="container"  key={event.id} onClick={() => handleEventClick(event)}>
      <div className="box">
        <span className="title">{event.name}</span>
        <div>
          <strong>{event.date}</strong>
          <p>{event.location}</p>
          <span>{event.time}</span>
        </div>
      </div>
    </div>
    
))}
    </div>
    {selectedEvent && (
        <div className="modal" onClick={handleCloseModal} >
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <div className='actual-modal-content'>
            <img width="100%" src={selectedEvent.image} alt="" />
            <div className='modal-text-content'>
              <div className='modal-real-text'>
            <h2>{selectedEvent.name}</h2>
            <div className='modal-description'>
              <p><i> {selectedEvent.description}</i></p>
            </div>
            </div>
            <div className='modal-info'>
            <p> {selectedEvent.date}</p>
            <p> {selectedEvent.location}</p>
            <p> {selectedEvent.time}</p>
            </div>
            </div>
            </div>
            {/* Add more event details here */}
          </div>
        </div>
      )}

  </div>
 )
}

export default App
