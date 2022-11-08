import React, { FC } from 'react';
import styles from './JobTitle.module.css';
import favourite from '../../static/favourite.png';
import share from '../../static/share.png';
import location from '../../static/location.png';
import { useNavigate, useParams } from 'react-router';
import { useAppSelector, useAppDispatch } from '../../hook';
import { fetchJoblist } from '../../store/slices/jobSlice';
import Loading from '../../components/Loading/Loading';



const JobTitle: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const jobs = useAppSelector(state => state.jobList.list);
  const loading = useAppSelector(state => state.jobList.loading);
  const currentJob = jobs.find(item => item.id === id);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (loading) {
      dispatch(fetchJoblist());
    }  
  }, [dispatch, loading]);

  const countTimePosted: any = (dateOfPost: Date) => {
    let currentDate: Date = new Date();
    let days = (Date.parse(currentDate.toString()) - Date.parse(dateOfPost.toString())) / 86400000;
    if (days > 365) {
      return `${Math.round(days / 365)} years`;
    } else {
      return `${Math.round(days)} days`;
    }
  };

  const validateDescription: any = (desc: string, searchingValue: string) => {
    if (searchingValue === 'start') {
      return desc.slice(0, desc.indexOf('Responsopilities:'));
    } else if (searchingValue === 'respons') {
      return desc.slice(desc.indexOf('Responsopilities:') + 'Responsopilities:'.length, desc.indexOf('Compensation & Benefits:'));
    } else if (searchingValue === 'compens') {
      return desc.slice(desc.lastIndexOf('Compensation & Benefits:') + 'Compensation & Benefits:'.length, desc.length - 3).split('.');
    }
  };


  if (!loading) {
    return (
      <>
        {currentJob &&
        <>
          <div className={styles.job__details}>
            <div className={styles.job__details__info}>
              <header>
                <p className={styles.title}>Job Details</p>
                <div className={styles.actions}>
                  <button className={styles.actions__item}>
                    <img src={favourite} alt="favourite" />
                    <p>Save to my list</p>
                  </button>
                  <button className={styles.actions__item}>
                    <img src={share} alt="share" />
                    <p>Share</p>
                  </button>
                </div>
              </header>
              <button className={styles.apply__btn}>Apply now</button>
              <main>
                <div className={styles.title__block}>
                  <p className={styles.title}>{currentJob?.title}</p>
                  <div className={styles.salary}>
                    <p className={styles.number}>€ {currentJob?.salary}</p>
                    <p className={styles.units}>Brutto, per year</p>
                  </div>
                </div>
                <p className={styles.posted}>Posted {countTimePosted(currentJob?.createdAt)} ago</p>
                <div className={styles.description}>
                  <p className={styles.text}>{validateDescription(currentJob?.description, 'start')}</p>
                  <p className={styles.title}>Responsopilities</p>
                  <p className={styles.text}>{validateDescription(currentJob?.description, 'respons')}</p>
                  <p className={styles.title}>Compensation & Benefits:</p>
                  <ul className={styles.text}>
                    {validateDescription(currentJob?.description, 'compens').map((item: string, index: number) => <li key={index}>{item}</li>)}
                  </ul>
                </div>
              </main>
              <button className={styles.apply__btn}>Apply now</button>
              <div className={styles.more__info}>
                <header>Additional info</header>
                <p>Employment type</p>
                <div className={styles.wrapper__employ}>
                  {currentJob?.employment_type.map((elem, index) => <p className={styles.item} key={index}>{elem}</p>)}
                </div>
                <p>Benefits</p>
                <div className={styles.wrapper__benefit}>
                  {currentJob?.benefits.map((elem, index) => <p className={styles.item} key={index}>{elem}</p>)}
                </div>
              </div>
              <div className={styles.more__info}>
                <header>Attached images</header>
                <div className={styles.image__wrapper}>
                  {currentJob?.pictures.map((elem, index) => <img src={elem} alt="place" key={index} />)}
                </div>
              </div>
              <button className={styles.back} onClick={() => navigate('/')}>RETURN TO JOB BOARD</button>
            </div>

            <div className={styles.job__details__map}>
              <div className={styles.top}>
                <p className={styles.name}>Department name</p>
                <p className={styles.name}>{currentJob.name}</p>
                <p className={styles.address}>{currentJob.address}</p>
                <p>{currentJob.phone}</p>
                <p>{currentJob.email}</p>
              </div>
              <div className={styles.bottom}></div>
            </div> 
          </div>

      {/*////////////////////////MOBILE INTERFACE///////////////////////////// */}

          <div className={styles.mob__job__details}>
            <header>Job Details</header>
            <div className={styles.actions}>
              <button className={styles.actions__item}>
                <img src={favourite} alt="favourite" />
                <p>Save to my list</p>
              </button>
              <button className={styles.actions__item}>
                <img src={share} alt="share" />
                <p>Share</p>
              </button>
            </div>
            <p className={styles.title}>{currentJob?.title}</p>
            <div className={styles.salary__block}>
              <p className={styles.posted}>Posted {countTimePosted(currentJob?.createdAt)} ago</p>
              <div className={styles.salary}>
                <p>Brutto, per year</p>
                <p>€ {currentJob?.salary}</p>
              </div>
            </div>
            <p className={styles.description}>{validateDescription(currentJob?.description, 'start')}</p>
            <p className={styles.suptitle}>Responsopilities</p>
            <p className={styles.text}>{validateDescription(currentJob?.description, 'respons')}</p>
            <p className={styles.suptitle}>Compensation & Benefits:</p>
            <ul className={styles.text}>
              {validateDescription(currentJob?.description, 'compens').map((item: string, index: number) => <li key={index}>{item}</li>)}
            </ul>
            <button className={styles.apply__btn}>Apply now</button>
            <div className={styles.more__info}>
              <header>Attached images</header>
              <div className={styles.image__wrapper}>
                {currentJob?.pictures.map((elem, index) => <img src={elem} alt="place" key={index} />)}
              </div>
            </div>
            <div className={styles.more__info}>
              <header>Additional info</header>
              <p>Employment type</p>
              <div className={styles.wrapper__employ}>
                {currentJob?.employment_type.map((elem, index) => <p className={styles.item} key={index}>{elem}</p>)}
              </div>
              <p>Benefits</p>
              <div className={styles.wrapper__benefit}>
                {currentJob?.benefits.map((elem, index) => <p className={styles.item} key={index}>{elem}</p>)}
              </div>
            </div>
            <div className={styles.more__info}>
              <header>Contacts</header>
            </div>
            <div className={styles.job__details__map}>
                <div className={styles.top}>
                  <p className={styles.name}>Department name</p>
                  <p className={styles.name}>{currentJob.name}</p>
                  <p className={styles.address}><img src={location} alt="location" />{currentJob.address}</p>
                  <p>{currentJob.phone}</p>
                  <p>{currentJob.email}</p>
                </div>
                <div className={styles.bottom}></div>
              </div>
          </div>
          </>
        }
      </>
    )
  } else {
    return (
      <Loading />
    )
  }

};

export default JobTitle;