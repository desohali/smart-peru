import { Grid } from '@mui/material';
import * as React from 'react';
import cursos from "../assets/images/cursos.jpg";
import { useNavigate } from 'react-router-dom';


const CursosOnline = () => {

  React.useEffect(() => {
    let newImagenes;
    newImagenes = new Image();
    newImagenes.src = cursos;
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <div style={{ width: "100%", textAlign: "center" }}>
          <img width='100%' src={cursos} />
        </div>
      </Grid>
    </Grid>
  )
}

export default CursosOnline