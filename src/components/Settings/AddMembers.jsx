import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Button, Input } from '@material-ui/core';
import { selectLeague } from '../../features/leagueSlice.js';
import '../../css/AddMembers.css';

function AddMembers() {
  const [input, setInput] = useState('');
  const [users, setUsers] = useState([]);
  const leagueID = useSelector(selectLeague);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const addMembers = (e) => {
    e.preventDefault();
    axios.get(`/user/${input}`)
      .then((user) => setUsers([...users, user.data]));
    setInput('');
  };

  const deleteSelection = (id) => {
    const newUsers = users.filter((item) => item.id !== id);
    setUsers(newUsers);
  };

  const addMembersToLeague = () => {
    const userIDs = users.map((user) => user.id);

    axios.post('/league/addUser', { userIDs, leagueID });

    setUsers([]);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 800);
  };

  return (
    <div>
      <h2 className='addMembers_title'>Add Members</h2>
      <form className='addMembers_form'>
        <Input
          variant='outlined'
          type='text'
          value={input}
          onChange={handleChange}
        />
        <Button
          variant='contained'
          color='primary'
          type='submit'
          onClick={addMembers}
          disabled={!input}
        >
          add
        </Button>
      </form>

      <ol className='addMembers_ol'>
        {users.map((user) => (
          <div className='addMembers_newList'>
            <li className='addMember_username' key={user.id}>
              {user.username}
              <p className='addMember_fullName'>{user.full_name}</p>
            </li>
            <Button
              className='addMembers_deleteButton'
              variant='contained'
              color='primary'
              type='button'
              onClick={() => deleteSelection(user.id)}
            >
              delete
            </Button>
          </div>
        ))}
      </ol>
      {
        users.length > 0
        && (
          <div className='addMembers_addMembersButton'>
            <Button
              variant='contained'
              color='primary'
              type='submit'
              onClick={addMembersToLeague}
            >
              Add Members to League
            </Button>
          </div>
        )
      }
      {submitted && <p className='addMembers_saved'>Saved</p>}
    </div>
  );
}

export default AddMembers;
