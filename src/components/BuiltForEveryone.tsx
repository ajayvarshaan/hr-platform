import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import ShieldIcon from '@mui/icons-material/Shield';
import styles from './BuiltForEveryone.module.scss';

const BuiltForEveryone: React.FC = () => {
  return (
    <section className={styles.section}>
      <Typography className={styles.heading}>Built for Everyone</Typography>
      <Typography className={styles.subheading}>
        Powerful features to support every team
      </Typography>

     
      <Box className={`${styles.cardRow} ${styles.topRow}`}>
      
        <Box className={styles.card}>
          <Typography variant="h6">For HR Professionals</Typography>
          <Typography variant="body2">Track team participation and HR info</Typography>
          <Box className={styles.compositeCardSet}>
            <Box className={styles.blurredCard}></Box>
            <Box className={styles.centerCardSet}>
              <Box className={styles.barGraph}>
                {[60, 90, 40, 100, 75].map((h, i) => (
                  <Box key={i} className={styles.bar} style={{ height: `${h}px` }} />
                ))}
              </Box>
            </Box>
            <Box className={styles.blurredCard}></Box>
          </Box>
        </Box>

       
        <Box className={styles.card}>
          <Typography variant="h6">For Managers & Leaders</Typography>
          <Typography variant="body2">Monitor company-wide stages</Typography>
          <Box className={styles.wireframeColumn}>
            {['Planning', 'Execution', 'Review'].map((stage, i) => (
              <Box key={i} className={styles.wireBox}>{stage}</Box>
            ))}
          </Box>
        </Box>

        <Box className={styles.card}>
          <Typography variant="h6">Security & Compliance</Typography>
          <Typography variant="body2">For legal teams and data safety</Typography>
          <Box className={styles.compositeInnerCard}>
            <Box className={styles.blurred}></Box>
            <Box className={styles.centerCard}>
              <ShieldIcon className={styles.securityIcon} />
            </Box>
            <Box className={styles.blurred}></Box>
          </Box>
        </Box>
      </Box>

   
      <Box className={`${styles.cardRow} ${styles.bottomRow}`}>
      
        <Box className={styles.card}>
          <Typography variant="h6"> Employee Data</Typography>
          <Typography variant="body2">See all your HR info in one place</Typography>
          <Box className={styles.userDetails}>
            <Box className={styles.userCard}>Name: Ajay Varshaan</Box>
            <Box className={styles.userCard}>Role: Web Developer</Box>
            <Box className={styles.userCard}>Joined: 2025</Box>
          </Box>
          <Box className={styles.performanceGraph}>
            {[35, 70, 50, 85].map((height, idx) => (
              <Box
                key={idx}
                className={styles.performanceBar}
                style={{ height: `${height}px` }}
              />
            ))}
          </Box>
        </Box>

        <Box className={styles.card}>
          <Typography variant="h6">For Teams & Employees</Typography>
          <Typography variant="body2">See who’s available and active</Typography>
          <Box className={styles.circleWrapper}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
              <Avatar
                key={id}
                alt={`User ${id}`}
                src={`/images/user${id}.jpg`}
                className={styles.circleAvatar}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default BuiltForEveryone;
