import { Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { Footer } from './../../components/index'
import { Link } from 'react-router-dom';

import './style.css'

function HomePage() {
  return (
    <div className='app'>
      <Container
        maxWidth="md"
        sx={{
          marginY: '20px'
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={2}
        >
          <Grid
            item
            lg={12}
          >
            <Card>
              <Typography
                variant='h1'
                fontSize={30}
                padding={3}
              >
                Introdução ao Desenvolvimento Front-end com React
              </Typography>
            </Card>
          </Grid>

          <Grid
            item
            lg={4}
          >
            <Card>
              <CardMedia
                sx={{ height: 140 }}
                image='https://picsum.photos/id/1/600/600'
                title="O Curso"
              />

              <CardContent>
                <Typography variant="h5" sx={{ marginBottom: 2 }}>
                  O Nosso Curso
                </Typography>

                <Typography
                  variant='body2'
                  color="text.secondary"
                >
                  Este curso convida diferentes públicos a experimentarem o React,
                  uma das bibliotecas JavaScript mais utilizadas na atualidade.
                  Durante as aulas, vamos explorar o potencial da criação de
                  componentes dinâmicos e construir uma aplicação do zero a partir
                  das boas práticas de desenvolvimento front-end e do consumo de
                  APIs.
                </Typography>
              </CardContent>

              <CardActions
                sx={{ justifyContent: 'center', paddingBottom: 4 }}
              >
                <Link
                  className='btn-close'
                  to={'https://github.com/SergioRSanchez/curso-react-sesc'}
                  target='_blank'
                >
                  Repositório
                </Link>
              </CardActions>
            </Card>
          </Grid>

          <Grid
            item
            lg={4}
          >
            <Card>
              <CardMedia
                sx={{ height: 140 }}
                image='https://picsum.photos/id/3/600/600'
                title="Bem-vindo"
              />

              <CardContent>
                <Typography variant="h5" sx={{ marginBottom: 2 }}>
                  Projetos
                </Typography>

                <Typography
                  variant='body2'
                  color="text.secondary"
                >
                  Um projeto em negócio e ciência é normalmente definido como um
                  empreendimento, frequentemente envolvendo pesquisa ou desenho,
                  que tem como objetivo alcançar um resultado exclusivo. Em geral
                  um projeto possui três características fundamentais: tempo
                  (início e fim), recursos (pessoas, ferramentas etc) e trata de
                  algo que não existia anteriormente.
                </Typography>
              </CardContent>

              <CardActions
                sx={{ justifyContent: 'center', paddingBottom: 4 }}
              >
                <Link
                  className='btn-close'
                  to='/projects'
                >
                  Gerenciar Projetos
                </Link>
              </CardActions>
            </Card>
          </Grid>

          <Grid
            item
            lg={4}
          >
            <Card>
              <CardMedia
                sx={{ height: 140 }}
                image='https://picsum.photos/id/4/600/600'
                title="Tarefas"
              />

              <CardContent>
                <Typography variant="h5" sx={{ marginBottom: 2 }}>
                  Tarefas
                </Typography>

                <Typography
                  variant='body2'
                  color="text.secondary"
                >
                  Em gerenciamento de projetos, uma tarefa é uma atividade que
                  precisa ser realizada dentro de um período de tempo definido ou
                  por um prazo. Uma tarefa pode ser dividida em atribuições que
                  também devem ter uma data de início e fim definidas ou um prazo
                  para a conclusão.
                </Typography>
              </CardContent>

              <CardActions
                sx={{ justifyContent: 'center', paddingBottom: 4 }}
              >
                <Link
                  className='btn-close'
                  to='/tasks'
                >
                  Gerenciar Tarefas
                </Link>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container >

      <Footer />
    </div>
  )
}

export default HomePage;