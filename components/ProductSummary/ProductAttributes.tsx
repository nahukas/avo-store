import { Header, Divider, Table } from 'semantic-ui-react';

import styles from '@styles/components/product-attributes.module.scss';

const ProductAttributes = ({
  description,
  ...otherAttributes
}: TProductAttributes) => (
  <section className='container'>
    <Header as='h3'>About this avocado</Header>
    <p>{description}</p>

    <Divider />

    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan='2'>Attributes</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body className='pindonguita'>
        {Object.keys(otherAttributes).map((key) => (
          <Table.Row key={key}>
            <Table.Cell className={styles.attrName}>{key}</Table.Cell>
            <Table.Cell>
              {otherAttributes[key as keyof typeof otherAttributes]}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  </section>
);

export default ProductAttributes;
