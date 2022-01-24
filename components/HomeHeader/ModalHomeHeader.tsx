import { Grid, Header } from 'semantic-ui-react';

import { PosMeMuero } from '@components/SVGIcons';

const ModalHeaderContent: React.FC = () => (
  <div className='container'>
    <Grid columns={2}>
      <Grid.Row verticalAlign={'middle'}>
        <Grid.Column width='5'>
          <PosMeMuero size='154px' />
        </Grid.Column>
        <Grid.Column width='11'>
          <Header as='h2'>You killed the avocado</Header>
          <p>You are curious human being.</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default ModalHeaderContent;
