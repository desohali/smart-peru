import * as React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import cambio1 from "../assets/images/ALTA ESPECIALIZACIIN SMARTPeru.jpg";
import cambio2 from "../assets/images/ALTA ESPECIALIZACIOON SMART.jpg";
import cambio3 from "../assets/images/FLYER VALIDAR CERTIFICACIONES.jpg";
import cambio4 from "../assets/images/PROGRAMA DE ESPE.jpg";
import cambio5 from "../assets/images/REDES SMART.jpg";
import cambio6 from "../assets/images/SMARTPER CARRUSEL1.jpg";
import cambio7 from "../assets/images/SMARTPER CARRUSEL2.jpg";
import smartperu from "../assets/images/SMART02.jpg";
import { Button, DialogActions, DialogContent, DialogTitle, Grid, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import { useNavigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

const images = [
  cambio1,
  cambio2,
  cambio3,
  cambio4,
  cambio5,
  cambio6,
  cambio7,
  
];

const Home = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    let newImagenes = [];
    for (let i = 0; i < images.length; i++) {
      newImagenes[i] = new Image();
      newImagenes[i].src = images[i];
    }

    // ia preload
    /* const iaImage = new Image();
    iaImage.src = ia; */
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

  /* modal dialog */
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container spacing={4} >
      <Grid>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
            SOMOS PATROCINADORES OFICIALES DEL XXX CONGRESO NACIONAL DE ECONOMISTAS DEL PERÚ
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <img width='100%' src={smartperu} />
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              CERRAR
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </Grid>

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
                navigate("./seminario-taller");
              }}>
                <ListItemIcon>
                  <TouchAppIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>SEMINARIO TALLER</ListItemText>
              </MenuItem>
              <MenuItem onClick={() => {
                handleCloseEE();
                navigate("./convencion");
              }}>
                <ListItemIcon>
                  <TouchAppIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>CONVENCIÓN NACIONAL</ListItemText>
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
              CONSULTORIA EMPRESARIAL
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
                <ListItemText>CORPORATE MEETINGS & EVENTS</ListItemText>
              </MenuItem>
            </Menu>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Button className='bg-smart-peru' onClick={() => navigate("./contactanos")} color='success' fullWidth variant="contained">
              CONTACTANOS
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Button startIcon={<WorkspacePremiumIcon/>} className='bg-smart-peru' onClick={() => navigate("./certificaciones")} color='success' fullWidth variant="contained">
              CERTIFICACIONES
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Button href='https://economistascajamarca.org.pe/conep/' target='blank' startIcon={<EventAvailableIcon />} style={{ background: "#6A1510" }} fullWidth variant="contained">
              CONEP 2024
            </Button>
          </Grid>


          {/* <Grid item xs={12} sm={12} md={12} lg={12} style={{ background: "purple" }}>
            <Grid container >
              <Grid item xs></Grid>
              <Grid item xs={12} sm={12} md={3} lg={3}>
                <Button className='bg-smart-peru' onClick={() => navigate("./contactanos")} color='success' fullWidth variant="contained">
                  CERTIFICACIONES
                </Button>
              </Grid>
              <Grid item xs></Grid>
            </Grid>
          </Grid> */}


        </Grid>

      </Grid>
      <Grid item xs={12} sm={12} md={1} lg={1}></Grid>


      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Typography style={{ padding: "0px 2rem" }} align='center' color="text.secondary" variant={window.innerWidth > 768 ? "h4" : "p"} component="div">
          Transformamos la educación de la próxima generación de profesionales del país. Bienvenido al mundo SMART ¡Vamos por más!
        </Typography>;
      </Grid>

    </Grid >
  )
};

export default Home;
