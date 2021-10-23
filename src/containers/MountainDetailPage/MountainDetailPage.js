/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import "./styles.scss";
import { useSelector } from "react-redux";

const MountainDetailPage = (props) => {
  const { GetMountainPageDetailsBySlug } = props;
  const { mountain_details } = useSelector(
    ({ MountainPageReducer }) => MountainPageReducer
  );

  useEffect(() => {
    GetMountainPageDetailsBySlug(props.match.params.slug);
  }, []);

  return (
    <div className="detail">
      <div className="container">
        <img src={mountain_details?.image_link} alt="Avatar" />
        <div className="description">
          <p className="title">{mountain_details?.title}</p>
          <p className="body">{mountain_details?.title_long}</p>
        </div>
      </div>
    </div>
  );
};

export default MountainDetailPage;
