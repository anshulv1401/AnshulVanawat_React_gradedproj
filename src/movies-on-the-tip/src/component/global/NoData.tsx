import { Container, Image } from "react-bootstrap";

const NoData = () => {
    return (
        <Container>
            <h1>No Data</h1>
            <Image fluid={true} src="https://i.pinimg.com/originals/49/e5/8d/49e58d5922019b8ec4642a2e2b9291c2.png" alt="No Data found"/>
        </Container>
    );
};

export default NoData;