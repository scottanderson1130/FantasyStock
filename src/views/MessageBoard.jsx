import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Button, FormControl, Input, InputLabel
} from '@material-ui/core';
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
      <h1>
        Hello,

        {user?.username}
      </h1>

      <FlipMove>
        {
          messages.map((message) => (
            <Message username={user?.username} message={message} />
          ))
        }
      </FlipMove>
      <form>
        <FormControl>
          <InputLabel>Enter a Message</InputLabel>
          <Input value={input} type='text' onChange={(e) => setInput(e.target.value)} />
          <Button disabled={!input} variant='contained' color='primary' onClick={sendMessage} type='submit'>Send Message</Button>
        </FormControl>
      </form>

    </div>
  );
}

export default MessageBoard;
