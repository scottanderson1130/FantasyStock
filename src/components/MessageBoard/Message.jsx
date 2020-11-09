import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import { Card, CardContent, Typography } from '@material-ui/core';
import '../../css/Message.css';

const Message = forwardRef(({ message, username }, ref) => {
  Message.propTypes = {
    message: propTypes.string.isRequired,
    username: propTypes.string.isRequired
  };
  const isUser = username === message?.username;

  const date = new Date(message.createdAt).toLocaleTimeString('en-US');

  return (
    <div ref={ref} className={`message ${isUser && 'message_user'}`}>
      <Card className={isUser ? 'message_userCard' : 'message_guestCard'}>
        <CardContent className='message_cardContent'>
          <Typography
            color='white'
            variant='p'
            component='p'
          >
            {!isUser && `${message.username || 'Unknown user'}: `}
            {' '}
            {message.words}
          </Typography>
        </CardContent>
      </Card>
      <p className='message_date'>{date}</p>
    </div>
  );
});

export default Message;
