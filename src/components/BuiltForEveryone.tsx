import { useRef, useEffect } from 'react';
import { Typography, Paper, Box, Card } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import gsap from 'gsap';
import styles from './BuiltForEveryone.module.scss';
import BalanceIcon from '@mui/icons-material/Balance';


import user1 from '../assets/images/user1.jpg';
import user2 from '../assets/images/user2.jpg';
import user3 from '../assets/images/user3.jpg';
import user4 from '../assets/images/user4.jpg';
import user5 from '../assets/images/user5.jpg';
import user6 from '../assets/images/user6.jpg';

const BuiltForEveryone = () => {
  const orbitRef = useRef<HTMLDivElement>(null);


  const userImages = [user1, user2, user3, user4, user5, user6];

  useEffect(() => {
    if (orbitRef.current) {
      gsap.to(orbitRef.current, {
        rotate: 360,
        duration: 20,
        repeat: -1,
        ease: 'linear',
        transformOrigin: '50% 50%'
      });
    }
  }, []);

  return (
    <Box component="section" className={styles.section} >
      <Typography variant="h4" className={styles.heading}>
        <strong>Built for everyone</strong>
      </Typography>
      <Typography variant="body2" className={styles.subheading} align="center" marginTop="10px " marginLeft={55}>
        Empower every team in your organization to thrive with modern workflows.
      </Typography>

      {/* Top Row - 2 small + 1 wide card */}
      <Box className={styles.topRow} >
        {/* HR Professionals */}

        <Paper className={styles.cardSmall} elevation={0} >
          <Box className={styles.hrCardHeader}>
            <Typography className={styles.cardTitleSmall}>Attendance Report</Typography>
            <Box className={styles.dropdownFake}>Monthly</Box>
          </Box>
          <Box className={styles.compositeCardSet} margin={4}>
            <Box className={styles.blurredCardLeft} />
            <Box className={styles.centerCardSet}>
              <TrendingUpIcon className={styles.trendIcon} />
              <Box className={styles.barGraph}>
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, index) => {
                  const heights = [60, 100, 60, 80, 70];
                  const colors = ['#8e24aa', '#3949ab', '#f44336', '#8e24aa', '#3949ab'];
                  return (
                    <Box key={day} className={styles.barColumn}>

                      <Box
                        className={styles.bar}
                        style={{ height: `${heights[index]}px`, backgroundColor: colors[index] }}
                      />
                      <Typography className={styles.barLabel}>{day}</Typography>
                    </Box>
                  );
                })}
              </Box>
            </Box>
            <Box className={styles.blurredCardRight} />

          </Box>
          <Typography variant="h6" className={styles.cardTitle} margin={6} width={1}><strong>For HR professionals</strong></Typography>
          <Box><Typography variant='body2' marginTop={-5} width={-1}>  Use a single cloud system for your employees, candidates and HR processes info.</Typography></Box>


        </Paper>

        {/* Managers & Leaders */}
        <Paper className={styles.cardSmall} elevation={0}>
          <Box className={styles.wireCircleContainer}>
            <Box className={styles.wireCircle} />
            <Box className={styles.wireCircle} />
            <Box className={styles.wireCircle} />
            <Box className={styles.centerIconContent} marginTop='5rem'>
              <BarChartIcon className={styles.centerIcon} />
              <Typography variant="caption" className={styles.overlayText}>Make Data-Driven Decisions</Typography>
              <Typography variant="caption" className={styles.overlayText} >Access real time insights</Typography>
            </Box>
          </Box>
          <Typography variant="h6" className={styles.cardTitle} margin={20} width={1}><strong>For managers & leaders</strong></Typography>
          <Box><Typography marginTop={-19} variant='body2'>Get always up-to-date data and monitor performance of the company.</Typography></Box>


        </Paper>

        {/* Legal Teams - Wider Card */}
        <Paper className={styles.cardWide} elevation={0}>
          <Box className={styles.legalCardFlex} >
            <Box className={styles.legalBlurSide} style={{ left: 0 }} />
            <Box className={styles.legalMain}>
              <Box className={styles.legalIconWrapper}>
                <BalanceIcon className={styles.legalIcon} />
                <Box className={styles.legalIconBg} />
                <Box className={styles.legalIconGlow} />
              </Box>
            </Box>
            <Box className={styles.legalBlurSide} style={{ right: 0 }} />
          </Box>
          <Typography variant="h6" className={styles.legalCardTitle} marginTop={22.5} ><strong>For Legal Teams</strong></Typography>
          <Box><Typography variant='body2' marginTop={0.5}>CoreShift helps legal teams by streamlining compliance, managing contracts and policies.</Typography></Box>




        </Paper>
      </Box>

      {/* Bottom Row - Modified layout */}
      <Box className={styles.bottomRow} >
        {/* All Employee Data - Wider and Aligned */}
        <Paper className={`${styles.cardBig} ${styles.employeeDataCard}`} elevation={0}>
          <Box className={styles.userInfo} marginTop={-2.5}>
            <Typography className={styles.name}>Ajay Varshaan</Typography>
            <Typography className={styles.role}>Trainer - L&D</Typography>

          </Box>


          <Box className={styles.participationGraph}>
            <Typography variant="caption" className={styles.graphTitle} marginTop={0}>
              Training Participation
            </Typography>
            <Box className={styles.barContainer} width={500}>
              {[100, 80, 60, 40, 20].map((value, index) => (
                <Box key={index} className={styles.barWrapper}>
                  <Box className={styles.participationBar} style={{ height: `${value * 0.5}px` }} />
                  <Typography variant="caption" className={styles.barLabel}>
                    {value}%
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>


          <Typography variant="h6" className={styles.cardTitle} bottom={-55} margin={5} height={45}>
            <strong >All employee data at once</strong>
          </Typography>
          <Typography variant='body2' marginTop={3}>Contact and personal information, paid and unpaid leave balances, career history, projects and more.</Typography>
          <Box className={styles.cardContent}>



          </Box>
        </Paper>


        {/* Teams & Employees - Normal card */}
        <Card className={styles.cardSmall} elevation={0} >
          <Box className={styles.circleWrapperSmall}>
            <Box className={styles.centerBadgeSmall}>
              <EmojiEventsIcon className={styles.trophyIconSmall} />
            </Box>
            <Box className={styles.avatarsOrbit} ref={orbitRef}>
              {[...Array(6)].map((_, idx) => {
                const angle = (idx * 60) * (Math.PI / 180);
                const radius = 85;
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);
                return (
                  <Box
                    key={idx}
                    className={styles.avatarContainerSmall}
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <img
                      src={userImages[idx]}   // ✅ Use the correct index to get the individual image path
                      alt={`User ${idx + 1}`}
                      className={styles.circleAvatarSmall}
                    />

                  </Box>
                );
              })}
            </Box>
          </Box>
          <Typography variant="h6" className={styles.cardTitle} marginTop={20} ><strong>For teams & employees</strong></Typography>
          <Box><Typography variant='body2' marginTop={1}>Stay informed about upcoming events and know who will be out of office in advance,Track upcoming events and out-of-office schedules effortlessly,</Typography></Box>

        </Card>
      </Box>
    </Box>
  );
};

export default BuiltForEveryone;