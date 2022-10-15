import React from 'react';
import './CartItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash,
  faMinus,
  faPlus
} from '@fortawesome/free-solid-svg-icons';
import {
  Table,
  Button
} from 'reactstrap';

export default class CartItem extends React.Component {
  render() {
    return (
      <Table responsive bordered style={{ width: '1000px' }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Laboratory Name</th>
            <th>Test Name</th>
            <th>Patient Quantity</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>PharmEasy</td>
            <td>17 OH Progesterone</td>
            <td className='CartList'>
                <FontAwesomeIcon icon={faPlus} size="sm" className='QuantityButton' />
                  1
                <FontAwesomeIcon icon={faMinus} size="sm" className='QuantityButton' />
            </td>
            <td>$ 25.00</td>
            <td>
              <Button outline color="danger">
                <FontAwesomeIcon icon={faTrash} size="sm" />
              </Button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>PharmEasy</td>
            <td>17 OH Progesterone</td>
            <td className='CartList'>
                <FontAwesomeIcon icon={faPlus} size="sm" className='QuantityButton' />
                  1
                <FontAwesomeIcon icon={faMinus} size="sm" className='QuantityButton' />
            </td>
            <td>$ 25.00</td>
            <td>
              <Button outline color="danger">
                <FontAwesomeIcon icon={faTrash} size="sm" />
              </Button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>PharmEasy</td>
            <td>17 OH Progesterone</td>
            <td className='CartList'>
                <FontAwesomeIcon icon={faPlus} size="sm" className='QuantityButton' />
                  1
                <FontAwesomeIcon icon={faMinus} size="sm" className='QuantityButton' />
            </td>
            <td>$ 25.00</td>
            <td>
              <Button outline color="danger">
                <FontAwesomeIcon icon={faTrash} size="sm" />
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
