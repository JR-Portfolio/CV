import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import Sos from '@mui/icons-material/GitHub';
import '../index.css';
import { GitHub } from '@mui/icons-material';
import Typography from '@mui/material/Typography';

export default function Contact() {

   function gitHub() {
     window.open('https://github.com/JR-Portfolio', '_blank');
   } 

  function linkedIn() {
    window.open('https://www.linkedin.com/in/jouni-riimala-04330', '_blank');
  }

  function fb() {
    window.open('https://www.facebook.com/jriimala', '_blank');
  }

  function insta() {
    window.open('https://www.instagram.com/jriimala/', '_blank');
  }

  const subject = 'CONTACT REQUEST';
  const recipient = 'jriimala@gmail.com';
  const body = 'Hi \n\nContacting you via your web cv.\n\n';

  const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <>
      <hr></hr>
      <p></p>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          alignItems: 'start',
          '& > *': {
            m: 1,
          },
        }}
      >
        <div className='contact-card'>
          <ButtonGroup
            variant='outlined'
            aria-label='outlined button group'
            className='socialButtons'
          >
            <IconButton>
              <FacebookIcon onClick={fb} />
            </IconButton>
            <IconButton>
              <InstagramIcon onClick={insta} />
            </IconButton>
            <IconButton>
              <LinkedInIcon onClick={linkedIn} />
            </IconButton>
            <IconButton>
              <GitHub onClick={gitHub} />
              <Typography variant='body1' ml={1}>
                Few coding repositories.
              </Typography>
            </IconButton>
            <IconButton>
              <a href={mailtoLink}><MailIcon sx={{marginLeft: '2px' }}/></a>
              <Typography variant='body1' ml={1}>
                Tel. +358 2385 888.
              </Typography>

            </IconButton>
          </ButtonGroup>
        </div>
      </Box>
    </>
  );
}
