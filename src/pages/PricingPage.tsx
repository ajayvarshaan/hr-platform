import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import './PricingPage.scss';
import TransferModal from '../components/TransferModal';

type Props = { onNavigate: (to: string) => void };

const PricingPage: React.FC<Props> = ({ onNavigate }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState<() => void>(() => () => {});
  const [modalTitle, setModalTitle] = useState<string>('');
  const [modalMessage, setModalMessage] = useState<React.ReactNode>('');

  const openConfirm = (action: () => void, title?: string, message?: React.ReactNode) => {
    setModalAction(() => action);
    setModalTitle(title || 'Confirm');
    setModalMessage(message || 'Are you sure you want to continue?');
    setModalOpen(true);
  };

  const handleConfirm = () => {
    setModalOpen(false);
    modalAction();
  };

  return (
    <Box className="pricing-page">
      <Box className="pricing-hero">
        <Typography variant="h2" className="title">Simple transparent pricing</Typography>
        <Typography className="subtitle">Choose the plan that fits your team and scale easily.</Typography>
        <Box className="hero-actions">
          <Button className="primary-cta">Start Free Trial</Button>
          <Button className="secondary-cta" onClick={() => onNavigate('/')}>Back to Home</Button>
        </Box>
      </Box>

      <Box className="tiers">
          <div className="tier" style={{ animationDelay: '0.12s' }}>
          <h3>Starter</h3>
          <div className="price">Free</div>
          <p>For small teams getting started.</p>
          <ul>
            <li>Basic HR tools</li>
            <li>Email support</li>
            <li>Up to 10 users</li>
          </ul>
          <Button className="tier-cta" onClick={() => openConfirm(() => onNavigate('/request-demo'), 'Choose Starter', 'You will be directed to start signup for the Starter plan. Continue?')}>Choose Starter</Button>
        </div>
        <div className="tier popular" style={{ animationDelay: '0.26s' }}>
          <h3>Business</h3>
          <div className="price">$8 / user</div>
          <p>Best for growing companies.</p>
          <ul>
            <li>All Starter features</li>
            <li>Payroll & benefits</li>
            <li>Priority support</li>
          </ul>
          <Button className="tier-cta" onClick={() => openConfirm(() => onNavigate('/request-demo'), 'Start Business', 'Proceed to start Business plan and checkout?')}>Start Business</Button>
        </div>
        <div className="tier" style={{ animationDelay: '0.40s' }}>
          <h3>Enterprise</h3>
          <div className="price">Contact us</div>
          <p>Custom solutions and SLAs.</p>
          <ul>
            <li>Dedicated account manager</li>
            <li>Advanced security</li>
            <li>Custom integrations</li>
          </ul>
          <Button className="tier-cta" onClick={() => openConfirm(() => onNavigate('/resources'), 'Contact Sales', 'You will be redirected to contact sales. Continue?')}>Contact Sales</Button>
        </div>
      </Box>
      <TransferModal
        open={modalOpen}
        title={modalTitle}
        message={modalMessage}
        onClose={() => setModalOpen(false)}
        onConfirm={handleConfirm}
        confirmLabel="Continue"
        cancelLabel="Cancel"
      />
    </Box>
  );
};

export default PricingPage;
