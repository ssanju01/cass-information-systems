import _ from "lodash";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getShipperById } from '../../store/shipper/actions';
import { withRouter } from '../../utils/withRouter';

function ShipperDetails(props) {
    const { params } = props;
    const shipperDetails = useSelector(state => state.shipper.details);
    const dispatch = useDispatch();
    const { id } = params;
    useEffect(() => {
        dispatch(getShipperById(id));
    }, [dispatch, id]);

    return (
        <Table striped hover size="sm">
            <thead>
                <tr>
                    <th>Shipment Id</th>
                    <th>Shipper Name</th>
                    <th>Carrier Name</th>
                    <th>Shipment Description</th>
                    <th>Shipment Weight</th>
                    <th>Shipment Rate Description</th>
                </tr>
            </thead>
            <tbody>
                {_.map(shipperDetails, (item, i) => (
                    <tr key={i}>
                        <td>{item.shipmentId}</td>
                        <td>{item.shipperName}</td>
                        <td>{item.carrierName}</td>
                        <td>{item.shipmentDescription}</td>
                        <td>{item.shipmentWeight}</td>
                        <td>{item.shipmentRateDescription}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default withRouter(ShipperDetails);