import _ from "lodash";
import { useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { searchQuotes } from '../../store/quotes/actions';

export default function AuthorQuotes(props) {
    const authorQuotes = useSelector(state => state.quotes.authorQuotes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(searchQuotes('Albert Einstein'));
    }, [dispatch]);

    return (
        <div>
            <ListGroup>
                {_.map(authorQuotes, (item, i) => (
                    <ListGroup.Item key={i}>
                        {item.content}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    )
}