import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hook';
import { changePage, setPage } from '../../store/slices/pageNumberSlice';
import { IJobList } from '../../types/job.types';
import styles from './Pagination.module.css';


interface IPaginationProps {
  data: IJobList[];
  maxPageItems: number;
}

const Pagination: FC<IPaginationProps> = ({ data, maxPageItems }) => {
  const dispatch = useAppDispatch();
  const pageNumber = useAppSelector(state => state.pageNumber.page)
  const pages: number[] = [];

  const createPagination = (jobs: any, maxPageItems: number, pages: number[]) => {
    for (let i = 1; i <= jobs.length / maxPageItems; i++) {
      pages.push(i);
    }
  };
  createPagination(data, maxPageItems, pages);


  return (
    <div className={styles.pagination}>
      <button
        disabled={pageNumber === 1}
        className={styles.left}
        onClick={() => dispatch(changePage('-'))}
      ></button>
      <div className={styles.pages}>{pages && pages
        .map((elem, index) => <button
          key={index}
          onClick={() => dispatch(setPage(elem))}
          style={pageNumber === (index + 1) ? { borderBottom: '2px solid #5876C5', color: '#5876C5' } : undefined}
        >{elem}</button>)}
      </div>
      <button
        disabled={pageNumber === pages.length}
        className={styles.right}
        onClick={() => dispatch(changePage('+'))}
      ></button>
    </div>
  )
};

export default Pagination;