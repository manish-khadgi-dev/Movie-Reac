import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const MovieCard = ({ movie = {} , func, showDelete  , handleOnClear, handleOnDelete}) => {
  // console.log(movie);
  const { Poster, Title, Year, imdbRating ,imdbID , cat} = movie;

  return (
    <Card style={{ width: "22rem" , marginTop: "10px", color:"black"}}
     className="movie-card" >
      <Card.Img variant="top" src={Poster} />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Text>
      
          <div className="fw-bold" > Released : {Year}</div>
          <div className="fw-bold" >  <span className="btn btn-warning"> Category : {cat} </span> </div> 
          <div className="fw-bold" >  Rating : {imdbRating} <i class="fa-regular fa-star"></i></div>
        </Card.Text>

        {
          showDelete ? ( <div className="d-grid">
        <Button onClick={()=> handleOnDelete(imdbID)} variant="danger"> Delete </Button>
       </div> 
       ) :(
       
        <div className="d-flex justify-content-between">
        <Button onClick={()=>func('happy')} variant="danger"> Happy </Button>
       
        <span className="icon">
          <i onClick={handleOnClear}  className="fa-solid fa-circle-xmark ">
            </i> </span>
      
        <Button onClick={()=>func('lazy')} variant="warning"> Lazy </Button>
        
      
        </div>
          
        )
}
      </Card.Body>
    </Card>
  );
};
