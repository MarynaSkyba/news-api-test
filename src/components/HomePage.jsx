import { useEffect, useState } from "react";
import { fetchTopNews } from "../services/api";
import TableNews from "./TableNews";
import FilterNews from "./FilterNews";

export default function HomePage() {
  const [articles, setArticles] = useState([]);
  const [filter, setFilter] = useState("");
  const [country, setCountry] = useState("us");
  const [category, setCategory] = useState("General");

  useEffect(() => {
    fetchTopNews(country, filter, category).then((data) => {
      setArticles(data);
    });
  }, [filter, category, country]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <>
      {articles && (
        <div style={{ flex: 1 }}>
          <FilterNews
            filter={filter}
            handleFilterChange={handleFilterChange}
            category={category}
            setCategory={setCategory}
            country={country}
            setCountry={setCountry}
          />
          <TableNews articles={articles} />
        </div>
      )}
    </>
  );
}
