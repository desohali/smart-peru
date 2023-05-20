import { Grid } from '@mui/material';
import * as React from 'react';
import consultoria from "../assets/images/consultoria.jpg";
import { useNavigate } from 'react-router-dom';

const ConsultoriaDeNegocios = () => {

  React.useEffect(() => {
    let newImagenes;
    newImagenes = new Image();
    newImagenes.src = consultoria;
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <div style={{ width: "100%", textAlign: "center" }}>
          <img width='100%' src={consultoria} />
        </div>
      </Grid>
    </Grid>
  )
}

export default ConsultoriaDeNegocios