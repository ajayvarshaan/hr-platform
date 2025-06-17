import { Typography, Paper, Box } from '@mui/material';
import styles from './BuiltForEveryone.module.scss';
import BarChartIcon from '@mui/icons-material/BarChart';
import GavelIcon from '@mui/icons-material/Gavel';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const BuiltForEveryone = () => {
  return (
    <Box component="section" className={styles.section}>
      <Typography variant="h4" className={styles.heading}>
        Built for everyone
      </Typography>
      <Typography variant="body1" className={styles.subheading}>
        Empower every team in your organization to thrive with modern workflows.
      </Typography>

      <Box className={`${styles.cardRow} ${styles.topRow}`}>
        {/* HR Professionals */}
        <Paper className={styles.card} elevation={0}>
          <Box className={styles.compositeCardSet}>
            <Box className={styles.blurredCardLeft} />
            <Box className={styles.centerCardSet}>
              <Box className={styles.barGraph}>
                <Box className={styles.bar} style={{ height: '80px', backgroundColor: '#8e24aa' }} />
                <Box className={styles.bar} style={{ height: '100px', backgroundColor: '#3949ab' }} />
                <Box className={styles.bar} style={{ height: '60px', backgroundColor: '#f44336' }} />
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
            </Box>
          </Box>
          <Typography variant="h6" className={styles.cardTitle}>For managers & leaders</Typography>
          <Typography variant="body2">
            Get always up-to-date data and monitor performance of the company.
          </Typography>
        </Paper>

        {/* Legal Teams (UPDATED: Full side blur effect) */}
        <Paper className={`${styles.card} ${styles.legalCardFull}`} elevation={0}>
          <Box className={styles.legalCardFlex}>
            <Box className={styles.legalBlurSide} />
            <Box className={styles.legalMain}>
              <GavelIcon className={styles.legalIcon} />
            </Box>
            <Box className={styles.legalBlurSide} />
          </Box>
          <Typography variant="h6" className={styles.cardTitle}>For legal teams</Typography>
          <Typography variant="body2">
            CoreShift helps legal teams by streamlining compliance, managing contracts and policies.
          </Typography>
        </Paper>
      </Box>

      <Box className={`${styles.cardRow} ${styles.bottomRow}`}>
        {/* Trainers / Educators */}
      <Paper className={styles.card} elevation={0}>
  {/* Main Trainer Info */}
  <Box className={styles.userInfo}>
    <Box className={styles.name}>Ajay Varshaan</Box>
    <Box className={styles.role}>Trainer - L&D</Box>
  </Box>

  <AccessTimeIcon className={styles.timeIcon} />

  {/* Graph Section */}
  <Box className={styles.performanceGraph}>
    <Box className={styles.performanceBar} style={{ height: '60px' }} />
    <Box className={styles.performanceBar} style={{ height: '90px' }} />
    <Box className={styles.performanceBar} style={{ height: '70px' }} />
  </Box>

  {/* Card Title and Description */}
  <Typography variant="h6" className={styles.cardTitle}>
    For trainers
  </Typography>
  <Typography variant="body2">
    Analyze participation trends and evaluate training effectiveness easily.
  </Typography>

  {/* Additional Users List */}
  <Box className={styles.userList}>
    {[
      { name: 'Surya', role: 'Assistant Trainer' },
      { name: 'kavin', role: 'Training Coordinator' },
      { name: 'lithish', role: 'Onboarding Specialist' },
    ].map((user, idx) => (
      <Box key={idx} className={styles.userListItem}>
        <Typography className={styles.name}>{user.name}</Typography>
        <Typography className={styles.role}>{user.role}</Typography>
      </Box>
    ))}
  </Box>
</Paper>


        {/* Employees */}
       <Paper className={styles.card} elevation={0}>
  <Box className={styles.circleWrapper}>
    <EmojiEventsIcon className={styles.trophyIcon} />
    {[...Array(6)].map((_, idx) => (
      <img
        key={idx}
        src={`./images/user${idx + 1}.jpg`}
        alt="user"
        className={styles.circleAvatar}
      />
    ))}
  </Box>
  <Typography variant="h6" className={styles.cardTitle}>For employees</Typography>
  <Typography variant="body2">
    Motivate individuals and track progress toward performance goals.
  </Typography>
</Paper>
      </Box>
    </Box>
  );
};

export default BuiltForEveryone;
