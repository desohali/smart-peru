import * as React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import cambio1 from "../assets/images/cambio1.jpg";
import cambio2 from "../assets/images/cambio2.jpg";
import cambio3 from "../assets/images/cambio3.jpg";
import cambio4 from "../assets/images/cambio4.jpg";
import cambio5 from "../assets/images/cambio5.jpg";
import cambio6 from "../assets/images/cambio6.jpg";
import cambio7 from "../assets/images/cambio7.jpg";
import cambio8 from "../assets/images/cambio8.jpg";
import { Button, Grid, ListItemIcon, ListItemText, Menu, MenuItem, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import { useNavigate } from 'react-router-dom';

const images = [
  cambio1,
  cambio2,
  cambio3,
  cambio4,
  cambio5,
  cambio6,
  cambio7,
  cambio8,
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

  /* handler menu eventos ejecutivos (EE) */
  const [anchorElEE, setAnchorElEE] = React.useState(null);
  const openEE = Boolean(anchorElEE);
  const handleClickEE = (event) => {
    setAnchorElEE(event.currentTarget);
  };
  const handleCloseEE = () => {
    setAnchorElEE(null);
  };

  /* handler menu apoyo consultoria (AC) */
  const [anchorElAC, setAnchorElAC] = React.useState(null);
  const openAC = Boolean(anchorElAC);
  const handleClickAC = (event) => {
    setAnchorElAC(event.currentTarget);
  };
  const handleCloseAC = () => {
    setAnchorElAC(null);
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
              aria-controls={openEE ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openEE ? 'true' : undefined}
              onClick={handleClickEE}
              color='success'
              fullWidth
              variant="contained"
              endIcon={<KeyboardArrowDownIcon />}>
              EVENTOS EJECUTIVOS
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorElEE}
              open={openEE}
              onClose={handleCloseEE}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={() => {
                handleCloseEE();
                navigate("./foro-en-ia");
              }}>
                <ListItemIcon>
                  <TouchAppIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>FORO EN IA</ListItemText>
              </MenuItem>
              <MenuItem onClick={() => {
                handleCloseEE();
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

          {window.innerWidth > 768 && <Grid item xs={12} sm={12} md={3} lg={3}></Grid>}
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Button
              className='bg-smart-peru'
              id="basic-button"
              aria-controls={openAC ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openAC ? 'true' : undefined}
              onClick={handleClickAC}
              color='success'
              fullWidth
              variant="contained"
              endIcon={<KeyboardArrowDownIcon />}>
              APOYO CONSULTORIA
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorElAC}
              open={openAC}
              onClose={handleCloseAC}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={() => {
                handleCloseAC();
                navigate("./asesoria-empresarial");
              }}>
                <ListItemIcon>
                  <TouchAppIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>ASESORÍA EMPRESARIAL</ListItemText>
              </MenuItem>
              <MenuItem onClick={() => {
                handleCloseAC();
                navigate("./consultoria-de-negocios");
              }}>
                <ListItemIcon>
                  <TouchAppIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>CONSULTARÍA DE NEGOCIOS</ListItemText>
              </MenuItem>
            </Menu>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Button className='bg-smart-peru' onClick={() => navigate("./contactanos")} color='success' fullWidth variant="contained">
              CONTACTANOS
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}></Grid>

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