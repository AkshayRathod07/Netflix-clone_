import Row from "./Row";
import "./App.css";
import requests from "./request";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      < Banner />

      

      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow={true}></Row>
      
      <Row title="TOp Rated" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row title="NETFLIX ORIGINALS " fetchUrl={requests.fetchNetflixOriginals} ></Row>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}></Row>
    </div>
  );
}

export default App;
 