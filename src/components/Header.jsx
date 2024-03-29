import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className='flex justify-between items-center'>
      <Link to={'/'}>Logo</Link>
      <nav>
        <ul className='flex'>
          <li>
            <NavLink className={'px-4 py-2 block hover:bg-slate-200'} to={'/'}>
              Homepage
            </NavLink>
          </li>
          <li>
            <NavLink className={'px-4 py-2 block hover:bg-slate-200'} to={'/jobs'}>
              JobsPage
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
