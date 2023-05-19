import * as React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "../assets/images/logo.png";
import image1 from "../assets/images/cambio1.jpg";
import image2 from "../assets/images/cambio2.jpg";
import image3 from "../assets/images/cambio3.jpg";
import { Button, Grid, ListItemIcon, ListItemText, Menu, MenuItem, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import { useNavigate } from 'react-router-dom';

const images = [
  { image: logo, text: "" },
  {
    image: image1, text: `smart perú es una plataforma de educación peruana de aprendizaje
  en línea y mediante eventos de nivel ejecutivo donde puedes desarrollar
  tus habilidades y adaptarse al futuro profecional` },
  {
    image: image2, text: `smart perú es una plataforma de educación peruana de aprendizaje
  en línea y mediante eventos de nivel ejecutivo donde puedes desarrollar
  tus habilidades y adaptarse al futuro profecional` },
  {
    image: image3, text: `smart perú es una plataforma de educación peruana de aprendizaje
  en línea y mediante eventos de nivel ejecutivo donde puedes desarrollar
  tus habilidades y adaptarse al futuro profecional` },
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
    <Grid container spacing={1}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <img width={window.innerWidth > 768 ? "240px" : "160px"} style={{ position: "absolute", zIndex: 10000 }} src={logo} />
        <Slider {...settings}>
          {images.slice(1).reverse().map(({ image, text }, i) => (
            <div className='container-carousel'>
              <img width='100%' src={image} />
              <div style={{ position: "absolute", top: window.innerWidth > 768 ? "75%" : "35%", width: "100vw" }}>
                <Typography
                  style={{
                    width: "75%",
                    margin: "auto",
                    color: "white",
                    backgroundColor: "rgba(0,0,0,.4)",
                    borderRadius: ".5rem"
                  }}
                  align='center'
                  variant={window.innerWidth > 768 ? "h4" : "p"} component="p">
                  {text}
                </Typography>;
              </div>
            </div>
          ))}
        </Slider>
      </Grid>

      <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
      <Grid item xs={10} sm={10} md={10} lg={10}>
        <Grid container spacing={2} sx={{ mt: 3 }}>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <Button onClick={() => navigate("./sobre-nosotros")} color='warning' fullWidth variant="contained">
              SOBRE NOSOTROS
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              color='warning'
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
            <Button onClick={() => navigate("./curos-online")} color='warning' fullWidth variant="contained">
              CURSOS ONLINE
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <Button onClick={() => navigate("./seminarios")} color='warning' fullWidth variant="contained">
              SEMINARIOS
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1} sm={1} md={1} lg={1}></Grid>

      <Grid item xs={12} sm={12} md={12} lg={12} sx={{ my: 3 }}>
        <Typography align='center' color="text.secondary" variant="h5" component="div">
          Transformamos la economía de nuestros paises entrenando a la proxima generación de profecionales en tecnologia
        </Typography>;
      </Grid>

    </Grid>
  )
};

export default Home;