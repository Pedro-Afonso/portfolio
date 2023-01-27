import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  Link,
  useMediaQuery,
  Button,
  IconButton,
  Box
} from '@mui/material'
import DialogContentText from '@mui/material/DialogContentText'
import Close from '@mui/icons-material/Close'

import { useAppDispatch, useAppSelector } from '../../hooks'
import { toggleProjectDetailst } from '../../slice/modalSlice'
import { Carousel } from '../Carousel/Carousel'

export const Modal = () => {
  const downSm = useMediaQuery('(max-width:570px)')

  const { isVisible, projectData } = useAppSelector(
    state => state.modal.projectDetails
  )

  const dispatch = useAppDispatch()

  const handleOnCloseModal = () => {
    dispatch(toggleProjectDetailst(null))
  }

  return (
    <Dialog
      open={isVisible}
      onClose={handleOnCloseModal}
      fullWidth
      fullScreen={downSm}
      scroll="body"
      maxWidth="md"
    >
      <DialogTitle>
        {projectData?.title}
        <IconButton
          sx={{ position: 'absolute', right: '2rem' }}
          onClick={handleOnCloseModal}
        >
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection={downSm ? 'column' : 'row'} gap={2}>
          <Box flexBasis={320}>
            <Carousel imageList={projectData?.images} />
          </Box>
          <Box flex={1} flexBasis={320}>
            <DialogContentText color="white">
              <strong>Descrição:</strong> {projectData?.description}
              <hr />
              {/* <strong>Objetivo:</strong> {projectData?.objective}
              <hr /> */}
              <strong>Apresentação:</strong> {projectData?.presentation}
            </DialogContentText>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleOnCloseModal}>Fechar</Button>
        <Link target="_blank" href={projectData?.github}>
          Repositório
        </Link>
        <Link target="_blank" href={projectData?.url}>
          Demonstração
        </Link>
      </DialogActions>
    </Dialog>
  )
}
