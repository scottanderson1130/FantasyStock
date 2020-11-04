import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  FormControl, IconButton, Input
} from '@material-ui/core';
import { Send } from '@material-ui/icons';
import FlipMove from 'react-flip-move';
import Message from '../components/MessageBoard/Message.jsx';
import '../css/MessageBoard.css';
import { selectUser } from '../features/userSlice.js';

function MessageBoard() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { username: 'Chris', text: 'hey hey' },
    { username: 'Scott', text: 'hey guys' },
    { username: user?.username, text: 'what is going on' }
  ]);

  const sendMessage = (e) => {
    e.preventDefault();
    setMessages([...messages, { username: user?.username, text: input }]);
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
            {
              messages.map((message) => (
                <Message username={user?.username} message={message} />
              ))
            }
          </FlipMove>
        </div>
      </div>
      <form className='messageBoard_form'>
        <FormControl className='messageBoard_formControl'>
          <Input className='messageBoard_inputForm' placeholder='Enter a message...' value={input} type='text' onChange={(e) => setInput(e.target.value)} />
          <IconButton className='messageBoard_buttonForm' disabled={!input} variant='contained' color='primary' onClick={sendMessage} type='submit'>
            <Send />
          </IconButton>
        </FormControl>
      </form>
    </div>
  );
}

export default MessageBoard;
