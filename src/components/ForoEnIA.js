import { Button, ButtonGroup, Chip, Divider, Grid, Typography } from '@mui/material';
import * as React from 'react';
import foro from "../assets/images/foro.jpg";
import { useNavigate } from 'react-router-dom';
import { returnDiasHorasMinutosSegundos } from '../helpers.js/helpers';

const ForoEnIA = () => {

  const navigate = useNavigate();

  const [fechaRestante, setFechaRestante] = React.useState(returnDiasHorasMinutosSegundos(((Date.parse(new Date("2023-07-13")) - Date.parse(new Date())) / 1000)));
  React.useEffect(() => {
    let interval;
    interval = setInterval(() => {
      const fechaActual = Date.parse(new Date());
      const fechaDelEvento = Date.parse(new Date("2023-07-13"));
      setFechaRestante(returnDiasHorasMinutosSegundos(((fechaDelEvento - fechaActual) / 1000)));
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  }, []);

  React.useEffect(() => {
    let newImagenes;
    newImagenes = new Image();
    newImagenes.src = foro;
  }, []);


  return (
    <React.Fragment>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={12} lg={12} className='bg-smart-peru'>
          <ButtonGroup fullWidth size="small" variant="outlined">
            <Button disabled style={{ color: "white" }} sx={{
              fontWeight: "bold",
              fontSize: { sm: ".75rem", lg: "1.5rem" },
              backgroundColor: "rgba(20, 141, 172,1)"
            }} >DIAS<br />{fechaRestante?.dias}</Button>
            <Button disabled style={{ color: "white" }} sx={{
              fontWeight: "bold",
              fontSize: { sm: ".75rem", lg: "1.5rem" },
              backgroundColor: "rgba(20, 141, 172,1)"
            }} >HORAS<br />{fechaRestante?.horas}</Button>
            <Button disabled style={{ color: "white" }} sx={{
              fontWeight: "bold",
              fontSize: { sm: ".75rem", lg: "1.5rem" },
              backgroundColor: "rgba(20, 141, 172,1)"
            }} >MINUTOS<br />{fechaRestante?.minutos}</Button>
            <Button disabled style={{ color: "white" }} sx={{
              fontWeight: "bold",
              fontSize: { sm: ".75rem", lg: "1.5rem" },
              backgroundColor: "rgba(20, 141, 172,1)"
            }} >SEGUNDOS<br />{fechaRestante?.segundos}</Button>
          </ButtonGroup>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <div style={{ width: "100%", textAlign: "center" }}>
            <img width='100%' src={foro} />
          </div>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ px: 3, my: 3 }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Divider>
            <Chip label="FORO EN IA" />
          </Divider>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant={window.innerWidth > 768 ? "h6" : "p"} component="div" style={{ color: "orange" }}>
            FORO :
          </Typography>
          <Typography variant={window.innerWidth > 768 ? "h6" : "p"} component="div" color='text.secondary'>
            Inteligencia artificial en la ciencia de la salud.
          </Typography>

          <Typography variant={window.innerWidth > 768 ? "h6" : "p"} component="div" style={{ color: "orange" }}>
            DIRIGIDO :
          </Typography>
          <Typography variant={window.innerWidth > 768 ? "h6" : "p"} component="div" color='text.secondary'>
            Estudiantes y profeciones de Medicina Humana, Enfermeria, Obstetricia, Biologia y Biotecnologia.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant={window.innerWidth > 768 ? "h6" : "p"} component="div" style={{ color: "orange" }}>
            ESTRUCTURA Y MODALIDAD :
          </Typography>
          <Typography variant={window.innerWidth > 768 ? "h6" : "p"} component="div" color='text.secondary'>
            Ponencias nacionales, Escaleta, Team Building + Fiesta esclusiva privada.
          </Typography>

          <Typography variant={window.innerWidth > 768 ? "h6" : "p"} component="div" style={{ color: "orange" }}>
            ORGANIZACION :
          </Typography>
          <Typography variant={window.innerWidth > 768 ? "h6" : "p"} component="div" color='text.secondary'>
            Smart Perú y SOCIEMCA.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container spacing={1}>
            <Grid item xs={1} sm={1} md={4} lg={4}></Grid>
            <Grid item xs={10} sm={10} md={4} lg={4}>
              <Button
                onClick={() => navigate("../registro-de-participante/foro-en-ia")}
                color='error'
                fullWidth variant="contained"
                sx={{ mt: 3 }}>
                REGISTRO DE PARTICIPANTE
              </Button>
            </Grid>
            <Grid item xs={1} sm={1} md={4} lg={4}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default ForoEnIA