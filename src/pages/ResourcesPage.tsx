import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import './ResourcesPage.scss';
import TransferModal from '../components/TransferModal';

type Props = { onNavigate: (to: string) => void };

const ResourcesPage: React.FC<Props> = ({ onNavigate }) => {
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

  const handleConfirm = () => {
    setModalOpen(false);
    modalAction();
  };
  const [activeDetail, setActiveDetail] = useState<string | null>(null);

  return (
    <Box className="resources-page">
      <Box className="resources-hero">
        <Typography variant="h2" className="title">Resources & Guides</Typography>
        <Typography className="subtitle">Knowledge base, guides, and integrations to get you started faster.</Typography>
        <Box className="hero-actions">
          <Button className="primary-cta" onClick={() => openConfirm(() => window.open('https://example.com/docs', '_blank'), 'Open docs', <>
            <p>You will open documentation in a new tab.</p>
            <p>Topics included: Quickstart, Integrations, API reference, Security.</p>
          </>)}>Browse docs</Button>
          <Button className="secondary-cta" onClick={() => onNavigate('/')}>Back to Home</Button>
        </Box>
      </Box>
      <Box className="resources-search">
        <input className="search" placeholder="Search docs, guides, and integrations" />
      </Box>

      <Box className="resources-list">
          <article className="resource-card">
            <h3>Getting started</h3>
            <p>Step-by-step onboarding guides and checklists to launch in days.</p>
            <Button className="small-cta" onClick={() => setActiveDetail('getting-started')}>Read guide</Button>
          </article>
        <article className="resource-card">
          <h3>Integrations</h3>
          <p>Connect Slack, G Suite, payroll providers and more with few clicks.</p>
            <Button className="small-cta" onClick={() => setActiveDetail('integrations')}>See integrations</Button>
        </article>
        <article className="resource-card">
          <h3>Security</h3>
          <p>Roles, permissions, and compliance best practices for teams of all sizes.</p>
            <Button className="small-cta" onClick={() => setActiveDetail('security')}>View security</Button>
        </article>
      </Box>
        <TransferModal open={modalOpen} title={modalTitle} message={modalMessage} onClose={() => setModalOpen(false)} onConfirm={handleConfirm} confirmLabel="Continue" />

        {activeDetail && (
          <div className="detail-pop" onClick={() => setActiveDetail(null)}>
            <div className="detail-card" onClick={(e) => e.stopPropagation()}>
              {activeDetail === 'getting-started' && (
                <>
                  <h3>Getting started</h3>
                  <p>Follow our quickstart checklist: create org, invite team, configure payroll, import employees. Estimated setup: 2–3 days.</p>
                  <ul>
                    <li>Step 1: Create organization</li>
                    <li>Step 2: Invite admins and HR</li>
                    <li>Step 3: Configure payroll & benefits</li>
                  </ul>
                  <div className="detail-actions"><Button onClick={() => { setActiveDetail(null); openConfirm(() => window.open('https://example.com/getting-started', '_blank'), 'Open guide', 'Open Getting Started guide in a new tab?'); }} className="primary">Open guide</Button></div>
                </>
              )}
              {activeDetail === 'integrations' && (
                <>
                  <h3>Integrations</h3>
                  <p>Connect commonly used apps in minutes. Pre-built connectors for Slack, Google Workspace, ADP, and many payroll providers.</p>
                  <ul>
                    <li>Slack: notifications & approvals</li>
                    <li>Google Workspace: single sign-on</li>
                    <li>Payroll providers: export & sync</li>
                  </ul>
                  <div className="detail-actions"><Button onClick={() => { setActiveDetail(null); onNavigate('/features'); }} className="primary">Explore integrations</Button></div>
                </>
              )}
              {activeDetail === 'security' && (
                <>
                  <h3>Security</h3>
                  <p>Security is our priority. We offer role-based access, audit logs, and SOC2-compliant processes.</p>
                  <ul>
                    <li>Role-based access controls</li>
                    <li>Two-factor authentication</li>
                    <li>Enterprise audit logs</li>
                  </ul>
                  <div className="detail-actions"><Button onClick={() => { setActiveDetail(null); openConfirm(() => window.open('https://example.com/security-whitepaper.pdf', '_blank'), 'View security', 'Download security whitepaper?'); }} className="primary">View whitepaper</Button></div>
                </>
              )}
            </div>
          </div>
        )}
    </Box>
  );
};

export default ResourcesPage;
