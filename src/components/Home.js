import * as React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../assets/images/cambio1.jpg";
import image2 from "../assets/images/cambio2.jpg";
import image3 from "../assets/images/cambio3.jpg";
import image4 from "../assets/images/cambio4.jpg";
import image5 from "../assets/images/cambio5.jpg";
import image6 from "../assets/images/cambio6.jpg";
import image7 from "../assets/images/cambio7.jpg";
import image8 from "../assets/images/cambio8.jpg";
import { Button, Grid, ListItemIcon, ListItemText, Menu, MenuItem, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import { useNavigate } from 'react-router-dom';

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
];

const Home = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    let newImagenes = [];
    for (let i = 0; i < images.length; i++) {
      newImagenes[i] = new Image();
      newImagenes[i].src = images[i];
    }
  }, []);

  /* handler menu */
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false
  };


  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Slider {...settings}>
          {images.reverse().map((image, i) => (
            <div key={i} className='container-carousel'>
              <img width='100%' src={image} />
            </div>
          ))}
        </Slider>
      </Grid>

      <Grid item xs={12} sm={12} md={1} lg={1}></Grid>
      <Grid item xs={12} sm={12} md={10} lg={10}>
        <Grid container spacing={1} sx={{ px: 2 }}>

          <Grid item xs={12} sm={6} md={3} lg={3}>
            <Button className='bg-smart-peru' onClick={() => navigate("./sobre-nosotros")} fullWidth variant="contained">
              SOBRE NOSOTROS
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <Button
              className='bg-smart-peru'
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              color='success'
              fullWidth
              variant="contained"
              endIcon={<KeyboardArrowDownIcon />}>
              EVENTOS EJECUTIVOS
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={() => {
                handleClose();
                navigate("./foro-en-ia");
              }}>
                <ListItemIcon>
                  <TouchAppIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>FORO EN IA</ListItemText>
              </MenuItem>
              <MenuItem onClick={() => {
                handleClose();
                navigate("./convencion");
              }}>
                <ListItemIcon>
                  <TouchAppIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>CONVENCIÓN</ListItemText>
              </MenuItem>
            </Menu>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <Button className='bg-smart-peru' onClick={() => navigate("./cursos-online")} color='success' fullWidth variant="contained">
              CURSOS ONLINE
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <Button className='bg-smart-peru' onClick={() => navigate("./seminarios")} color='success' fullWidth variant="contained">
              SEMINARIOS
            </Button>
          </Grid>

          {window.innerWidth > 768 && <Grid item xs={12} sm={12} md={4} lg={4}></Grid>}
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Button className='bg-smart-peru' onClick={() => navigate("./contactanos")} color='success' fullWidth variant="contained">
              CONTACTANOS
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}></Grid>

        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={1} lg={1}></Grid>



      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Typography style={{ padding: "0px 2rem" }} align='center' color="text.secondary" variant={window.innerWidth > 768 ? "h4" : "p"} component="div">
          Transformamos la educación de nuestras regiones entrenando a la próxima generación de profesionales del país.
        </Typography>;
      </Grid>

    </Grid >
  )
};

export default Home;