import { Component } from "react";
import { Alert, Col, Row } from "react-bootstrap";
import { RouteComponentProps } from "react-router";
import IMovie from "../../model/IMovie";
import { getMovies } from "../../services/movies";
import { LoadingStatus } from "../../utils/types";
import LoadingIndicator from "../common/LoadingIndicator";
import MovieListItem from "./MovieListItem";

type State = {
    status: LoadingStatus,
    movies?: IMovie[],
    error?: Error
}

class MoviesList extends Component<RouteComponentProps, State> {
    state : State = {
        status: 'LOADING'
    };

    render() {
        const { status, movies, error } = this.state;

        let el;

        switch( status ) {
            case 'LOADING':
                el = (
                    <LoadingIndicator size="large" message="Fetching..." />
                );
                break;
            case 'ERROR':
                el = (
                    <Alert variant="danger">
                        {error?.message}
                    </Alert>
                );
                break;
            case 'LOADED':
                el = (
                    <Row xs={2} md={3} lg={5}>
                        {
                            movies?.map(
                                movie => (
                                    <Col key={movie.id} className="d-flex align-items-stretch my-3">
                                        <MovieListItem movie={movie} path={this.props.match.path}/>
                                    </Col>
                                )
                            )
                        }
                    </Row>
                );

                break;
            default:
                break;
        }

        return el;
    }

    async componentDidMount() {
        this.setState({
            status: 'LOADING'
        });

        try {
            const movies = await getMovies(this.props.match.path);
            this.setState({
                status: 'LOADED',
                movies
            });
        } catch( error ) {
            this.setState({
                status: 'ERROR',
                error: error as Error
            });
        }
    }
}

export default MoviesList;