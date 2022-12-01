import { Avatar, Box, Paper, Typography } from "@mui/material";
import { VTabs } from "../VTabs";

const VTabsProps = [
  {
    index: 0,
    label: "asdsad",
    content: "asdasd",
  },
  {
    index: 1,
    label: "asdsad",
    content: "asdasd",
  },
];

export const About = () => {
  return (
    <Box id="about" component={Paper} height="100vh" minHeight="600px">
      <Box pt={10} marginX="auto" px={10} maxWidth="lg">
        <Typography variant="h2" fontSize="3.125rem">
          Sobre mim
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center" gap={4}>
          <Avatar
            sx={{ height: "5rem", width: "5rem" }}
            alt="Pedro Afonso"
            src="/src/assets/pedroFoto.jpeg"
          />
          <Typography fontSize="1.125rem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ad
            fugiat ea repellat cum nisi impedit nulla accusantium consequuntur
            odit quibusdam dignissimos at blanditiis suscipit non soluta
            adipisci officiis nesciunt!
          </Typography>
        </Box>
        <VTabs />
      </Box>
    </Box>
  );
};
