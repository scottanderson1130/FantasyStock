import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import {
  FormControl, IconButton, Input
} from '@material-ui/core';
import { Send } from '@material-ui/icons';
import FlipMove from 'react-flip-move';
import Message from '../components/MessageBoard/Message.jsx';
import '../css/MessageBoard.css';
import { selectUser } from '../features/userSlice.js';
import { selectLeague } from '../features/leagueSlice.js';

function MessageBoard() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState('');
  const league = useSelector(selectLeague);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get(`/messages/${league}`)
      .then((groupMessages) => setMessages(groupMessages.data));
  }, [league]);

  const sendMessage = (e) => {
    e.preventDefault();
    axios.post('/messages', {
      id_league: league,
      words: input,
      id_user: user.id,
      username: user.username
    }).then((updateMessage) => setMessages([...messages, updateMessage.data]))
      .then(() => axios.get(`/messages/${league}`)
        .then((groupMessages) => setMessages(groupMessages.data)));
    setInput('');
  };

  return (
    <div className='messageBoard'>
      <div>
        <h1>
          {`Hello, ${user?.username}`}
        </h1>
      </div>
      <div className='messageBoard_messagesLayer'>
        <div className='container'>
          <FlipMove>
            {messages
              && messages.map((message) => (
                <Message username={user?.username} message={message} />
              ))}
          </FlipMove>
        </div>
      </div>
      <form className='messageBoard_form'>
        <FormControl className='messageBoard_formControl'>
          <Input
            className='messageBoard_inputForm'
            placeholder='Enter a message...'
            value={input}
            type='text'
            onChange={(e) => setInput(e.target.value)}
          />
          <IconButton
            className='messageBoard_buttonForm'
            disabled={!input}
            variant='contained'
            color='primary'
            onClick={sendMessage}
            type='submit'
          >
            <Send />
          </IconButton>
        </FormControl>
      </form>
    </div>
  );
}

export default MessageBoard;
