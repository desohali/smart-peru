import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Alert, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useGetParticipantesQuery } from '../services/participantesApi';

const Administracion = () => {
  const { password } = useParams();

  const [participantes, setParticipantes] = React.useState([]);

  const { data, isLoading, error } = useGetParticipantesQuery();
  React.useEffect(() => {
    if (data) setParticipantes(data);
  }, [data]);

  const responseAlParticipante = async (item, estado) => {


    const { isConfirmed } = await Swal.fire(
      'CONFIRMAR !',
      `¿ ESTA SEGURO DE ENVIAR EMAIL DE "${estado}" ?`,
      'question'
    );
    if (isConfirmed) {
      /* const response = await fetch("https://yocreoquesipuedohacerlo.com/listarParticipantes", {
      method: "post"
    });
    const json = await response.json();
    console.log('json', json); */

      Swal.fire(
        'ENVIADO CON EXITO !',
        'SE ENVIO UN EMAIL AL CORREO DEL PARTICIPANTE .',
        'success'
      );
    }


  }

  if (!["sp20232014"].includes(password)) {
    return <Alert severity="info">CLAVE INCORRECTA O NO AUTORIZADO !</Alert>
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">VAUCHER</TableCell>
            <TableCell align="center">NOMBRES COMPLETOS</TableCell>
            <TableCell align="center">CELULAR</TableCell>
            <TableCell align="center">DNI</TableCell>
            <TableCell align="center">EMAIL</TableCell>
            <TableCell align="center">EVENTO</TableCell>
            <TableCell align="center">EXITO</TableCell>
            <TableCell align="center">NO EXITO</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {participantes.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">
                <img width='100px' src={row.urlVaucher} />
              </TableCell>
              <TableCell align="center">{row.nombresCompletos}</TableCell>
              <TableCell align="center">{row.celular}</TableCell>
              <TableCell align="center">{row.dni}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.evento}</TableCell>
              <TableCell align="right">
                <Button onClick={() => {
                  responseAlParticipante(row, "EXITO");
                }} variant="contained" color='success'>ENVIAR</Button>
              </TableCell>
              <TableCell align="center">
                <Button onClick={() => {
                  responseAlParticipante(row, "NO EXITO");
                }} variant="contained" color='error'>ENVIAR</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Administracion