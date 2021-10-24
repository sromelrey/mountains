/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./styles.scss";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

function MountainListPage(props) {
  const { FilterMountainByTitle, SortMountains } = props;
  const dispatch = useDispatch();
  const [searchInputValue, setSearchInputValue] = useState("");
  const [mountains, setMountains] = useState([]);
  const { mountains_list, filtered_mountains, sorted_mountains } = useSelector(
    ({ MountainPageReducer }) => MountainPageReducer
  );
  useEffect(() => {
    setMountains(mountains_list);
  }, []);

  useEffect(() => {
    if (searchInputValue.length > 0) {
      setMountains(filtered_mountains);
    } else {
      setMountains(mountains_list);
    }
  }, [filtered_mountains, mountains_list, searchInputValue]);

  useEffect(() => {
    if (sorted_mountains.length > 0) setMountains(sorted_mountains);
  }, [sorted_mountains]);

  const onChangeSearchInputValue = (e) => {
    setSearchInputValue(e.target.value);
    FilterMountainByTitle(e.target.value);
  };
  const onSelectOptionSort = (e) => {
    SortMountains(e.target.value);
  };

  return (
    <div className="tiles">
      <div className="menu_input">
        <form className="search_group">
          <FontAwesomeIcon
            style={{ marginLeft: 5 }}
            size={"lg"}
            icon={faSearch}
          />
          <input
            className="group"
            value={searchInputValue}
            onChange={onChangeSearchInputValue}
            placeholder="Search for mountains"
          />
        </form>

        <select className="sort" onChange={onSelectOptionSort}>
          <option defaultValue="Sort a A - Z" hidden>
            Sort a A - Z
          </option>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>

      <ul className="row">
        {mountains.map((mountain, index) => (
          <li
            className="card"
            onClick={() => dispatch(push(`/${mountain.slug}`))}
            key={index}
          >
            <img src={mountain?.image_link} alt="Avatar" className="img" />
            <div className="frame">
              <p className="heading">{mountain?.title}</p>
              <p className="body">{mountain?.title_long}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="pagination">
        <div className="pagination_button">
          <button style={{ borderRadius: "10px 0px 0px 10px" }}>1</button>
          <button>2</button>
          <button>3</button>
          <button>...</button>
          <button style={{ borderRadius: "0px 10px 10px 0px" }}>9</button>
        </div>
        <div className="show_next">
          <button style={{ borderRadius: 5 }}>Show Next</button>
        </div>
      </div>
    </div>
  );
}

export default MountainListPage;
