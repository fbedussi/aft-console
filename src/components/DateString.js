import React from 'react';

const DateString = ({milliseconds}) => {
  var date = new Date(Number(milliseconds));

  return <span>{date.toLocaleString()}</span>
}

export default DateString;
