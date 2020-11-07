import React, { useState } from 'react';
import axios from 'axios';

function AddMembers() {
  const [input, setInput] = useState('');
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const addMembers = (e) => {
    e.preventDefault();
    axios.get(`/user/${input}`)
      .then((user) => setUsers([...users, user.data]));
    setInput('');
  };

  return (
    <div>
      <h1>Hello Members</h1>
      <form>
        <input type='text' value={input} onChange={handleChange} />
        <button type='submit' onClick={addMembers}>add</button>
      </form>
      {users.map((user) => (
        <ol>
          <li>
            {`${user.username} || ${user.full_name}`}
          </li>
        </ol>
      ))}
    </div>
  );
}

export default AddMembers;
