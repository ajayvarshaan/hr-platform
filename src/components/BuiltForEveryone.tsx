import React from 'react';
import { Typography, Paper, Box } from '@mui/material';
import styles from './BuiltForEveryone.module.scss';
import BarChartIcon from '@mui/icons-material/BarChart';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GavelIcon from '@mui/icons-material/Gavel';

const BuiltForEveryone = () => {
  return (
    <Box component="section" className={styles.section}>
      <Typography variant="h4" className={styles.heading}>
        Built for everyone
      </Typography>
      <Typography
        variant="body1"
        color='black'
        className={styles.subheading}
        align="center"
        margin-top="10px"
      >
        Empower every team in your organization to thrive with modern workflows.
      </Typography>

      {/* Top Row - 3 Cards */}
      <Box className={styles.topRow}>
        {/* HR Professionals */}
        <Paper className={styles.card} elevation={0}>
          <Box className={styles.hrCardHeader}>
            <Typography className={styles.cardTitleSmall}>Attendance Report</Typography>
            <Box className={styles.dropdownFake}>Monthly</Box>
          </Box>

          <Box className={styles.compositeCardSet}>
            <Box className={styles.blurredCardLeft} />
            <Box className={styles.centerCardSet}>
              <TrendingUpIcon className={styles.trendIcon} />
              <Box className={styles.barGraph}>
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, index) => {
                  const height = [60, 100, 60, 80, 70][index];
                  const color = ['#8e24aa', '#3949ab', '#f44336', '#8e24aa', '#3949ab'][index];
                  return (
                    <Box key={day} className={styles.barColumn}>
                      {day === 'Tue' && <Box className={styles.tooltip}>+17%</Box>}
                      <Box 
                        className={styles.bar} 
                        style={{ 
                          height: `${height}px`,
                          backgroundColor: color
                        }} 
                      />
                      <Typography className={styles.barLabel}>{day}</Typography>
                    </Box>
                  );
                })}
              </Box>
            </Box>
            <Box className={styles.blurredCardRight} />
          </Box>

          <Typography variant="h6" className={styles.cardTitle}>For HR professionals</Typography>
          <Typography variant="body2">
            Use a single cloud system for your employees, candidates and HR processes info.
          </Typography>
        </Paper>

        {/* Managers & Leaders */}
        <Paper className={styles.card} elevation={0}>
          <Box className={styles.wireCircleContainer}>
            <Box className={styles.wireCircle} />
            <Box className={styles.wireCircle} />
            <Box className={styles.wireCircle} />
            <Box className={styles.centerIconContent}>
              <BarChartIcon className={styles.centerIcon} />
              <Typography variant="caption" className={styles.overlayText}>
                Make Data-Driven Decisions
              </Typography>
              <Typography variant="caption" className={styles.overlayText}>
                Access real time insights
              </Typography>
            </Box>
          </Box>
          

         
        

          <Box className={styles.infoBoxesContainer}>
            <Box className={styles.infoBox}>
              <Typography variant="caption">Performance Metrics</Typography>
            </Box>
            <Box className={styles.infoBox}>
              <Typography variant="caption">Team Analytics</Typography>
            </Box>
            <Box className={styles.infoBox}>
              <Typography variant="caption">KPI Dashboard</Typography>
            </Box>
          </Box>
            <Typography variant="h6" className={styles.cardTitle}>For managers & leaders</Typography>
              <Typography variant="body2" className={styles.managerText}>
            Get always up-to-date data and monitor<br />
            performance of the company.
          </Typography>
        </Paper>

        {/* Legal Teams - Enhanced Card */}
        <Box className={styles.legalCardFull}>
          <Box className={styles.legalCardFlex}>
            <Box className={styles.legalBlurSide} style={{ left: 0 }} />
            <Box className={styles.legalMain}>
              <GavelIcon className={styles.legalIcon} />
            </Box>
            <Box className={styles.legalBlurSide} style={{ right: 0 }} />
          </Box>
         
          <Box className={styles.legalFeatures}>
          {['Contract Management', 'Compliance Tracking', 'Policy Automation'].map((feature, index) => (
            <React.Fragment key={index}>
              <Box className={styles.legalFeatureItem}>
                <Box className={styles.legalFeatureDot} />
                <Typography variant="body2">{feature}</Typography>
              </Box>
            </React.Fragment>
          ))}
          <Typography variant="h6" className={styles.legalCardTitle}>
           <strong color='black'>For Legal Teams</strong>
          </Typography>
          <Typography variant="body2" className={styles.legalCardText}>
            CoreShift helps legal teams by streamlining compliance, managing contracts and policies.
          </Typography>
          </Box>
        </Box>
        
      </Box>

      {/* Bottom Row - 2 Cards */}
      <Box className={styles.bottomRow}>
        {/* Trainers / Educators */}

