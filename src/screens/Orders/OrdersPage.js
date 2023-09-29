import React from 'react';
import './orders.css';

function OrdersPage() {
  return (
    <div>
      <div className='box'>
            <ul className="nav nav-tabs" role="tablist">
                <li role="presentation" className="active"><a href="#orders-section" aria-controls="orders-section" role="tab" data-toggle="tab">ORDERS</a></li>
                <li role="presentation"><a href="#delivered-section" aria-controls="delivered-section" role="tab" data-toggle="tab">DELIVERED</a></li>
                <li role="presentation"><a href="#cancelled-section" aria-controls="cancelled-section" role="tab" data-toggle="tab">CANCELLED</a></li>
            </ul>
            <div className="tab-content" id="content">
                <div role="tabpanel" className="tab-pane fade in active" id="orders-section">
                    <table style={{ borderCollapse: 'separate', borderSpacing: '20px' }}>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Reference Id</th>
                                <th>Customer Name</th>
                                <th>Address</th>
                                <th>Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>02/01/2023</td>
                                <td>63T7TP</td>
                                <td>Rick McKenzie</td>
                                <td>898 Loyal Station</td>
                                <td>$285.09</td>
                            </tr>
                            <tr>
                                <td>02/01/2023</td>
                                <td>63T7TP</td>
                                <td>Rick McKenzie</td>
                                <td>898 Loyal Station</td>
                                <td>$285.09</td>
                            </tr>
                            <tr>
                                <td>02/01/2023</td>
                                <td>63T7TP</td>
                                <td>Rick McKenzie</td>
                                <td>898 Loyal Station</td>
                                <td>$285.09</td>
                            </tr>
                            <tr>
                                <td>02/01/2023</td>
                                <td>63T7TP</td>
                                <td>Rick McKenzie</td>
                                <td>898 Loyal Station</td>
                                <td>$285.09</td>
                            </tr>
                            <tr>
                                <td>02/01/2023</td>
                                <td>63T7TP</td>
                                <td>Rick McKenzie</td>
                                <td>898 Loyal Station</td>
                                <td>$285.09</td>
                            </tr>
                            <tr>
                                <td>02/01/2023</td>
                                <td>63T7TP</td>
                                <td>Rick McKenzie</td>
                                <td>898 Loyal Station</td>
                                <td>$285.09</td>
                            </tr>
                            <tr>
                                <td>02/01/2023</td>
                                <td>63T7TP</td>
                                <td>Rick McKenzie</td>
                                <td>898 Loyal Station</td>
                                <td>$285.09</td>
                            </tr><tr>
                                <td>02/01/2023</td>
                                <td>63T7TP</td>
                                <td>Rick McKenzie</td>
                                <td>898 Loyal Station</td>
                                <td>$285.09</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div role="tabpanel" className="tab-pane fade" id="delivered-section">
                <table style={{ borderCollapse: 'separate', borderSpacing: '20px' }}>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Reference Id</th>
                                <th>Customer Name</th>
                                <th>Address</th>
                                <th>Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>02/01/2023</td>
                                <td>63T7TP</td>
                                <td>Rick McKenzie</td>
                                <td>898 Loyal Station</td>
                                <td>$285.09</td>
                            </tr>
                            <tr>
                                <td>02/01/2023</td>
                                <td>63T7TP</td>
                                <td>Rick McKenzie</td>
                                <td>898 Loyal Station</td>
                                <td>$285.09</td>
                            </tr>
                            <tr>
                                <td>02/01/2023</td>
                                <td>63T7TP</td>
                                <td>Rick McKenzie</td>
                                <td>898 Loyal Station</td>
                                <td>$285.09</td>
                            </tr>
                            <tr>
                                <td>02/01/2023</td>
                                <td>63T7TP</td>
                                <td>Rick McKenzie</td>
                                <td>898 Loyal Station</td>
                                <td>$285.09</td>
                            </tr>
                            <tr>
                                <td>02/01/2023</td>
                                <td>63T7TP</td>
                                <td>Rick McKenzie</td>
                                <td>898 Loyal Station</td>
                                <td>$285.09</td>
                            </tr>
                            <tr>
                                <td>02/01/2023</td>
                                <td>63T7TP</td>
                                <td>Rick McKenzie</td>
                                <td>898 Loyal Station</td>
                                <td>$285.09</td>
                            </tr>
                            <tr>
                                <td>02/01/2023</td>
                                <td>63T7TP</td>
                                <td>Rick McKenzie</td>
                                <td>898 Loyal Station</td>
                                <td>$285.09</td>
                            </tr><tr>
                                <td>02/01/2023</td>
                                <td>63T7TP</td>
                                <td>Rick McKenzie</td>
                                <td>898 Loyal Station</td>
                                <td>$285.09</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div role="tabpanel" className="tab-pane fade" id="cancelled-section">
                <table style={{ borderCollapse: 'separate', borderSpacing: '20px' }}>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Reference Id</th>
                                <th>Customer Name</th>
                                <th>Address</th>
                                <th>Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>02/01/2023</td>
                                <td>63T7TP</td>
                                <td>Rick McKenzie</td>
                                <td>898 Loyal Station</td>
                                <td>$285.09</td>
                            </tr>
                            <tr>
                                <td>02/01/2023</td>
                                <td>63T7TP</td>
                                <td>Rick McKenzie</td>
                                <td>898 Loyal Station</td>
                                <td>$285.09</td>
                            </tr>
                            <tr>
                                <td>02/01/2023</td>
                                <td>63T7TP</td>
                                <td>Rick McKenzie</td>
                                <td>898 Loyal Station</td>
                                <td>$285.09</td>
                            </tr>
                            <tr>
                                <td>02/01/2023</td>
                                <td>63T7TP</td>
                                <td>Rick McKenzie</td>
                                <td>898 Loyal Station</td>
                                <td>$285.09</td>
                            </tr>
                            <tr>
                                <td>02/01/2023</td>
                                <td>63T7TP</td>
                                <td>Rick McKenzie</td>
                                <td>898 Loyal Station</td>
                                <td>$285.09</td>
                            </tr>
                            <tr>
                                <td>02/01/2023</td>
                                <td>63T7TP</td>
                                <td>Rick McKenzie</td>
                                <td>898 Loyal Station</td>
                                <td>$285.09</td>
                            </tr>
                            <tr>
                                <td>02/01/2023</td>
                                <td>63T7TP</td>
                                <td>Rick McKenzie</td>
                                <td>898 Loyal Station</td>
                                <td>$285.09</td>
                            </tr><tr>
                                <td>02/01/2023</td>
                                <td>63T7TP</td>
                                <td>Rick McKenzie</td>
                                <td>898 Loyal Station</td>
                                <td>$285.09</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  );
}

export default OrdersPage;