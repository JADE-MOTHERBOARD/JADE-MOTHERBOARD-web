import React from 'react';
import { Link } from 'react-router-dom'; 
import data from './data';

function Fulfillments() { 
	return (
		<div className="content content-margined">
			<div className="order-header">
				<h3>Fullfillment</h3>
			</div>
			<div className="fulfillment-list">
				<table className="table">
					<thead>
						<tr>
							<th>ID</th>
							<th>DATE</th>
							<th>SHIPPING STATUS</th>
							<th>USER</th>
							<th>STATUS</th>
							<th>DELIVERED</th>
							<th>DELIVERED AT</th>
						</tr>
					</thead>
					<tbody>
						{data.fulfillment.map((fulfillment) => (
							 <tr key={fulfillment._id} className={fulfillment.isShipped ? '' : 'not-shipped'}>
								<td>{fulfillment._id}</td>
								<td>{fulfillment.createdAt}</td>
								<td>{fulfillment.isShipped.toString()}</td>
								<td>{fulfillment.user.name}</td>
								<td>{fulfillment.isDelivered.toString()}</td>
								<td>{fulfillment.deliveredDate}</td>
								<td></td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>);
};

export default Fulfillments;
