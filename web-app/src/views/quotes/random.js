import _ from "lodash";
import { useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getRandomQuote } from '../../store/quotes/actions';

export default function RandomQuotes(props) {
    const randomQuote = useSelector(state => state.quotes.randomQuote);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRandomQuote());
    }, [dispatch]);

    return (
        <Card>
            <Card.Body>
                {randomQuote?.content}
                <p className="text-end">--{randomQuote?.author}</p>
            </Card.Body>
        </Card>
    )
}