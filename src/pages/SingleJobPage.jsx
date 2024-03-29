import React, { useEffect, useState } from 'react';
import { jobsUrl } from '../config';
import { Link, useParams } from 'react-router-dom';

export default function SingleJobPage() {
  const [currentJob, setCurrentJob] = useState({});

  const { jobId } = useParams();

  useEffect(() => {
    getJobsDone(jobsUrl + '/' + jobId);
  }, []);

  function getJobsDone(url) {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        console.log('data ===', data);
        setCurrentJob(data);
      })
      .catch((error) => {
        console.warn('ivyko klaida:', error);
      });
  }

  return (
    <div className='container'>
      <h1 className='text-5xl mb-5'>SingleJobPage</h1>
      <div className='border mb-2 px-5 py-3 shadow-md'>
        <h3 className='text-lg font-semibold mb-1'>{currentJob.title}</h3>
        <p>Town: {currentJob.town}</p>
        <p className=''>pay: {currentJob.pay} eur</p>
        <h3 className='text-xl'>description:</h3>
        <p>{currentJob.description}</p>
        <Link
          to={`/jobs/`}
          className='border px-5 py-1 rounded-md mt-4 hover:text-white hover:bg-slate-800 inline-block'>
          Go back
        </Link>
      </div>
    </div>
  );
}
