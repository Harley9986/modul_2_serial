import React, { useState, useEffect } from "react";
import { fetchAll, fetchYears } from "../fakeApi/episodesApi";
import { paginate } from "../utils/paginate";
import Episode from "./episode";
import Pagination from "./pagination";
import GroupList from "./groupList";

const EpisodesList = () => {
  const [episodes, setEpisodes] = useState([]);
  const [years, setYears] = useState([]);
  const [filter, setFilter] = useState();
  const count = episodes.length;
  const pageSize = 6;

  const [currentPage, setCurrentPage] = useState(1);

  const getEpisodes = (year) => {
    fetchAll(year).then((response) => setEpisodes(response));
    setCurrentPage(1);
  };

  useEffect(() => {
    getEpisodes(filter);
  }, [filter]);

  useEffect(() => {
    fetchYears().then((response) =>
      setYears([...response, { text: "Все эпизоды" }]),
    );
  }, []);

  const handelFilterChange = (filter) => {
    setFilter(filter);
  };

  const handelPageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const pageEpisodes = paginate(episodes, currentPage, pageSize);

  const handelReset = () => {
    setFilter();
  };

  return (
    <div className="container pt-2">
      <div className="row">
        <div className="col-4">
          {!!years.length && (
            <>
              <GroupList
                items={years}
                filter={filter}
                onChangeFilter={handelFilterChange}
              />
              <hr />
              <div className="d-grid">
                <button onClick={handelReset} className="btn btn-m btn-primary">
                  Очистить
                </button>
              </div>
            </>
          )}
        </div>
        <div className="col-8">
          <div className="row">
            {pageEpisodes.map((episode) => (
              <Episode key={episode.id} {...episode} />
            ))}
          </div>
          <div className="row">
            <Pagination
              itemsCount={count}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={handelPageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpisodesList;
