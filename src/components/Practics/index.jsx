import { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Practics() {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2023-04-08&sortBy=publishedAt&apiKey=39c5cc20ab7343b5ae242b9a1141fb55"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setState(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="container d-flex justi">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif"
          alt=""
        />
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        {state?.articles.length > 0 &&
          state?.articles.map((item, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <div className="card"  style={{border: "none", boxShadow:"0px 5px 10px 2px rgba(34, 60, 80, 0.2)", borderRadius:""}}>
                <img
                  src={item.urlToImage}
                  className="card-img-top"
                  alt={item.title}
                />
                <div className="card-body card-height">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.content}</p>
                  <a
                    href={item.url}
                    target="_blank"
                    className="btn btn-primary"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Practics;
