import { Box, Button, IconButton, Paper, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

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
          <Button variant="contained" sx={{ fontWeight: "600", color: "#000" }}>
            Baixar CV
          </Button>
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
            href="https://github.com/pedro-afonso"
            target="_blank"
          >
            {/* pedroafonsojs@gmail.com */}
            <EmailIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};
