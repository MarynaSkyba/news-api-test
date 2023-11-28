import { useEffect, useState } from "react";
import { fetchTopNews } from "../services/api";
import TableNews from "./TableNews";
import FilterNews from "./FilterNews";
import { Stack } from "@mui/material";

export default function HomePage() {
  const [articles, setArticles] = useState([]);
  const [filter, setFilter] = useState("");
  const [country, setCountry] = useState("us");
  const [category, setCategory] = useState("General");
  const [loading, setLoading] = useState("false");

  useEffect(() => {
    setLoading(true);
    fetchTopNews(country, filter, category).then((data) => {
      setArticles(data);
      setLoading(false);
    });
  }, [filter, category, country]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <>
      {articles && (
        <Stack style={{ flex: 1 }} spacing={1}>
          <FilterNews
            filter={filter}
            handleFilterChange={handleFilterChange}
            category={category}
            setCategory={setCategory}
            country={country}
            setCountry={setCountry}
          />
          <TableNews articles={articles} loading={loading} />
        </Stack>
      )}
    </>
  );
}
