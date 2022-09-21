import React, { useState } from 'react';
import UserList from './Components/UserList';
import UserForm from './Components/UserForm';
function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (Name, Age) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: Name, age: Age, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <UserForm onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;