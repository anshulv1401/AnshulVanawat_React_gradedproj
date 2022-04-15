import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import IMovie from "../../model/IMovie";
import Rating from "../common/Rating";

type Props = {
    movie: IMovie
    path: string
};

const MovieListItem = ( { movie, path } : Props ) => {
    const { id, title, storyline, ratings, posterurl } = movie;

    const average = (arr : number[]) => arr.reduce((a,b) => a + b, 0) / arr.length;
    var rating = parseInt(average(ratings).toFixed(2), 10) / 2;

    var cardText = storyline.length > 100 ? storyline.substring(0, 100) + '...' : storyline;

    var toPath = `${path}/${title}`

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`${posterurl}`} />
            <Card.Body>
                <Card.Title className="d-flex justify-content-between">
                    <div className="text-xs">
                        {title}
                        <div>
                            <Rating rating={rating}/>
                            {rating} ({ratings.length} rated)
                        </div>
                    </div>
                    <div>
                        <Link to={toPath} className="btn btn-primary btn-sm">
                            More
                        </Link>
                    </div>
                </Card.Title>
                <Card.Text>
                    <span>
                        <strong>Story Line</strong>: {cardText}
                    </span>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default MovieListItem