import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import Header from './components/Header';

export default function App() {
  return (
    <div className='App container mx-auto'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
      </Routes>
    </div>
  );
}
