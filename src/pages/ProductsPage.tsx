import React, { useState } from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';
import './ProductsPage.scss';
import TransferModal from '../components/TransferModal';

type Props = {
  onNavigate: (to: string) => void;
};

const ProductsPage: React.FC<Props> = ({ onNavigate }) => {
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
  const [getStartedOpen, setGetStartedOpen] = useState(false);
  const [getTrialOpen, setGetTrialOpen] = useState(false);
  const [trialName, setTrialName] = useState('');
  const [trialEmail, setTrialEmail] = useState('');
  const [trialCompany, setTrialCompany] = useState('');
  const [trialPassword, setTrialPassword] = useState('');
  const [trialSubmitting, setTrialSubmitting] = useState(false);
  const [trialSuccess, setTrialSuccess] = useState(false);

  const handleGetStarted = () => {
    // open a small interactive pop-in with options
    setGetStartedOpen(true);
  };

  return (
    <Box className="products-page">
      <Box className="products-hero">
        <Typography variant="h2" className="title">Our Products</Typography>
        <Typography className="subtitle">A full suite of HR tools to hire, manage and grow your people.</Typography>
        <Box className="hero-actions">
          <Button className="primary-cta" onClick={handleGetStarted}>Get Started</Button>
          <Button className="secondary-cta" onClick={() => onNavigate('/')}>Back to Home</Button>
        </Box>
      </Box>

      <Box className="highlights">
        <div className="highlight">Employee lifecycle automation</div>
        <div className="highlight">Instant payroll reconciliation</div>
        <div className="highlight">ATS & candidate pipelines</div>
      </Box>

      <Box className="products-details">
        <section className="detail-card">
          <h3>Core HR</h3>
          <p>Maintain employee records, org charts, time off, approvals and compliance in one place.</p>
          <ul>
            <li>Employee profiles & documents</li>
            <li>Custom workflows & approvals</li>
            <li>Time off and attendance</li>
          </ul>
          <div className="card-cta">
            <Button className="small-cta" onClick={() => openConfirm(() => onNavigate('/features'))}>Explore Core HR</Button>
            <div className="stat">Used by <strong>3,200+</strong> companies</div>
          </div>
        </section>

        <section className="detail-card">
          <h3>Payroll</h3>
          <p>Automated payroll that scales with your business and keeps you compliant.</p>
          <ul>
            <li>Multi-country payroll</li>
            <li>Direct deposit & tax filings</li>
            <li>On-demand pay options</li>
          </ul>
        </section>

        <section className="detail-card">
          <h3>People Ops</h3>
          <p>Performance reviews, goals, and engagement insights to retain your best people.</p>
          <ul>
            <li>Performance cycles</li>
            <li>1:1 templates & goals</li>
            <li>Engagement pulse surveys</li>
          </ul>
          <div className="card-cta">
            <Button className="small-cta" onClick={() => openConfirm(() => onNavigate('/features'), 'People Ops', 'Open People Ops overview?')}>See People Ops</Button>
          </div>
        </section>

        <section className="detail-card">
          <h3>Recruiting</h3>
          <p>Attract, track, and hire top talent with a streamlined candidate experience.</p>
          <ul>
            <li>Job postings & ATS</li>
            <li>Interview scheduling</li>
            <li>Analytics & scorecards</li>
          </ul>
        </section>

        <section className="more-resources">
          <h4>More</h4>
          <div className="resource-grid">
            <div className="resource">Onboarding</div>
            <div className="resource">Performance</div>
            <div className="resource">Analytics</div>
            <div className="resource">Integrations</div>
          </div>
        </section>
      </Box>

      <Box className="trusted">
        <h4>Trusted by</h4>
        <div className="logos">
          <div className="logo">Acme</div>
          <div className="logo">Atlas</div>
          <div className="logo">Bright</div>
          <div className="logo">Orbit</div>
        </div>
      </Box>
      <TransferModal open={modalOpen} title={modalTitle} message={modalMessage} onClose={() => setModalOpen(false)} onConfirm={handleConfirm} confirmLabel="Continue" />
      {getStartedOpen && (
        <div className="get-started-pop" onClick={() => setGetStartedOpen(false)}>
          <div className="pop-card" onClick={(e) => e.stopPropagation()}>
            <h3>Get started quickly</h3>
            <p>Choose one of the quick-start paths — pick a trial, request a guided demo, or explore docs.</p>
            <div className="pop-actions">
              <Button className="ghost" onClick={() => { setGetStartedOpen(false); setGetTrialOpen(true); }}>Start free trial</Button>
              <Button className="primary" onClick={() => { setGetStartedOpen(false); onNavigate('/request-demo'); }}>Request demo</Button>
              <Button className="muted" onClick={() => { setGetStartedOpen(false); openConfirm(() => window.open('https://example.com/docs', '_blank'), 'Open docs', 'Open documentation in a new tab?'); }}>Browse docs</Button>
            </div>
          </div>
        </div>
      )}

      {getTrialOpen && (
        <div className="trial-pop" onClick={() => setGetTrialOpen(false)}>
          <div className="trial-card" onClick={(e) => e.stopPropagation()}>
            {!trialSuccess ? (
              <>
                <h3>Create your free trial account</h3>
                <p>Start a 14-day free trial — no credit card required.</p>
                <form className="trial-form" onSubmit={(e) => { e.preventDefault();
                  if (!trialName || !trialEmail) { openConfirm(() => {}, 'Missing information', 'Please provide name and email to continue.'); return; }
                  setTrialSubmitting(true);
                  setTimeout(() => { setTrialSubmitting(false); setTrialSuccess(true); }, 900);
                }}>
                  <TextField className="trial-field" label="Full name" value={trialName} onChange={(e) => setTrialName(e.target.value)} fullWidth />
                  <TextField className="trial-field" label="Work email" value={trialEmail} onChange={(e) => setTrialEmail(e.target.value)} fullWidth />
                  <TextField className="trial-field" label="Company (optional)" value={trialCompany} onChange={(e) => setTrialCompany(e.target.value)} fullWidth />
                  <TextField className="trial-field" label="Create password" value={trialPassword} onChange={(e) => setTrialPassword(e.target.value)} type="password" fullWidth />
                  <div className="trial-actions">
                    <Button variant="text" onClick={() => setGetTrialOpen(false)}>Cancel</Button>
                    <Button type="submit" className="primary" disabled={trialSubmitting}>{trialSubmitting ? 'Creating...' : 'Create free account'}</Button>
                  </div>
                </form>
              </>
            ) : (
              <div className="trial-success">
                <h3>Welcome aboard!</h3>
                <p>Your free trial has been created. Check <strong>{trialEmail}</strong> for next steps.</p>
                <div className="trial-actions"><Button className="primary" onClick={() => { setGetTrialOpen(false); onNavigate('/signin'); }}>Go to sign in</Button></div>
              </div>
            )}
          </div>
        </div>
      )}
    </Box>
  );
};

export default ProductsPage;
