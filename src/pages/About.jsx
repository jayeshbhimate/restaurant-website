  import React from 'react'
  import Layout from '../components/Layout/Layout'
  import { Box, Typography } from '@mui/material'
import { Bolt } from '@mui/icons-material'

  const About = () => {
    return (
      <Layout>
          <Box sx={{
            my:15,
            p:2,
            textAlign: 'center',
            "& h4":{
              fontWeight: 'bold',
              my:2,
              fontSize:'2rem'
            },"& p":{
              textAlign: 'justify',  
            },
            "@media (max-width:600px)":{
              m:0,
              "& h4":'1.5rem'
            }
          }}>
            <Typography variant='h4'>
              Welcome To My Resturant
            </Typography>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis modi ut amet sint iusto. Cum itaque nemo libero aliquam perspiciatis? Ab officiis molestias ut ratione excepturi, similique exercitationem sequi dolor porro quo eligendi? Numquam veritatis, exercitationem ipsam architecto iusto quod, illo saepe, adipisci blanditiis ad temporibus quia tenetur ea! Natus cumque quod rerum sapiente libero tempore perspiciatis nemo voluptate excepturi eaque accusamus delectus nulla reprehenderit laborum, laboriosam vel nostrum iusto magnam quas non molestias quae itaque a. Explicabo doloremque quam facere illum expedita, consectetur quod magnam iste, pariatur eaque tenetur cumque est vel nihil ullam in tempora aliquid laudantium quos?
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fugiat quasi dicta dignissimos repudiandae doloribus necessitatibus eum! Corporis nisi quos reiciendis doloribus assumenda sed distinctio veritatis perspiciatis magni necessitatibus reprehenderit officia animi, non nemo, odio exercitationem. Fugiat excepturi molestiae accusamus, quibusdam recusandae commodi. Qui dicta dolorum optio numquam? Distinctio commodi molestias illum tempore tempora, aperiam, itaque architecto, dicta accusantium pariatur quaerat. Reprehenderit commodi eius laudantium? Iusto voluptatibus asperiores in aperiam accusamus illo doloribus inventore unde reprehenderit corrupti eos magni, ducimus nostrum commodi quas molestiae voluptatem eius, minima itaque tenetur saepe vero quod culpa. Beatae veritatis praesentium voluptates asperiores facere? Commodi?
            </p>
            
          </Box>
      </Layout>
    )
  }

  export default About