import React, {useState} from 'react';

import Navigation from './components/Navigation/Navigation';
import HomePage from './components/HomePage/HomePage';
import FunFactsPage from './components/FunFactsPage/FunFactsPage';
import AboutPage from './components/AboutPage/AboutPage';

function App() {

  const [page, setPage] = useState(0);

  let currPage = <HomePage />;

  switch(page){
    case 0:
      currPage = <HomePage />;
      break;
    case 1:
      currPage = <FunFactsPage />;
      break;
    case 2:
      currPage = <AboutPage />;
      break;
    default: 
      currPage = <HomePage />;
  }
  return (
    <div className="App">
      <Navigation onChange={setPage} page={page}/>
      {currPage}
    </div>
  );
}

export default App;
