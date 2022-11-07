import React, { FC } from 'react';
import styles from './JobList.module.css';
import { useAppDispatch, useAppSelector } from '../../hook';
import { fetchJoblist } from '../../store/slices/jobSlice';
import JobListItem from '../../components/JobListItem/JobListItem';
import Pagination from '../../components/Pagination/Pagination';
import Loading from '../../components/Loading/Loading';



const JobList: FC = () => {
  const dispatch = useAppDispatch();
  const jobList = useAppSelector(state => state.jobList.list);
  const loading = useAppSelector(state => state.jobList.loading);
  const pageNumber = useAppSelector(state => state.pageNumber.page);
  const maxPageItems = 5;

  React.useEffect(() => {
    if(loading){
      dispatch(fetchJoblist());
    }  
  }, [dispatch]);

  if (!loading){
    return (
      <>
        <div className={styles.list}>
          {jobList
            .slice((pageNumber * maxPageItems) - maxPageItems, pageNumber * maxPageItems)
            .map(job => <JobListItem key={job.id} {...job} />)}
        </div>
        <Pagination
          data={jobList}
          maxPageItems={maxPageItems}
        />
      </>
    )
  }else{
    return (
      <Loading/>
    )
  }
};

export default JobList;