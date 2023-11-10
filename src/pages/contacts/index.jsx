import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import Navigation from '@/components/dumb/Navigation/Navigation';
import defaultPadding from '@/styles/defaultPadding';
import pageInfo from './contacts.json';

function Contacts() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('');
  const [details, setDetails] = useState('');

  return (
    <Box px={defaultPadding} py='3rem' backgroundColor='white'>
      <form
        onSubmit={() =>
          alert(
            `${pageInfo.orderText}: \n${pageInfo.nameField}: ${name} \n${pageInfo.emailField}: ${email} \n${pageInfo.topicField}: ${topic} \n${pageInfo.detailsField}: ${details}`,
          )
        }
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: '1rem',
          }}
        >
          <Box
            width={{ xs: '100%', sm: '70%', md: '25rem' }}
            height='auto'
            sx={{ display: 'flex', flexDirection: 'column', rowGap: '1rem' }}
          >
            <Box>
              <Typography
                sx={{ color: 'black', fontSize: '1.8rem', fontWeight: '600' }}
              >
                {pageInfo.pageTitle}
              </Typography>
              <Typography color='black'>{pageInfo.pageDescription}</Typography>
            </Box>
            <TextField
              label={pageInfo.nameField}
              variant='outlined'
              fullWidth
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label={pageInfo.emailField}
              variant='outlined'
              fullWidth
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label={pageInfo.topicField}
              variant='outlined'
              fullWidth
              onChange={(e) => setTopic(e.target.value)}
            />
          </Box>
          <TextField
            label={pageInfo.detailsField}
            variant='outlined'
            multiline
            width='10rem'
            minRows={10}
            onChange={(e) => setDetails(e.target.value)}
          />
          <Button
            variant='contained'
            size='large'
            width='100%'
            type='submit'
            sx={{
              backgroundColor: '#37b34a',
              fontWeight: '600',
              '&:hover': {
                backgroundColor: 'black',
              },
            }}
          >
            SEND
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default Navigation(Contacts);
