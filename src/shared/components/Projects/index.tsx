import { Box, Grid, Typography } from "@mui/material";
import { UCard } from "../UCard";

const myProjects = [
  {
    _id: 1,
    title: "Music App",
    techStack: "React JS, Material UI, Redux Toolkit , Rapid API",
    thumbnail: "/src/assets/micro-spotify.png",
    github: "https://www.github.com/pedro-afonso/micro-spotify",
    url: "https://pedro-afonso-music-app.netlify.app",
  },
  {
    _id: 2,
    title: "Reactgram",
    thumbnail: "/src/assets/micro-spotify.png",
    techStack: "React JS, Material UI, Redux Toolkit, Express, MongoDB",
    github: "https://www.github.com/pedro-afonso/reactgram-frontend",
    url: "https://reactgram-frontend.vercel.app",
  },
  {
    _id: 3,
    title: "Realtime Chat App",
    thumbnail: "/src/assets/micro-spotify.png",
    techStack:
      "React JS, Material UI, Redux Toolkit, Express, MongoDB, Socket.IO",
    github: "https://www.github.com/pedro-afonso/chat-app-frontend",
    url: "https://pedro-afonso-chat-app.netlify.app",
  },
];

export const Projects = () => {
  return (
    <Box
      component="section"
      id="projects"
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      sx={{ backgroundColor: "inherit" }}
    >
      <Box px={{ xs: 2, md: 5, lg: 10, xl: 2 }} py={3} maxWidth="xl">
        <Box textAlign="center" my={4}>
          <Typography variant="h2" sx={{ letterSpacing: ".3rem" }}>
            Projetos Mais Recentes
          </Typography>
          <Typography
            fontSize="1rem"
            color="#c6c9d8bf"
            my={2}
            sx={{ letterSpacing: ".2rem" }}
          >
            Aqui eu mostro alguns dos meus projetos
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {myProjects.map((project) => (
            <Grid key={project._id} item xs={12} sm={6} md={4}>
              <UCard {...project} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
