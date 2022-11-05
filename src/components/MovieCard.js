import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const MovieCard = ({ movie = {} , func}) => {
  // console.log(movie);
  const { Poster, Title, Year, imdbRating , Plot } = movie;

  return (
    <Card style={{ width: "18rem" , marginTop: "10px", color:"black"}}>
      <Card.Img variant="top" src={Poster} />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Text>
          <div className=""> <p>  {Plot} </p> </div>
          <div className="fw-bold" > Released : {Year}</div>
          <div className="fw-bold" >  Rating : {imdbRating} <i class="fa-regular fa-star"></i></div>
        </Card.Text>
        <div className="d-flex justify-content-between">
        <Button onClick={()=>func('happy')} variant="danger"> Happy </Button>
        <Button onClick={()=>func('lazy')} variant="warning"> Lazy </Button>
       
        </div>
      </Card.Body>
    </Card>
  );
};
