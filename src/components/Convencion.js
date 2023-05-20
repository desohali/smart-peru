import { Button, Chip, Divider, Grid, Typography } from '@mui/material';
import * as React from 'react';
import convencion from "../assets/images/convencion.jpg";
import { useNavigate } from 'react-router-dom';

const Convencion = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <div style={{ width: "100%", textAlign: "center" }}>
          <img width='100%' src={convencion} />
        </div>
      </Grid>
    </Grid>
  )
}

export default Convencion