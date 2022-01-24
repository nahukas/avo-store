import Link from 'next/link';
import { Segment, Container, Grid, List, Header } from 'semantic-ui-react';

import styles from '@styles/components/footer.module.scss';

const Footer: React.FC = () => (
  <footer className={styles.Footer}>
    <Segment vertical as='footer'>
      <Container text>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as='h4' content='Who we are' />
              <List>
                <List.Item>
                  <Link href='/about'>
                    <a>About</a>
                  </Link>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={8}>
              <Header as='h4'>Social Networks</Header>
              <List horizontal style={{ display: 'flex' }}>
                <List.Item
                  icon='twitter'
                  style={{ display: 'flex' }}
                  content={<a href='https://twitter.com/devNahuel'>Twitter</a>}
                />
                <List.Item
                  icon='github'
                  style={{ display: 'flex' }}
                  content={
                    <a href='https://github.com/nahukas/avo-nextjs'>GitHub</a>
                  }
                />
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <div className={styles.Colophon}>
          <p className={styles.ColophonyEntry}>
            Icons made by{' '}
            <a
              target='_blank'
              href='https://www.flaticon.com/authors/freepik'
              title='Freepik'
            >
              Freepik
            </a>
            {' from '}
            <a
              target='_blank'
              href='https://www.flaticon.com/'
              title='Flaticon'
            >
              www.flaticon.com
            </a>
          </p>
          <p className='colophon-entry'>
            Avocado images taken from{' '}
            <a
              className='acnor'
              target='_blank'
              href='https://www.californiaavocado.com/avocado101/avocado-varieties'
              title='California Avocado'
            >
              Avocado 101
            </a>
            {' at '}
            <a
              target='_blank'
              href='https://www.californiaavocado.com'
              title='Flaticon'
            >
              California Avocado
            </a>
          </p>
        </div>
      </Container>
    </Segment>
  </footer>
);

export default Footer;