<Paper className={styles.card} elevation={0}>
  <Box className={styles.userInfo}>
    <Typography className={styles.name}>Ajay Varshaan</Typography>
    <Typography className={styles.role}>Trainer - L&D</Typography>
  </Box>

  <AccessTimeIcon className={styles.timeIcon} />

  <Typography variant="h6" className={styles.cardTitle}>
    For trainers
  </Typography>
  <Typography variant="body2" className={styles.cardDescription}>
    Analyze participation trends and evaluate training effectiveness easily.
  </Typography>

  {/* Training Participation Bar Graph */}
  <Box className={styles.participationGraph}>
    <Typography variant="caption" className={styles.graphTitle}>
      Training Participation
    </Typography>
    <Box className={styles.barContainer}>
      {[100, 80, 60, 40, 20].map((value, index) => (
        <Box key={index} className={styles.barWrapper}>
          <Box 
            className={styles.participationBar}
            style={{ height: `${value * 0.8}px` }}
          />
          <Typography variant="caption" className={styles.barLabel}>
            {value}%
          </Typography>
        </Box>
      ))}
    </Box>
  </Box>

  <Box className={styles.userList}>
    {[
      { name: 'Surya', role: 'Assistant Trainer' },
 
    ].map((user, idx) => (
      <Box key={idx} className={styles.userListItem}>
        <Typography className={styles.name}>{user.name}</Typography>
        <Typography className={styles.role}>{user.role}</Typography>
      </Box>
    ))}
  </Box>

  <Typography variant="body2" className={styles.dataSummary}>
    All employee data at once
  </Typography>
  <Typography variant="caption" className={styles.dataDescription}>
    Contact and personal information, paid and unpaid leave balances, career history, projects and more.
  </Typography>
</Paper>
{/* Employees */}
<Paper className={styles.card} elevation={0}>


  {/* Circular Avatar Display */}
  <Box className={styles.circleWrapper}>
    <Box className={styles.centerBadge}>
      <EmojiEventsIcon className={styles.trophyIcon} />
    </Box>
    
    {[...Array(6)].map((_, idx) => {
      const angle = (idx * 60) * (Math.PI / 180); // 60 degrees between each
      const radius = 70;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);

      return (
        <Box 
          key={idx}
          className={styles.avatarContainer}
          style={{
            left: `calc(50% + ${x}px)`,
            top: `calc(50% + ${y}px)`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <img
            src={`./images/user${idx + 1}.jpg`}
            alt={`Team member ${idx + 1}`}
            className={styles.circleAvatar}
          />
          <Box className={styles.statusIndicator} />
        </Box>
      );
    })}
  </Box>



  <Typography variant="body2" className={styles.cardDescription}>
    Motivate individuals and track progress toward performance goals with real-time analytics.
  </Typography>
   
  <Box className={styles.employeeHeader}>
    <Typography variant="h6" className={styles.cardTitle}>Team Overview</Typography>
    <Typography variant="body2" className={styles.cardSubtitle}>
      Track team engagement and performance
    </Typography>
  </Box>
</Paper>

      </Box>
    </Box>
    
  );
};


export default BuiltForEveryone;