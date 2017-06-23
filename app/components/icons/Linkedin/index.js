import React from 'react';

Linkedin.propTypes = {
  onClick: React.PropTypes.func,
};

function Linkedin({ onClick }) {
  return (
    <svg
      onClick={onClick}
      width="100%"
      height="100%"
      viewBox="0 0 1792 1792"
    >
      <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z" />
    </svg>
  );
}

export default Linkedin;
