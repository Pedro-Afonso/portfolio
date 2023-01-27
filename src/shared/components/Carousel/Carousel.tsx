import { Box, Pagination, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'

interface ICarouselProps {
  imageList?: string[][]
}

export const Carousel: React.FC<ICarouselProps> = ({ imageList }) => {
  const [image, setImage] = useState(1)

  const downMd = useMediaQuery('(max-width:720px)')

  useEffect(() => {
    if (!imageList) return
    const nextImage = setTimeout(() => {
      setImage(prev => {
        if (prev === imageList[0]?.length) {
          return 1
        }
        return prev + 1
      })
    }, 3000)
    console.log('d')

    return () => clearTimeout(nextImage)
  }, [image])

  const changeImage = (_: unknown, page: number) => {
    setImage(page)
  }

  if (!imageList) return <></>

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box component="figure" margin={0}>
        <Box
          component="img"
          sx={{
            width: '100%',
            maxWidth: { xs: 320, md: 320 },
            maxHeight: { xs: 540, md: 540 }
          }}
          alt="Screenshot das páginas"
          src={imageList[0][image - 1]}
        />
        <Box component="figcaption" my={1} textAlign="center">
          {imageList[1][image - 1]}
        </Box>
      </Box>
      <Pagination
        variant="outlined"
        count={imageList[0].length}
        size={downMd ? 'small' : 'medium'}
        page={image}
        onChange={changeImage}
      />
    </Box>
  )
}
