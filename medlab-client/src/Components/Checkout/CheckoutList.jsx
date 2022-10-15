import React from 'react';
import { Table } from 'reactstrap';

export default class CheckoutList extends React.Component {
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
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>PharmEasy</td>
            <td>17 OH Progesterone</td>
            <td className='CartList'>
                  1
            </td>
            <td>$ 25.00</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>PharmEasy</td>
            <td>17 OH Progesterone</td>
            <td className='CartList'>
                  1
            </td>
            <td>$ 25.00</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>PharmEasy</td>
            <td>17 OH Progesterone</td>
            <td className='CartList'>
                  1
            </td>
            <td>$ 25.00</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
