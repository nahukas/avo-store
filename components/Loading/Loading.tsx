import { Loader } from 'semantic-ui-react';

const Loading: React.FC = () => (
  <div>
    <Loader active inline='centered'>
      Loading...
    </Loader>
  </div>
);

export default Loading;
