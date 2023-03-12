import _ from "lodash";
import { useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import routes from "../../constants/routes";
import { getShippers } from '../../store/shipper/actions';

export default function Shippers(props) {
    const shippers = useSelector(state => state.shipper.list);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getShippers());
    }, [dispatch]);

    return (
        <ListGroup>
            {_.map(shippers, (item, i) => (
                <ListGroup.Item action key={i}>
                    <Link className="text-decoration-none" to={`${routes.shipper}/${item.id}`}>{item.name}</Link>
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}