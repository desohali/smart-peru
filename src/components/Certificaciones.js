import { LoadingButton } from '@mui/lab';
import { Avatar, Card, CardContent, CardHeader, Grid, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik';
import React from 'react'
import * as Yup from "yup";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import Swal from 'sweetalert2';
import { participantes } from '../helpers.js/reposteriaPasteleria';

const urlAPI = "https://rifas.desohali.com";

// schema form about me
const formikSchema = Yup.object().shape({
    dni: Yup.string().matches(/^[0-9]{8}$/, "INGRESE 8 DIGITOS NUMERICOS").required("DNI ES REQUERIDO !"),
});

const Certificaciones = () => {

    const [pdf, setPdf] = React.useState(undefined);
    const [participante, setParticipante] = React.useState({});

    React.useEffect(() => {

        const urlParams = new URLSearchParams(window.location.search);
        if (new RegExp("^[0-9]{8}").test(urlParams.get('dni'))) {

            formik.setFieldValue("dni", urlParams.get('dni'), false).then(() => {
                setTimeout(() => {
                    formik.submitForm();
                }, 800);
            });

        }
    }, []);

    const formik = useFormik({
        validateOnMount: true,
        initialValues: {
            dni: "",
        },
        validationSchema: formikSchema,
        onSubmit: async (values) => {

            const findParticipante = participantes.find((p) => p?.dni == values?.dni);
            if (!findParticipante) {
                Swal.fire(
                    'CERTIFICADO NO ENCONTRADO',
                    '',
                    'info'
                )
                return false;
            } else {
                setParticipante(findParticipante);
            }
            const formData = new FormData();
            formData.append("dni", findParticipante?.dni);
            formData.append("name", findParticipante?.nombres);
            formData.append("certificado", findParticipante?.certificado);

            const response = await fetch(`${urlAPI}/smart`, {
                method: "post",
                body: formData
            });
            const pdfBlob = await response.blob();
            const pdfUrl = URL.createObjectURL(pdfBlob);

            setPdf(pdfUrl);

        },
    });

    return (
        <Grid container spacing={1}>
            <Grid item xs />
            <Grid item xs={12} sm={12} md={11} lg={11}>

                <Card sx={{ width: "100%", mb: 3, mt: 1 }}>
                    <CardHeader

                        avatar={
                            <Avatar aria-label="recipe">
                                <WorkspacePremiumIcon />
                            </Avatar>
                        }
                        title={<Typography variant="h6" gutterBottom>
                            VALIDACIÓN DE CERTIFICADO :
                        </Typography>}
                        subheader="POR FAVOR INGRESE SU DNI ."
                    />
                    <CardContent>
                        <Grid container spacing={1}>

                            <Grid item xs={12} sm={12} md={4} lg={3}>
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

                                <LoadingButton
                                    fullWidth
                                    onClick={formik.handleSubmit}
                                    color='primary'
                                    variant='contained'
                                    loading={formik.isSubmitting}
                                    loadingPosition='start'
                                    startIcon={<ContentPasteSearchIcon />}>
                                    VERIFICAR
                                </LoadingButton>
                            </Grid>

                            <Grid item xs={12} sm={12} md={8} lg={9}>
                                {pdf && <div style={{ width: "100%", height: "100vh" }}>
                                    {window.innerWidth > 768
                                        ? <iframe src={pdf} width="100%" height="100%"></iframe>
                                        : <iframe src={`https://drive.google.com/viewerng/viewer?embedded=true&url=${urlAPI}/assets/images/${formik.values.dni}.pdf`} width="100%" height="100%"></iframe>
                                    }

                                </div>}
                            </Grid>


                        </Grid>

                    </CardContent>
                </Card>


            </Grid>
            <Grid item xs />
        </Grid >
    )
}

export default Certificaciones