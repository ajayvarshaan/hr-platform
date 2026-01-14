import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import './ResourcesPage.scss';
import TransferModal from '../components/TransferModal';

type Props = { onNavigate: (to: string) => void };

const ResourcesPage: React.FC<Props> = ({ onNavigate }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeDetail, setActiveDetail] = useState<string | null>(null);

  return (
    <Box className="resources-page">
      <Box className="resources-hero">
        <Typography variant="h2" className="title">Resources & Guides</Typography>
        <Typography className="subtitle">Knowledge base, guides, and integrations to get you started faster.</Typography>
        <Box className="hero-actions">
          <Button className="primary-cta" onClick={() => setActiveDetail('docs')}>Browse docs</Button>
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
        <TransferModal open={modalOpen} title="" message="" onClose={() => setModalOpen(false)} onConfirm={() => setModalOpen(false)} confirmLabel="Continue" />

        {activeDetail && (
          <div className="detail-pop" onClick={() => setActiveDetail(null)}>
            <div className="detail-card" onClick={(e) => e.stopPropagation()}>
              {activeDetail === 'docs' && (
                <>
                  <h3>Documentation</h3>
                  <p>Comprehensive documentation covering all aspects of our HR platform.</p>
                  <ul>
                    <li><strong>Quickstart:</strong> Get up and running in minutes</li>
                    <li><strong>Integrations:</strong> Connect with your favorite tools</li>
                    <li><strong>API Reference:</strong> Build custom solutions</li>
                    <li><strong>Security:</strong> Enterprise-grade security features</li>
                  </ul>
                  <div className="detail-actions"><Button onClick={() => setActiveDetail(null)} className="primary">Close</Button></div>
                </>
              )}
              {activeDetail === 'getting-started' && (
                <>
                  <h3>Getting started</h3>
                  <p>Follow our quickstart checklist: create org, invite team, configure payroll, import employees. Estimated setup: 2–3 days.</p>
                  <ul>
                    <li>Step 1: Create organization</li>
                    <li>Step 2: Invite admins and HR</li>
                    <li>Step 3: Configure payroll & benefits</li>
                    <li>Step 4: Import and manage employees</li>
                  </ul>
                  <div className="detail-actions"><Button onClick={() => setActiveDetail(null)} className="primary">Back to Resources</Button></div>
                </>
              )}
              {activeDetail === 'integrations' && (
                <>
                  <h3>Integrations</h3>
                  <p>Connect commonly used apps in minutes. Pre-built connectors for Slack, Google Workspace, ADP, and many payroll providers.</p>
                  <ul>
                    <li><strong>Slack:</strong> Notifications & approvals</li>
                    <li><strong>Google Workspace:</strong> Single sign-on</li>
                    <li><strong>Payroll providers:</strong> Export & sync data</li>
                    <li><strong>Custom integrations:</strong> Use our API</li>
                  </ul>
                  <div className="detail-actions"><Button onClick={() => { setActiveDetail(null); onNavigate('/features'); }} className="primary">Explore Features</Button></div>
                </>
              )}
              {activeDetail === 'security' && (
                <>
                  <h3>Security</h3>
                  <p>Security is our priority. We offer role-based access, audit logs, and SOC2-compliant processes.</p>
                  <ul>
                    <li>Role-based access controls (RBAC)</li>
                    <li>Two-factor authentication (2FA)</li>
                    <li>Enterprise audit logs & tracking</li>
                    <li>SOC2 & ISO 27001 compliance</li>
                    <li>Encryption at rest and in transit</li>
                  </ul>
                  <div className="detail-actions"><Button onClick={() => setActiveDetail(null)} className="primary">Back to Resources</Button></div>
                </>
              )}
            </div>
          </div>
        )}
    </Box>
  );
};



export default ResourcesPage;
