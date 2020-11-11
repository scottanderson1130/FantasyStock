import { Button, Input, Typography } from '@material-ui/core';
import React from 'react';
import propTypes from 'prop-types';

function CardAddMembers({
  handleChange, addMembers, deleteSelection,
  addMembersToLeague,
  submitted,
  users,
  input
}) {
  CardAddMembers.propTypes = {
    handleChange: propTypes.func.isRequired,
    addMembers: propTypes.func.isRequired,
    deleteSelection: propTypes.func.isRequired,
    addMembersToLeague: propTypes.func.isRequired,
    submitted: propTypes.string.isRequired,
    users: propTypes.string.isRequired,
    input: propTypes.string.isRequired
  };

  return (
    <Typography>
      <p className='addMembers_membersNumber'>
        {`members: ${users.length}`}
      </p>
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
    </Typography>
  );
}

export default CardAddMembers;
