import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMessage } from '../redux/greetings/greetingsSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const message = useSelector((store) => store.greetings.message);
  const error = useSelector((state) => state.greetings.error);

  useEffect(() => {
    dispatch(getMessage());
  }, [dispatch]);

  return (
    <div>
      {error ? (
        <div>
          Error:
          {error}
        </div>
      ) : (
        <h1>{message}</h1>
      )}
    </div>
  );
};

export default Greeting;
