// This hook gives you two outputs - Todays date and the date 7 days ago
import { useState, useEffect } from 'react';

function useDateRange() {
  const [today, setToday] = useState('');
  const [pastDate, setPastDate] = useState('');

  useEffect(() => {
    const formatDate = (date) => {
      let year = date.getFullYear();
      let month = (date.getMonth() + 1).toString().padStart(2, '0');
      let day = date.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    };

    // Get today's date
    let todayDate = new Date();
    setToday(formatDate(todayDate));

    // Get the date 7 days ago
    let pastDate = new Date();
    pastDate.setDate(todayDate.getDate() - 7);
    setPastDate(formatDate(pastDate));
  }, []);

  return { today, pastDate };
}

export default useDateRange;
