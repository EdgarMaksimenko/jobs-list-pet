import React, { FC } from 'react';
import styles from './JobListItem.module.css';
import location from '../../static/location.png'
import star from '../../static/star.png';
import favourite from '../../static/favourite.png';
import { IJobList } from '../../types/job.types';
import { NavLink } from 'react-router-dom';

const JobListItem: FC<IJobList> = (job) => {

  const countTimePosted: any = (dateOfPost: Date) => {
    let currentDate: Date = new Date();
    let days = (Date.parse(currentDate.toString()) - Date.parse(dateOfPost.toString())) / 86400000;
    if (days > 365) {
      return `${Math.round(days / 365)} years`;
    } else {
      return `${Math.round(days)} days`;
    }
  };

  return (
    <>
      <NavLink className={styles.list__item} to={`/job/${job.id}`}>
        <img src={job.pictures[0]} alt="place" className={styles.place} />
        <div className={styles.content}>
          <div className={styles.content__title}>
            <p>{job.title}</p>
          </div>
          <div className={styles.content__subtitle}>
            <p>{job.name} • {job.address}</p>
          </div>
          <div className={styles.location}>
            <img src={location} alt="location-icon" />
            <p>{job.location.lat} {job.location.long}</p>
          </div>
        </div>
        <div className={styles.rating}>
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
        </div>
        <div className={styles.posted}>
          <img src={favourite} alt="favourite-icon" />
          <p>Posted {countTimePosted(job.createdAt)} ago</p>
        </div>
      </NavLink>

    {/*////////////////////////MOBILE INTERFACE///////////////////////////// */}

      <NavLink className={styles.mob__list__item} to={`/job/${job.id}`}>
        <div className={styles.mob__image__block}>
          <img src={job.pictures[0]} alt="place" className={styles.place} />
        </div>
        <div className={styles.mob__content__block}>
          <header>
            <div className={styles.mob__rating}>
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
            </div>
            <p className={styles.mob__posted}>Posted {countTimePosted(job.createdAt)} ago</p>
          </header>
          <main>
            <p className={styles.mob__title}>{job.title}</p>
            <p className={styles.mob__subtitle}>{job.name} • {job.address}</p>
            <div className={styles.mob__location}>
              <img src={location} alt="location-icon" />
              <p>{job.location.lat} {job.location.long}</p>
            </div>
          </main>
        </div>
      </NavLink>
    </>
  )
};

export default JobListItem;