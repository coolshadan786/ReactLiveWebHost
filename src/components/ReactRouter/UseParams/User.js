import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

const User = () => {
  const { fname } = useParams();
  const location = useLocation();
  const history = useHistory();
  console.log(location);
  console.log(history);
  return (
    <>
      <h1>Hello,I am a {fname} Page</h1>
      <p>My Current location is {location.pathname}</p>
      {location.pathname === `/user/Abcas` ? (
        <button onClick={() => history.goBack}>Click Me</button>
      ) : null}
    </>
  );
};

// const User = ({ match }) => {
//   return (
//     <>
//       <h1>Hello,I am a {match.params.name} Page</h1>
//     </>
//   );
// };

export default User;
