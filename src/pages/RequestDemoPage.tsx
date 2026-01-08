import React, { useState } from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';
import './RequestDemoPage.scss';
import TransferModal from '../components/TransferModal';

type Props = {
  onNavigate: (to: string) => void;
};

const RequestDemoPage: React.FC<Props> = ({ onNavigate }) => {
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const submit = () => {
    setModalOpen(true);
  };

  return (
    <Box className="request-page">
      <div className="decor">
        <span className="blob blob-1" />
        <span className="blob blob-2" />
      </div>
      <Box className="request-card animate-in">
        <Typography variant="h4" className="title">Request a Demo</Typography>
        <Typography className="subtitle">Tell us a little about your company</Typography>
        <TextField className="field" label="Company" value={company} onChange={(e) => setCompany(e.target.value)} fullWidth />
        <TextField className="field" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth />
        <Box className="actions">
          <Button className="primary" variant="contained" onClick={submit}>Request Demo</Button>
          <Button variant="text" onClick={() => onNavigate('/')}>Cancel</Button>
        </Box>
      </Box>
      <TransferModal
        open={modalOpen}
        title="Demo requested"
        message={<>
          <p>Thanks — your demo request has been received.</p>
          <p>We will contact you at <strong>{email || 'your email'}</strong> shortly to schedule a demo.</p>
        </>}
        onClose={() => setModalOpen(false)}
        onConfirm={() => setModalOpen(false)}
        confirmLabel="Close"
      />
    </Box>
  );
};

export default RequestDemoPage;
