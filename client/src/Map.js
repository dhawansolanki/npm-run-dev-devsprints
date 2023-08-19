import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import DashboardFooter from './DashboardFooter';
// import { SEATGEEK_API_KEY } from './config'; // Adjust the path as needed

const MapPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch data from SeatGeek API using axios
    axios.get(`https://api.seatgeek.com/2/events?client_id=MzU4MTY1MzV8MTY5MjQzNzM2OS4zODk0NDY3`)
      .then(response => {
        setEvents(response.data.events);
        console.log(response.data.events); // Add this line to log the fetched data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Replace these coordinates with the actual ones you want to use
  const initialLatitude = 40.7128;
  const initialLongitude = -74.0060;

  return (
    <div className="map">
      <MapContainer center={[initialLatitude, initialLongitude]} zoom={10} style={{ height: '500px' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {events.map(event =>  (
          <Marker key={event.id} position={[event.venue.location.lat, event.venue.location.lon]}>
            <Popup>
              <div style={{"z-index":999}}>
                <h2>{event.type}</h2>
                <p>Date: {event.datetime_local}</p>
                <a href={event.url} target="_blank" rel="noopener noreferrer">Event Details</a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <DashboardFooter/>
    </div>
  );
};

export default MapPage;
