import { Alert, Button, Grid } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
const urlAPI = "https://yocreoquesipuedohacerlo.com";

const CertificacionesUpload = () => {

    const imagenRef = React.useRef();

    const { clave } = useParams();
    if (!["ejpv2024"].includes(clave)) {
        return <Alert severity="error">
            Error 403, Forbidden indica que no tienes permiso para acceder a una página o recurso
        </Alert>
    }

    return (
        <Grid container spacing={1} style={{ padding: "1rem" }}>
            <Grid item xs={12} sm={12} md={3} lg={3}></Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <input ref={imagenRef} accept=".pdf" type='file' style={{ margin: "1rem 0rem" }}></input>
                <Button onClick={async () => {

                    const [imagen] = imagenRef?.current?.files;
                    if (!imagen) {
                        Swal.fire(
                            'SELECCIONE ARCHIVO PDF !',
                            '',
                            'error'
                        );
                        return false;
                    }
                    const formData = new FormData();
                    formData.append("imagen", imagen);

                    const response = await fetch(`${urlAPI}/uploadCertification`, {
                        method: "post",
                        body: formData
                    });
                    const json = await response.json();
                    Swal.fire(
                        'CERTIFICADO CARGADO CORRECTAMENTE !',
                        '',
                        'success'
                    );
                }} fullWidth variant="contained">Cargar Archivo</Button>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3}></Grid>
        </Grid>

    )
}

export default CertificacionesUpload