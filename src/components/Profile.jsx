import React, { useState, useEffect } from 'react';
import { gsap } from "gsap";
import useSWR from 'swr';
import { Axios } from 'axios';

const Profile = () => {
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#e77614", scale: 1.2 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#28a92b", scale: 1 });
  }

  const fetcher = (url) => {
    Axios.get(url).then((res) => res.data)
  }

  const {data, isLoading, error} = useSWR("https://jsonplaceholder.typicode.com/todos", fetcher);
  if (isLoading) {
    re
  }
  console.log(data);

  // const {data} = useQuery(['user'], ()=> {
  //   return Axios.get("https://jsonplaceholder.typicode.com/users").then((res) => res.data)
  // })
  return (
    <div className='min-vh-100 bg-success d-flex flex-column align-items-center'>
      <div className="p-4 d-none" onMouseEnter={onEnter} onMouseLeave={onLeave}>
        Hover Me
      </div>


    </div>
  )
}

export default Profile;