import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const UnivList = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const LoadDetail = (id, no) => {
    navigate("/univ/detail/" + id, { state: { no: no } });
  };

  useEffect(() => {
    fetch("http://universities.hipolabs.com/search?country=Indonesia")
      .then((res) => {
        // console.log(res.json());
        return res.json();
      })
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="container ">
      <div className="card mt-3">
        <div className="card-title">
          <h2>Welcome, </h2>
        </div>
        <div className="card-body">
          <div className="divbtn mb-3"></div>
          <table className="table table-bordered mt-1">
            <thead className="bg-light text-dark">
              <tr>
                <td>No</td>
                <td>Name</td>
                <td>Website</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((item, idx) => (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.web_pages}</td>
                    <td>
                      <a
                        onClick={() => {
                          console.log(item);
                          LoadDetail(item.name, idx + 1);
                        }}
                        className="btn btn-primary"
                      >
                        Details
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UnivList;
