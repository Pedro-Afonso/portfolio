import { Box, Grid, Typography } from "@mui/material";
import { UCard } from "../UCard";

/* Icons */
import materialUiIcon from "../../assets/icons/materialui.png";
import typescriptIcon from "../../assets/icons/typescript.svg";
import rapidApiIcon from "../../assets/icons/rapidapi.svg";
import expressIcon from "../../assets/icons/express.svg";
import mongoDbIcon from "../../assets/icons/mongodb.svg";
import socketIcon from "../../assets/icons/socket.svg";
import reactIcon from "../../assets/icons/react.svg";
import reduxIcon from "../../assets/icons/redux.svg";

const myProjects = [
  {
    _id: 1,
    title: "Music App",
    techStack: "React JS, Material UI, Redux Toolkit , Rapid API",
    thumbnail:
      "https://user-images.githubusercontent.com/50973575/197407618-a35bf452-5d24-4988-8a16-30436f313829.png",
    github: "https://www.github.com/pedro-afonso/micro-spotify",
    url: "https://pedro-afonso-music-app.netlify.app",
    stack: [
      {
        name: "React",
        iconUrl: reactIcon,
      },
      {
        name: "Redux",
        iconUrl: reduxIcon,
      },
      {
        name: "Rapid API",
        iconUrl: rapidApiIcon,
      },
    ],
    secondaryStack: [
      {
        name: "Typescript",
        iconUrl: typescriptIcon,
      },
      {
        name: "Material UI",
        iconUrl: materialUiIcon,
      },
    ],
  },
  {
    _id: 2,
    title: "Reactgram",
    thumbnail:
      "https://user-images.githubusercontent.com/50973575/210013295-678b9482-f4e8-4cee-9b62-4891876b64d3.png",
    techStack: "React JS, Material UI, Redux Toolkit, Express, MongoDB",
    github: "https://www.github.com/pedro-afonso/reactgram-frontend",
    url: "https://reactgram-frontend.vercel.app",
    stack: [
      {
        name: "React",
        iconUrl: reactIcon,
      },
      {
        name: "Redux",
        iconUrl: reduxIcon,
      },
      {
        name: "Express",
        iconUrl: expressIcon,
      },
      {
        name: "Mongo DB",
        iconUrl: mongoDbIcon,
      },
    ],
    secondaryStack: [
      {
        name: "Typescript",
        iconUrl: typescriptIcon,
      },
      {
        name: "Material UI",
        iconUrl: materialUiIcon,
      },
    ],
  },
  {
    _id: 3,
    title: "Realtime Chat App",
    thumbnail:
      "https://user-images.githubusercontent.com/50973575/203847038-ed899369-fc18-4ca2-96c8-aa8313484c6e.png",
    techStack:
      "React JS, Material UI, Redux Toolkit, Express, MongoDB, Socket.IO",
    github: "https://www.github.com/pedro-afonso/chat-app-frontend",
    url: "https://pedro-afonso-chat-app.netlify.app",
    stack: [
      {
        name: "React",
        iconUrl: reactIcon,
      },
      {
        name: "Redux",
        iconUrl: reduxIcon,
      },
      {
        name: "Express",
        iconUrl: expressIcon,
      },
      {
        name: "Mongo DB",
        iconUrl: mongoDbIcon,
      },
    ],
    secondaryStack: [
      {
        name: "Typescript",
        iconUrl: typescriptIcon,
      },
      {
        name: "Material UI",
        iconUrl: materialUiIcon,
      },
      {
        name: "Socket.IO",
        iconUrl: socketIcon,
      },
    ],
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
