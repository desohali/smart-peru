import { Button, Chip, Divider, Grid, Typography } from '@mui/material';
import * as React from 'react';
import foro from "../assets/images/foro.jpg";
import { useNavigate } from 'react-router-dom';

const ForoEnIA = () => {

  const navigate = useNavigate();
  return (
    <React.Fragment>
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
            <Chip label="CHIP" />
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
                onClick={() => navigate("../registro-de-participante")}
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