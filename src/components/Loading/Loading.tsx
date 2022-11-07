import React, {FC} from 'react';
import styles from './Loading.module.css';

const Loading: FC = () => {
  return (
    <div className={styles.circle}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
};

export default Loading;