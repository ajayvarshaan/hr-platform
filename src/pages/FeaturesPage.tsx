import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import './FeaturesPage.scss';
import TransferModal from '../components/TransferModal';

type Props = { onNavigate: (to: string) => void };

const FeaturesPage: React.FC<Props> = ({ onNavigate }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState<() => void>(() => () => {});
  const [modalTitle, setModalTitle] = useState<string>('');
  const [modalMessage, setModalMessage] = useState<React.ReactNode>('');

  const openConfirm = (action: () => void, title?: string, message?: React.ReactNode) => {
    setModalAction(() => action);
    setModalTitle(title || 'Confirm');
    setModalMessage(message || 'Proceed?');
    setModalOpen(true);
  };

  const handleConfirm = () => { setModalOpen(false); modalAction(); };

  return (
    <Box className="features-page">
      <Box className="features-hero">
        <Typography variant="h2" className="title">Features Built for People</Typography>
        <Typography className="subtitle">Tools to hire, onboard and manage teams with clarity and speed.</Typography>
        <Box className="hero-actions">
          <Button className="primary-cta" onClick={() => openConfirm(() => onNavigate('/request-demo'), 'Start Free Trial', 'You will be redirected to start a free trial. Continue?')}>Try it free</Button>
          <Button className="secondary-cta" onClick={() => onNavigate('/')}>Back to Home</Button>
        </Box>
      </Box>

      <Box className="features-grid">
        <article className="feature-card">
          <h3>Talent Acquisition</h3>
          <p>Job board, applicant tracking, interview workflows, and collaborative scorecards.</p>
          <ul>
            <li>Custom hiring stages</li>
            <li>Interview scorecards</li>
            <li>Offer templates</li>
          </ul>
          <Button className="small-cta" onClick={() => openConfirm(() => onNavigate('/resources'), 'Learn more', 'Open integrations and docs?')}>Learn more</Button>
        </article>
        <article className="feature-card">
          <h3>Onboarding</h3>
          <p>Automated checklists, documents and welcome flows that reduce time-to-productivity.</p>
          <ul>
            <li>Task assignments</li>
            <li>Custom welcome flows</li>
            <li>Document signing</li>
          </ul>
        </article>
        <article className="feature-card">
          <h3>People Analytics</h3>
          <p>Dashboards and insights to measure retention, hiring velocity, and performance.</p>
          <ul>
            <li>Retention reports</li>
            <li>Hiring funnel metrics</li>
            <li>Custom dashboards</li>
          </ul>
        </article>
      </Box>

      <Box className="extras">
        <div className="extra">Custom Workflows</div>
        <div className="extra">Approvals & Permissions</div>
        <div className="extra">Integrations</div>
        <div className="why">
          <h4>Why customers choose us</h4>
          <ul>
            <li>Unified platform across HR, payroll, and recruiting</li>
            <li>Fast time-to-value with prebuilt templates</li>
            <li>Enterprise-grade security and support</li>
          </ul>
        </div>
      </Box>
      <TransferModal open={modalOpen} title={modalTitle} message={modalMessage} onClose={() => setModalOpen(false)} onConfirm={handleConfirm} confirmLabel="Continue" />
    </Box>
  );
};

export default FeaturesPage;
