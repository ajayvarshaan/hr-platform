import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './HeroSection.scss';

import user1 from '../assets/images/user1.jpg';
import user2 from '../assets/images/user2.jpg';
import user3 from '../assets/images/user3.jpg';
import user5 from '../assets/images/user5.jpg';
import user6 from '../assets/images/user6.jpg';
import user7 from '../assets/images/user7.jpg';

const leftImages = [user5, user6, user7, user2];
const rightImages = [user1, user2, user3, user6];

interface HeroSectionProps {
  onNavigate?: (path: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const [detailPopup, setDetailPopup] = useState<string | null>(null);
  return (
    <Box className="hero-section">
      <svg width="0" height="0">
        <defs>
          <path id="leftPath" d="M100,0 C250,500 250,1200 100,1300" />
          <path id="rightPath" d="M100,0 C-50,500 -50,1200 300,1300" />
        </defs>
      </svg>

      <div className="image-track left-track">
        {[...Array(5)].map((_, i) => (
          <div
            key={`left-${i}`}
            className="profile-card left-img"
            style={{ animationDelay: `${i * 3}s` }}
          >
            <img src={leftImages[i % leftImages.length]} alt={`left-${i}`} />
          </div>
        ))}
      </div>

      <div className="image-track right-track">
        {[...Array(5)].map((_, i) => (
          <div
            key={`right-${i}`}
            className="profile-card right-img"
            style={{ animationDelay: `${i * 3}s` }}
          >
            <img src={rightImages[i % rightImages.length]} alt={`right-${i}`} />
          </div>
        ))}
      </div>

      <Box className="hero-content">
        <Box className="hero-icon">
          <AccountCircleIcon sx={{ fontSize: 40, color: '#9b6dff' }} />
        </Box>
        <Typography variant="h3" className="hero-title">
          Core HR <br /> solutions
        </Typography>
        <Typography className="hero-description">
          Streamline HR processes in one centralized platform, enhancing team transparency.
        </Typography>
        <Button className="learn-more-btn" onClick={() => onNavigate?.('/learn-more')}>LEARN MORE</Button>
      </Box>
      {detailPopup && (
        <div className="learn-detail-pop" onClick={() => setDetailPopup(null)}>
          <div className="learn-detail-card" onClick={(e) => e.stopPropagation()}>
            {detailPopup === 'hr' && (
              <>
                <h3>Core HR — details</h3>
                <p>Manage profiles, documents, workflows, and approvals with role-based access and full audit trails.</p>
                <ul>
                  <li>Employee profiles & documents</li>
                  <li>Custom workflows & approvals</li>
                  <li>Time off and attendance</li>
                </ul>
                <div className="detail-actions"><Button className="primary" onClick={() => { setDetailPopup(null); }}>Close</Button></div>
              </>
            )}
            {detailPopup === 'pay' && (
              <>
                <h3>Payroll — details</h3>
                <p>Run payroll globally with automated tax filings, direct deposits and on-demand pay options.</p>
                <ul>
                  <li>Multi-country payroll</li>
                  <li>Direct deposit & tax filing</li>
                  <li>Pay stubs & reports</li>
                </ul>
                <div className="detail-actions"><Button className="primary" onClick={() => { setDetailPopup(null); }}>Close</Button></div>
              </>
            )}
            {detailPopup === 'int' && (
              <>
                <h3>Integrations — details</h3>
                <p>Connect Slack, Google Workspace, payroll providers and SSO for streamlined workflows.</p>
                <ul>
                  <li>Slack: notifications & approvals</li>
                  <li>SSO & provisioning</li>
                  <li>Payroll provider connectors</li>
                </ul>
                <div className="detail-actions"><Button className="primary" onClick={() => { setDetailPopup(null); }}>Close</Button></div>
              </>
            )}
          </div>
        </div>
      )}
    </Box>
  );
};

export default HeroSection;
