import { Grid, Typography } from '@mui/material';
import * as React from 'react';
import sobreNosotros from "../assets/images/sobreNosotros.jpg";
import quienesSomos from "../assets/images/quienesSomos.jpeg";
import mision from "../assets/images/mision.jpeg";
import vision from "../assets/images/vision.jpeg";
import { useNavigate } from 'react-router-dom';

const images = [
  sobreNosotros,
  quienesSomos,
  mision,
  vision,
];

const SobreNosotros = () => {

  React.useEffect(() => {
    let newImagenes = [];
    for (let i = 0; i < images.length; i++) {
      newImagenes[i] = new Image();
      newImagenes[i].src = images[i];
    }
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <div style={{ width: "100%", textAlign: "center" }}>
          <img width='100%' src={sobreNosotros} />
        </div>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Grid container spacing={2} sx={{ px: 3 }}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography variant={window.innerWidth > 768 ? "h4" : "p"} component="div" color='text.secondary'>
              <strong>¿ Quiénes Somos ?</strong>
            </Typography>
            <Typography variant={window.innerWidth > 768 ? "h6" : "p"} component="div" color='text.secondary'>
              SmartPerú es una Plataforma de Educación de
              nivel ejecutivo, que brinda servicios y asesoría
              a través de manera síncrono y asíncrono, online
              y a través de eventos ejecutivos empresariales,
              presenciales e híbridos. Nuestro compromiso es
              brindar educación de calidad y de manera
              accesible; contribuyendo a la formación
              académica de estudiantes, egresados y
              profesionales de  distintas carreras.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div style={{ width: "100%", textAlign: "center" }}>
              <img width='100%' src={quienesSomos} style={{ borderRadius: ".5rem" }} />
            </div>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Grid container spacing={2} sx={{ px: 3 }}>
          <Grid item xs={12} sm={4} md={3} lg={3}>
            <div style={{ width: "100%", textAlign: "center" }}>
              <img width='100%' src={mision} style={{ borderRadius: ".5rem" }} />
            </div>
          </Grid>
          <Grid item xs={12} sm={8} md={9} lg={9}>
            <Typography variant={window.innerWidth > 768 ? "h4" : "p"} component="div" color='text.secondary'>
              <strong>Misión :</strong>
            </Typography>
            <Typography variant={window.innerWidth > 768 ? "h6" : "p"} component="div" color='text.secondary'>
              Brindar un servicio y asesoría educativa de primer nivel, que contribuya
              eficientemente a la formación profesional de estudiantes y profesionales
              del país.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Grid container spacing={2} sx={{ px: 3 }}>
          <Grid item xs={12} sm={8} md={9} lg={9}>
            <Typography variant={window.innerWidth > 768 ? "h4" : "p"} component="div" color='text.secondary'>
              <strong>Visión :</strong>
            </Typography>
            <Typography variant={window.innerWidth > 768 ? "h6" : "p"} component="div" color='text.secondary'>
              Posicionarse como una Plataforma de Educación Ejecutiva de alta calidad
              en el país, mediante una metodología de enseñanza eficiente y de bajos
              costos, de  fácil acceso que le permita aprender y mejorar sus habilidades
              de alta demanda en el mercado laboral.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={3}>
            <div style={{ width: "100%", textAlign: "center" }}>
              <img width='100%' src={vision} style={{ borderRadius: ".5rem" }} />
            </div>
          </Grid>
        </Grid>
      </Grid>

    </Grid>
  )
}

export default SobreNosotros