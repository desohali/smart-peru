import * as  React from 'react';
import logo512 from "../assets/images/logo512.png";
import { Grid, IconButton, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contactanos = () => {

  const handlerLink = (url) => {
    const a = document.createElement("a");
    a.setAttribute("target", "_blank");
    a.setAttribute("href", url);
    a.click();
  }
  return (
    <Grid container spacing={2} sx={{ mt: 3 }}>
      <Grid item xs={12} sm={12} md={4} lg={4}>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <div style={{ width: "100%", textAlign: "center" }}>
          <img style={{ borderRadius: ".5rem", border: "1px solid rgba(0,0,0,.4)" }} width='50%' src={logo512} />
        </div>

        <Typography sx={{ mb: 3 }} variant="h6" component="div" align='center'>
          @smartperu
        </Typography>

        <Typography sx={{ mb: 3 }} variant="p" component="div" align='center'>
          SmartPeru 🚀 Plataforma de Educación 🔵 Sé el cambio que quieres ver en el mundo.
        </Typography>

        <Typography sx={{ mb: 3 }} variant="h6" component="div" align='center'>
          💡 SmartPeru. #EducaciónEjecutiva
        </Typography>

        <Typography variant="h6" component="div" align='center'>
          <IconButton edge="end" aria-label="comments" onClick={() => {
            handlerLink("https://facebook.com/smartperu.educa/");
          }}>
            <FacebookIcon fontSize="large" />
          </IconButton>
          <IconButton edge="end" aria-label="comments" onClick={() => {
            handlerLink("https://instagram.com/smart.peru.educa/");
          }}>
            <InstagramIcon fontSize="large" />
          </IconButton>
          <IconButton edge="end" aria-label="comments" onClick={() => {
            handlerLink("https://www.linkedin.com/company/smartper%C3%BA-educa/");
          }}>
            <LinkedInIcon fontSize="large" />
          </IconButton>
          <IconButton edge="end" aria-label="comments" onClick={() => {
            handlerLink("https://api.whatsapp.com/send?phone=51921855508");
          }}>
            <WhatsAppIcon fontSize="large" />
          </IconButton>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4}>
      </Grid>
    </Grid>
  )
}

export default Contactanos