import { Box, Container, Typography, Link, IconButton, Stack } from '@mui/material';
import { FaInstagram, FaXTwitter, FaTiktok } from 'react-icons/fa6';
import './Footer.scss';

export default function Footer() {
  return (
    <Box component="footer" className="footer">
      <Container maxWidth="lg">
        <Box className="footer-content">
          <Box className="footer-col footer-description">
            <Typography variant="h6" className="footer-heading">
              Groupon is the HRM platform that builds a thriving workplace culture—all in one place.
            </Typography>
          </Box>

          <Box className="footer-col">
            <Typography className="footer-title">Product</Typography>
            <Stack spacing={1}>
              <Link href="#" >CoreHR</Link>
              <Link href="#">Recruit</Link>
              <Link href="#">Perform</Link>
              <Link href="#">Pulse</Link>
            </Stack>
          </Box>

          <Box className="footer-col">
            <Typography className="footer-title">Features</Typography>
            <Stack spacing={1}>
              <Link href="#">Desk</Link>
              <Link href="#">Time</Link>
              <Link href="#">Analytics</Link>
            </Stack>
          </Box>

          <Box className="footer-col">
            <Typography className="footer-title">Pricing</Typography>
          </Box>

          <Box className="footer-col">
            <Typography className="footer-title">Resources</Typography>
          </Box>

          <Box className="footer-col">
            <Typography className="footer-title">Follow us</Typography>
            <Box className="social-icons">
              <IconButton className="icon-btn"><FaInstagram /></IconButton>
              <IconButton className="icon-btn"><FaXTwitter /></IconButton>
              <IconButton className="icon-btn"><FaTiktok /></IconButton>
            </Box>
          </Box>
        </Box>
      </Container>

    
      <Typography variant="h1" className="footer-bg-text">
        Groupon
      </Typography>
    </Box>
  );
}
