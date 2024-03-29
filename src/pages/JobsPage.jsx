import React, { useEffect, useState } from 'react';
import { jobsUrl } from '../config';

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
      <p>Look at all the jobs we have</p>

      <ul>
        {jobsArr.map((jObj) => (
          <li className='border mb-2 px-5 py-3' key={jObj.id}>
            <h3 className='text-lg font-semibold mb-1'>{jObj.title}</h3>
            <p>Town: {jObj.town}</p>
            <p className=''>pay: {jObj.pay} eur</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
