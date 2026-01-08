import React, { useState } from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';
import './SignInPage.scss';

type Props = {
  onSignIn: () => void;
  onNavigate: (to: string) => void;
};

const SignInPage: React.FC<Props> = ({ onSignIn, onNavigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = (e?: React.FormEvent) => {
    e?.preventDefault();
    // lightweight fake signin
    if (email && password) onSignIn();
  };

  return (
    <Box className="signin-page">
      <div className="decor">
        <span className="dot dot-1" />
        <span className="dot dot-2" />
      </div>
      <Box className="signin-card animate-in">
        <Typography variant="h4" className="title">Welcome back</Typography>
        <Typography className="subtitle">Sign in to continue to your dashboard</Typography>
        <form onSubmit={submit} className="form">
          <TextField className="field" value={email} onChange={(e) => setEmail(e.target.value)} label="Email" fullWidth />
          <TextField className="field" value={password} onChange={(e) => setPassword(e.target.value)} label="Password" type="password" fullWidth />
          <Box className="actions">
            <Button type="submit" variant="contained" className="primary">Sign in</Button>
            <Button variant="text" onClick={() => onNavigate('/')}>Back</Button>
          </Box>
        </form>
        <Box className="foot">
          <Button variant="text" onClick={() => onNavigate('/request-demo')}>Request a demo</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SignInPage;
