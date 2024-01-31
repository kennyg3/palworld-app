// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Gallery from './components/Gallery';
import OtherPage from './components/OtherPage'; // Import OtherPage component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/other-page" element={<OtherPage />} />
      </Routes>
    </Router>
  );
}

export default App;


// function App() {
//     const [message, setMessage] = useState('');

//     useEffect(() => {
//         axios.get('http://localhost:5058/api/palworld')
//             .then(response => setMessage(response.data))
//             .catch(error => console.error('Error fetching data:', error));
//     }, []);

//     return (
//         <div className="App">
//             <h1>{message}</h1>
//             <Gallery />

//         </div>
//     );
// }

// export default App;




