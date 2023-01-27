import MenuOpen from '@mui/icons-material/MenuOpen'
import MenuOutlined from '@mui/icons-material/MenuOutlined'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GithubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  Link,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography
} from '@mui/material'
import { useState } from 'react'

import pedroImg from '../../assets/pedroFoto.jpeg'

const pages = [
  { page: 'Inicial', link: '#hero' },
  { page: 'Projetos', link: '#projects' },
  { page: 'Sobre', link: '#about' },
  { page: 'Contato', link: '#contact' }
]
const settings = [
  { label: 'Linkedin', link: 'https://www.linkedin.com/in/pedro-a-fonso' },
  { label: 'Github', link: 'https://github.com/pedro-afonso' },
  { label: 'Email', link: 'mailto: pedroafonsojs@gmail.com' },
  {
    label: 'Baixar CV',
    link: 'https://drive.google.com/file/d/1nqe54SE1pYW5UVUIqCHAwMbO2zNeUEdy/view'
  }
]

export const AppNavbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <AppBar
      position="fixed"
      sx={[
        { background: '#000000' },
        { background: '-webkit-linear-gradient(to right, #434343, #000000)' },
        { background: 'linear-gradient(to right, #434343, #000000)' }
      ]}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Large */}

          <Typography
            variant="h1"
            fontSize="1.6rem"
            noWrap
            component={Link}
            href="/pagina-inicial#hero"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none'
            }}
          >
            PEDRO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" onClick={handleOpenNavMenu}>
              {!!anchorElNav ? <MenuOpen /> : <MenuOutlined />}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map(({ page, link }) => (
                <MenuItem
                  onClick={handleCloseNavMenu}
                  component={Link}
                  href={link}
                  key={page}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component={Link}
            href="/pagina-inicial#hero"
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none'
            }}
          >
            PEDRO
          </Typography>
          <Box ml={4} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(({ page, link }) => (
              <Button
                href={link}
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Box display={{ xs: 'none', md: 'inline-block' }} mr={2}>
              <IconButton
                href="https://www.linkedin.com/in/pedro-a-fonso"
                target="_blank"
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                href="https://github.com/pedro-afonso"
                target="_blank"
              >
                <GithubIcon />
              </IconButton>
              <IconButton href="mailto:pedroafonsojs@gmail.com" target="_blank">
                {/* pedroafonsojs@gmail.com */}
                <EmailIcon />
              </IconButton>
            </Box>
            <Tooltip title="Contatos">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Pedro Afonso" src={pedroImg} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map(({ label, link }) => (
                <MenuItem
                  onClick={handleCloseUserMenu}
                  component={Link}
                  href={link}
                  target="_blank"
                  key={label}
                >
                  <Typography textAlign="center">{label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* /Small */}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
