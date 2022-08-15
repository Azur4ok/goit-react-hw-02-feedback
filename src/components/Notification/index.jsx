import React from 'react';
import PropTypes from 'prop-types';

import styles from './Notification.module.css';

export const Notification = ({ message }) => {
  return <h3 className={styles.message}>{message}</h3>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
