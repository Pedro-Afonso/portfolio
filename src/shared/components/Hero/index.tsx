import { Box, Button, Typography } from "@mui/material";

export const Hero = () => {
  return (
    <Box id="hero" height="100vh" minHeight="600px">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
        p={10}
      >
        <Box>
          <Typography>Bem Vindo ao meu mundo</Typography>
          <Typography fontSize="4rem">Pedro Afonso</Typography>
          <Typography>Desenvolvedor Front-End</Typography>
          <Box mt={10}>
            <Button
              href="#projects"
              variant="outlined"
              color="secondary"
              sx={{ mr: "1rem" }}
            >
              Projetos
            </Button>
            <Button href="#contact" variant="outlined">
              Entre em contato
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
