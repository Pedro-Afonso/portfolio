import { Avatar, Box, Paper, Typography } from '@mui/material'
import { VTabs } from '../VTabs'

import pedroImg from '../../assets/pedroFoto.jpeg'

export const About = () => {
  return (
    <Box
      id="about"
      component={Paper}
      minHeight="100vh"
      sx={[
        { background: '#000000' },
        { background: '-webkit-linear-gradient(to right, #434343, #000000)' },
        { background: 'linear-gradient(to right, #434343, #000000)' }
      ]}
    >
      <Box
        pt={{ xs: 4, sm: 10 }}
        px={{ xs: 2, sm: 10 }}
        marginX="auto"
        maxWidth="lg"
      >
        <Typography
          variant="h2"
          textAlign={{ xs: 'center', sm: 'left' }}
          fontSize={{ xs: '2rem', sm: '3.125rem' }}
          marginBottom="1rem"
        >
          Sobre mim
        </Typography>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          justifyContent="center"
          alignItems="center"
          gap={{ xs: 2, sm: 4 }}
        >
          <Avatar
            sx={{ height: '5rem', width: '5rem' }}
            alt="Pedro Afonso"
            src={pedroImg}
          />
          <Typography fontSize="1.125rem" textAlign="justify">
            Desde criança gosto de assuntos relacionados a tecnologia, gosto de
            estudar e sou curioso para saber como tudo funciona e entender o
            porquê que outras coisas não funcionam. Comecei a estudar javascript
            e outras ferramentas para a web no início de 2022, mas já tive
            contato com outras linguagens de programação na faculdade de
            Engenharia Elétrica (como C/C#, Matlab, Python, R, VHDL entre
            outras), mas o meu primeiro contato com programação foi ainda
            durante o ensino médio, quando eu estava curioso para usar a
            "engine" de jogos do blender, que usava blocos de lógica (sensores,
            atuadores e controladores) juntamente com "scripts" em python. Hoje,
            o que me motiva a programar é a possibilidade de criar soluções
            criativas para resolver problemas práticos. Creio que foi,
            principalmente este traço investigativo, que me atraiu e me mantêm
            motivado para trabalhar com programação.
          </Typography>
        </Box>
        <VTabs />
      </Box>
    </Box>
  )
}
