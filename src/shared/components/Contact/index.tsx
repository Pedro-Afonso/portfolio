import { Box, Button, IconButton, Link, Paper, Typography } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GithubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'

export const Contact = () => {
  return (
    <Box id="contact" component={Paper} height="80vh" minHeight="min-content">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        height="100%"
      >
        <Typography fontSize="2rem" textAlign="center" maxWidth="700px">
          Agora que você me conhece, entre em contato, é hora de fazer algo
          incrível juntos
        </Typography>
        <Box my={3}>
          <Link
            href="https://drive.google.com/file/d/1nqe54SE1pYW5UVUIqCHAwMbO2zNeUEdy/view"
            sx={{
              fontWeight: '600',
              color: '#000',
              backgroundColor: 'yellow',
              padding: '10px',
              borderRadius: '10px',
              textDecoration: 'none'
            }}
          >
            Baixar CV
          </Link>
        </Box>
        <Box>
          <IconButton
            size="large"
            href="https://www.linkedin.com/in/pedro-a-fonso"
            target="_blank"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            size="large"
            href="https://github.com/pedro-afonso"
            target="_blank"
          >
            <GithubIcon />
          </IconButton>
          <IconButton
            size="large"
            href="mailto:pedroafonsojs@gmail.com"
            target="_blank"
          >
            <EmailIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  )
}
