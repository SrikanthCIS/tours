import React,{useState, useEffect} from 'react';
import TourList from './components/TourList';
import './App.css';
const url = "https://course-api.netlify.app/api/react-tours-project";

function App() {
   const [tours, setTours] = useState([]);

  // logic to get data from url
  const fetchTours = async () => {
    const response = await fetch(url);
    const tours = await response.json();
    setTours(tours);
  }
  // logic to remove the tour 
  const removeTours = (id) => {
    const newTours = tours.filter((tour) => tour.id !==id);
    setTours(newTours);
  }

  useEffect(() => {
    fetchTours();
  },[]);

  // func to refesh tourlist
  if(tours.length === 0) {
    return (
      <div className="title">
        <h2>No Tours Left</h2>
        <button className='btn'onClick={() => fetchTours()}>Refresh </button>
      </div>
    )
  }

  return (
    <div className="App">
     {/* disp todolist */}
     <TourList tours={tours} removeTours= {removeTours} />
    </div>
  );
}

export default App;
