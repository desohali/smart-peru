import { Button, ButtonGroup, Chip, Divider, Grid, Typography } from '@mui/material';
import * as React from 'react';
import convencion from "../assets/images/convencion.jpg";
import { useNavigate } from 'react-router-dom';
import { returnDiasHorasMinutosSegundos } from '../helpers.js/helpers';

const Convencion = () => {

  const navigate = useNavigate();

  const [fechaRestante, setFechaRestante] = React.useState(returnDiasHorasMinutosSegundos(((Date.parse(new Date("2024-07-22")) - Date.parse(new Date())) / 1000)));
  React.useEffect(() => {
    let interval;
    interval = setInterval(() => {
      const fechaActual = Date.parse(new Date());
      const fechaDelEvento = Date.parse(new Date("2024-07-22"));
      setFechaRestante(returnDiasHorasMinutosSegundos(((fechaDelEvento - fechaActual) / 1000)));
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  }, []);


  React.useEffect(() => {
    let newImagenes;
    newImagenes = new Image();
    newImagenes.src = convencion;
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
            <img width='100%' src={convencion} />
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ px: 3, my: 3 }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Divider>
            <Chip label="CONVENCION" />
          </Divider>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant={window.innerWidth > 768 ? "h6" : "p"} component="div" style={{ color: "orange" }}>
            CONVENCIÓN NACIONAL EN CIENCIAS EMPRESARIALES :
          </Typography>
          <Typography variant={window.innerWidth > 768 ? "h6" : "p"} component="div" color='text.secondary'>
            La era digital, una adaptación a los nuevos cambios
          </Typography>

          <Typography variant={window.innerWidth > 768 ? "h6" : "p"} component="div" style={{ color: "orange" }}>
            DIRIGIDO :
          </Typography>
          <Typography variant={window.innerWidth > 768 ? "h6" : "p"} component="div" color='text.secondary'>
            El evento es dirigido a estudiantes técnicos, universitarios, profesionales de ciencias empresariales y público en general. El mismo que se desarrollará intercalando eventos académicos, paneles, talleres, visita a plantas técnicas y eventos de confraternidad. 
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant={window.innerWidth > 768 ? "h6" : "p"} component="div" style={{ color: "orange" }}>
            ESTRUCTURA Y MODALIDAD :
          </Typography>
          <Typography variant={window.innerWidth > 768 ? "h6" : "p"} component="div" color='text.secondary'>
            La estructuración del proceso convencional se basará en el desarrollo de: Ponencias magistrales, Mesa de Dialogo Empresarial, Talleres y Visita a 04 plantas técnicas.

          </Typography>

          <Typography variant={window.innerWidth > 768 ? "h6" : "p"} component="div" style={{ color: "orange" }}>
            ORGANIZACION Y DESARROLLO :
          </Typography>
          <Typography variant={window.innerWidth > 768 ? "h6" : "p"} component="div" color='text.secondary'>
            La CONVENCIÓN NACIONAL en Ciencias Empresariales Sullana 2024 es desarrollado por SMARTPerú en alianza con instituciones nacionales y con el respaldo de instituciones regionales y locales, que se desarrollará del 22 al 26 de julio de 2024 en la ciudad de Sullana.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container spacing={1}>
            <Grid item xs={1} sm={1} md={4} lg={4}></Grid>
            <Grid item xs={10} sm={10} md={4} lg={4}>
              <Button
                onClick={() => navigate("../registro-de-participante/convencion")}
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

export default Convencion
