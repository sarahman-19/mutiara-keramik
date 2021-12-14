import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import {useNavigate} from 'react-router-dom';

const images = [
  {
    url: 'https://ik.imagekit.io/sarahman19/static/marble-g69ae08c2b_640_EXa9LqPs4l1.jpg?updatedAt=1639274999638',
    title: 'Marble',
    id: 'marble'
  },
  {
    url: 'https://ik.imagekit.io/sarahman19/static/tekstur-kayu_6lONkD31B9b.jpg?updatedAt=1639274818478',
    title: 'Wood',
    id: 'wood'
  },
  {
    url: 'https://ik.imagekit.io/sarahman19/static/stones-ga755b134c_640_7f1QrhOk4.jpg?updatedAt=1639274911266',
    title: 'Stone',
    id: 'stone'
  },
  {
    url: 'https://ik.imagekit.io/sarahman19/static/spain-g5762ee4ce_640_9sy-6D3Be.jpg?updatedAt=1639276308078',
    title: 'Deco',
    id: 'deco'
  },
  {
    url: 'https://ik.imagekit.io/sarahman19/static/stole-gb39b97da5_640_PVGNQQp_p.jpg?updatedAt=1639371503645',
    title: 'Embossed',
    id: 'embossed'
  },
  {
    url: 'https://ik.imagekit.io/sarahman19/static/textile-g0fc23fff4_640_17qvVX-NW.jpg?updatedAt=1639277000228',
    title: 'Matte',
    id: 'matte'
  }
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 220,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', 
    height: 150,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function CardImageWithTitle() {
  const navigate = useNavigate()

  const handleGoProductPage = (idTekstur) => {
    navigate('/tekstur/' + idTekstur)
  }

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        <ImageButton
          sx={{m: 1, width: {xs: '31%', lg: '32%'}}}
          focusRipple
          key={image.id}
          onClick={() => handleGoProductPage(image.id)}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}
