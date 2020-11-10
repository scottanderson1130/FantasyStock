import React, { useState, useEffect } from 'react';
import axios from 'axios';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Input,
  Typography
} from '@material-ui/core';
import { selectLeague } from '../../features/leagueSlice.js';
import '../../css/AddMembers.css';

function AddMembers({ leagueUsers }) {
  AddMembers.propTypes = {
    leagueUsers: propTypes.arrayOf(propTypes.shape({
      color: propTypes.string.isRequired,
      fontSize: propTypes.number.isRequired
    })).isRequired
  };

  const [input, setInput] = useState('');
  const [users, setUsers] = useState(leagueUsers);
  const leagueID = useSelector(selectLeague);
  const [submitted, setSubmitted] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setUsers(leagueUsers);
  }, [leagueUsers]);

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
    axios.put('/league/users', { userIDs, leagueID });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 1000);
  };

  const handleAccordion = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        square
        expanded={expanded === 'leagueSettings'}
        onChange={handleAccordion('leagueSettings')}
      >
        <AccordionSummary
          aria-controls='panel1d-content'
          id='panel1d-header'
        >
          <Typography className='leagueInfo_members'>
            Add Members
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
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
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AddMembers;
