import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Grid, TextField, Typography } from '@mui/material';
import * as React from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { LoadingButton } from '@mui/lab';
import SendIcon from '@mui/icons-material/Send';
import foro from "../assets/images/foro.jpg";
import convencion from "../assets/images/convencion.jpg";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ImageIcon from '@mui/icons-material/Image';
import { handleArrayFiles } from '../helpers.js/helpers';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
import { useSetRegistrarParticipanteMutation } from '../services/participantesApi';

// schema form about me
const formikSchema = Yup.object().shape({
  nombresCompletos: Yup.string().required("NOMBRES COMPLETOS ES REQUERIDO !"),
  celular: Yup.string().matches(/^[0-9]{9}$/, "INGRESE 9 DIGITOS NUMERICOS").required("CELULAR ES REQUERIDO !"),
  dni: Yup.string().matches(/^[0-9]{8}$/, "INGRESE 8 DIGITOS NUMERICOS").required("DNI ES REQUERIDO !"),
  vaucher: Yup.array(),
});

const RegistroDeParticiante = () => {

  const { evento } = useParams();

  const [registrarParticipante, { data, isLoading, error }] = useSetRegistrarParticipanteMutation();

  React.useEffect(() => {
    let newImagenes;
    if (["convencion"].includes(evento)) {
      newImagenes = new Image();
      newImagenes.src = convencion;
    } else {
      newImagenes = new Image();
      newImagenes.src = foro;
    }

  }, []);


  const inputAttachRef = React.useRef();
  const [vaucher, setVaucher] = React.useState([]);

  // formik
  const formik = useFormik({
    validateOnMount: true,
    initialValues: {
      evento: evento,
      nombresCompletos: '',
      celular: '',
      dni: '',
      vaucher: []
    },
    validationSchema: formikSchema,
    onSubmit: async (values) => {
      if (!Object.entries(values).some(([, value]) => /\S{3,}/.test(value))) return false;
      if (!vaucher.length) {
        Swal.fire(
          'ADJUNTAR VAUCHER ES REQUERIDO !',
          'POR FAVOR ADJUNTAR VAUCHER DE PAGO, GRACIAS .',
          'info'
        )
        return false;
      }

      const formData = new FormData();
      for (const key in values) {
        formData.append(key, values[key]);
      }
      formData.append('vaucher', vaucher[0]?.originalFile);

      await registrarParticipante(formData).unwrap();


      Swal.fire(
        'ENVIADO CON EXITO !',
        'VALIDAREMOS SUS DATOS Y RECIBIRA UN CORREO DE CONFIRMACION, GRACIAS .',
        'success'
      ).then(() => {
        formik.resetForm();
        setVaucher([]);
      });
    },
  });

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <div style={{ width: "100%", textAlign: "center" }}>
          <img width='100%' src={["convencion"].includes(evento) ? convencion : foro} />
        </div>
      </Grid>

      <Grid item xs={12} sm={12} md={2} lg={2}></Grid>
      <Grid item xs={12} sm={12} md={8} lg={8}>

        <Card sx={{ width: "100%", mb: 3, mt: 1 }}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe">
                <AssignmentIndIcon />
              </Avatar>
            }
            title="REGISTRO DE PARTICIPANTE :"
            subheader="POR FAVOR LLENE TODOS LOS CAMPOS ."
          />
          <CardContent>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField
                  inputProps={{ maxLength: 200 }}
                  fullWidth
                  size='small'
                  id='nombresCompletos'
                  label='NOMBRES COMPLETOS'
                  variant='outlined'
                  sx={{ mb: 1 }}
                  value={formik.values.nombresCompletos}
                  onChange={formik.handleChange}
                  error={formik.touched.nombresCompletos && Boolean(formik.errors.nombresCompletos)}
                  helperText={formik.touched.nombresCompletos && formik.errors.nombresCompletos}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField
                  inputProps={{ maxLength: 9 }}
                  fullWidth
                  size='small'
                  id='celular'
                  label='CELULAR'
                  variant='outlined'
                  sx={{ mb: 1 }}
                  value={formik.values.celular}
                  onChange={formik.handleChange}
                  error={formik.touched.celular && Boolean(formik.errors.celular)}
                  helperText={formik.touched.celular && formik.errors.celular}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField
                  inputProps={{ maxLength: 8 }}
                  fullWidth
                  size='small'
                  id='dni'
                  label='DNI'
                  variant='outlined'
                  sx={{ mb: 1 }}
                  value={formik.values.dni}
                  onChange={formik.handleChange}
                  error={formik.touched.dni && Boolean(formik.errors.dni)}
                  helperText={formik.touched.dni && formik.errors.dni}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <input
                  type='file'
                  accept='image/*'
                  style={{ display: "none" }}
                  onChange={({ target }) => {
                    const dispathSetFiles = (value) => {
                      setVaucher(value);
                    };

                    handleArrayFiles(
                      Array.prototype.slice.call(target.files),
                      {},
                      dispathSetFiles
                    );

                  }}
                  ref={inputAttachRef} />
                <Button onClick={() => inputAttachRef.current.click()} startIcon={<ImageIcon />} fullWidth variant="contained">
                  ADJUNTAR VAUCHER
                </Button>

                {(vaucher || []).map((file, i) => (
                  <img key={i} width='100%' src={file.miniFile} />
                ))}
              </Grid>

              <Grid item xs={12} sm={12} md={3} lg={3}></Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <LoadingButton
                  fullWidth
                  onClick={formik.handleSubmit}
                  /* disabled={!formik.isValid || formik.isSubmitting} */
                  color='primary'
                  variant='contained'
                  loading={formik.isSubmitting}
                  loadingPosition='start'
                  startIcon={<SendIcon />}>
                  ENVIAR
                </LoadingButton>
              </Grid>
              <Grid item xs={12} sm={12} md={3} lg={3}></Grid>
            </Grid>
          </CardContent>
        </Card>


      </Grid>
      <Grid item xs={12} sm={12} md={2} lg={2}></Grid>
    </Grid>
  )
}

export default RegistroDeParticiante