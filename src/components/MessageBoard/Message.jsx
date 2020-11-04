import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import { Card, CardContent, Typography } from '@material-ui/core';
import '../../css/Message.css';

const Message = forwardRef(({ message, username }, ref) => {
  Message.propTypes = {
    message: propTypes.string.isRequired,
    username: propTypes.string.isRequired
  };
  const isUser = username === message.username;

  return (
    <div ref={ref} className={`message ${isUser && 'message_user'}`}>
      <Card className={isUser ? 'message_userCard' : 'message_guestCard'}>
        <CardContent>
          <Typography
            color='white'
            variant='h5'
            component='h2'
          >
            {message.username}
            :
            {' '}
            {message.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
