import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllItems } from '../redux/items/items';
import DeleteListItem from './DeleteListItem';

const DeleteListItems = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllItems());
  }, [dispatch]);

  const state = useSelector((state) => state.items.items);

  return (
    <div className="w-100 container mt-5 pt-5 mt-lg-2">
      <h1 className="text-center mb-2 font">List of Offices</h1>
      <table className="table table-striped mt-2">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Location</th>
            <th scope="col">Description</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {state
            && state.map((item) => (
              <tr key={item.id}>
                <DeleteListItem
                  id={item.id}
                  name={item.name}
                  description={item.description}
                  location={item.location}
                />
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeleteListItems;
