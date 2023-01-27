import { Box, Grid, Typography } from '@mui/material'

import { myProjects } from '../../config/projects'
import { UCard } from '../UCard'

export const Projects = () => {
  return (
    <Box
      component="section"
      id="projects"
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      sx={{ backgroundColor: 'inherit' }}
    >
      <Box px={{ xs: 2, md: 5, lg: 10, xl: 2 }} py={6} maxWidth="xl">
        <Box textAlign="center">
          <Typography
            variant="h2"
            fontSize={{ xs: '2rem', sm: '3.125rem' }}
            sx={{ letterSpacing: '.3rem' }}
          >
            Projetos Mais Recentes
          </Typography>
          <Typography
            fontSize="1rem"
            color="#c6c9d8bf"
            my={2}
            sx={{ letterSpacing: '.2rem' }}
          >
            Aqui eu mostro alguns dos meus projetos pessoais
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {myProjects.map(project => (
            <Grid key={project._id} item xs={12} sm={6} md={4}>
              <UCard {...project} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}
