import React from "react";
import useSWR from "swr";
import axios from "axios";
import Loader from "./Loader";
import Errorpage from "./Errorpage"

const fetcher = (url) => axios.get(url).then((res) => res.data);

const Contact = () => {
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );

  // console.log(data)

  return (
    <div className="bg-success min-vh-100">
      <div className="border min-vh-100 d-flex flex-column justify-content-center align-items-center">
        {
          (() => {
            if (error) {
              return (
                <Errorpage />
              )
            } else if (isLoading) {
              return (
                <Loader />
              )
            } else {
              return (
                data.map((item, index) => (
                  <div key={index}>{item.name}</div>
                ))
              )
            }
          })()
        }
      </div>
    </div>
  );
};

export default Contact;
