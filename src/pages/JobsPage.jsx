import React, { useEffect, useState } from 'react';
import { jobsUrl } from '../config';
import { Link } from 'react-router-dom';

export default function JobsPage() {
  const [jobsArr, setJobsArr] = useState([]);

  useEffect(() => {
    getJobsDone(jobsUrl);
  }, []);

  function getJobsDone(url) {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        console.log('data ===', data);
        setJobsArr(data);
      })
      .catch((error) => {
        console.warn('ivyko klaida:', error);
      });
  }

  return (
    <div className='container'>
      <h1 className='text-5xl mb-5'>JobsPage</h1>
      <p className='mb-8'>Look at all the jobs we have</p>

      <ul>
        {jobsArr.map((jObj) => (
          <li className='border mb-2 px-5 py-3 shadow-md' key={jObj.id}>
            <h3 className='text-lg font-semibold mb-1'>{jObj.title}</h3>
            <p>Town: {jObj.town}</p>
            <p className=''>pay: {jObj.pay} eur</p>
            <Link
              to={`/jobs/${jObj.id}`}
              className='border px-5 py-1 rounded-md mt-4 hover:text-white hover:bg-slate-800 inline-block'>
              Read more
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
