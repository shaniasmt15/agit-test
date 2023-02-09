import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
// import ArrowLogo from "../src/assets/back.svg";

const UnivDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [dataList, setDataList] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch("http://universities.hipolabs.com/search?name=" + id)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res[0]);
      })
      .catch((err) => {
        console.log(err.message);
      });

    fetch("http://universities.hipolabs.com/")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setDataList(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  console.log(dataList);

  return (
    <div>
      <div className="container">
        <div className="card row mt-3" style={{ textAlign: "left" }}>
          <div className="card-body mt-3"></div>

          {data && (
            <div>
              <Link to="/univ">
                <img
                  alt="back"
                  src=""
                  style={{ width: "20px", height: "20px" }}
                />
              </Link>
              <br></br>
              <br></br>
              <h3>Universitas Details</h3>
              <br></br>
              <p>No: {location.state.no}</p>
              <p>Name: {data.name}</p>
              <p>Website : {data.domains}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UnivDetail;
