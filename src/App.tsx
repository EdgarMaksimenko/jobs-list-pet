import React, {FC} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import JobList from './pages/JobList/Joblist';
import JobTitle from './pages/JobTitle/JobTitle';

const App: FC = () => {
  return (
    <div className='body-wrapper'>
      <div className='container'>
        <Routes>
          <Route path ='/' element={<JobList/>}/>
          <Route path ='/job/:id' element={<JobTitle/>}/>

          {/* <Route path='*' element={<Navigate to='/404' />} />
          <Route path ='/404' element={<NotFound/>}/>  */}
        </Routes>
      </div>
    </div>
  )
};

export default App;
