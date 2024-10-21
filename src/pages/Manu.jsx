import React from 'react'
import Layout from '../components/Layout/Layout'
import menuList from "../data/data.json"
import { Box, Card, CardActionArea, CardMedia, CardContent, Typography, Grid } from '@mui/material'

const Menu = () => {
  return (
    <Layout>
      <Grid container spacing={2} direction={''}>
        {menuList.map(menu => (
          <Grid item xs={6} sm={5} md={3} lg={3} key={menu.name} >
            <Card sx={{ maxWidth: '100%' }}>
              <CardActionArea>
                <CardMedia
                  sx={{ minHeight: '400px' }}
                  component='img'
                  src={menu.image}
                  alt={menu.name}
                />
                <CardContent>
                  <Typography variant='h5' gutterBottom component='div'>
                    {menu.name}
                  </Typography>
                  <Typography variant='body2'>
                    {menu.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  )
}

export default Menu