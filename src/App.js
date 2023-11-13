import './App.css';
import { Route, Routes } from 'react-router-dom';
import Cities from './components/Cities';
import Quote from './components/Quote';
import Layout from './components/Layout';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<p>Home Page!</p>} />
          <Route path='quote' element={<Quote />} />
          <Route path='cities' element={<Cities />} />
          <Route path='cards' element={<Cards />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;