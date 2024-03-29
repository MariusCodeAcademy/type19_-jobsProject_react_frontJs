import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import Header from './components/Header';
import SingleJobPage from './pages/SingleJobPage';

export default function App() {
  return (
    <div className='App '>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/jobs/:jobId' element={<SingleJobPage />} />
      </Routes>
    </div>
  );
}
