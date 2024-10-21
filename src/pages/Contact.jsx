import React from 'react';
import Layout from '../components/Layout/Layout';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 6,
          ml: 4,
          "& h4": { fontWeight: "bold", mb: 2 },
          "@media (max-width:600px)": {
            mt: 3,
            mb: 5,
            mx: 2,
            "& p": { textAlign: 'justify' },
            '& h4': {
              fontSize: "30px"
            }
          }
        }}
      >
        <Typography variant='h4'>Contact My Restaurant</Typography>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet quos amet iusto eius omnis voluptatibus, sequi rem nobis esse minus, beatae repudiandae facere consectetur aut. Sit dolores rerum illum perspiciatis.
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "500px",
          '@media (max-width:600px)': {
            width: 'auto', m: 2,
          }
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label='contact-table'>
            <TableHead>
              <TableRow>
                <TableCell sx={{ bgcolor: 'black', color: 'white' }} align="center">
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: 'red', pt: 1 }} /> 1800-00-0000 (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <EmailIcon sx={{ color: 'skyblue', pt: 1 }} /> help@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: 'green', pt: 1 }} /> 8459977000
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
}

export default Contact;
