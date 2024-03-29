import { Box, Tab, Tabs, Typography } from '@mui/material'
import { useState } from 'react'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props

  return (
    <div hidden={value !== index}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

export const VTabs = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Principais Habilidades" />
          <Tab label="Educação" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        ReactJS <br />
        Typescript <br />
        Redux <br />
        Firebase <br />
        HTML, CSS e SASS <br />
        Material UI <br />
        Familiaridade com Git e Github <br />
        Node <br />
        Express <br />
        MongoDB <br />
        Atualmente eu estudo Next.js <br />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography fontSize="1rem">
          <Typography component="span" fontWeight="700">
            Graduando em Engenharia Elétrica{' - '}
          </Typography>
          IFMA - Instituto Federal do Maranhão
          {' (previsão 2023.1)'}
        </Typography>
      </TabPanel>
    </Box>
  )
}
