import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import LinkIcon from "@mui/icons-material/Link";

const multiCell = {
  padding: 30,
};
const columns = [
  {
    field: "image",
    headerName: "Image",
    sortable: false,
    width: 180,
    renderCell: (params) => (
      <div style={{ padding: 10 }}>
        <img
          src={params.value}
          alt={`Image for ${params.row.title}`}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    ),
  },
  {
    field: "title",
    headerName: "Title",
    width: 250,
    align: "center",
    sortable: false,
  },
  { field: "author", headerName: "Authors", width: 200, sortable: false },
  {
    field: "description",
    headerName: "Description",
    sortable: false,
    width: 400,
    cellClassName: "multiCell",
  },
  {
    field: "date",
    headerName: "Publication date",
    sortable: false,
    width: 100,
  },
  {
    field: "url",
    headerName: "Original URL",
    sortable: false,
    width: 80,
    renderCell: (params) => (
      <a
        href={params.value}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "grey", alignContent: "center" }}
      >
        <LinkIcon style={{ marginRight: "5px" }} />
      </a>
    ),
  },
];

export default function TableNews({ articles }) {
  const navigate = useNavigate();

  const rows = articles.map((article, index) => ({
    id: index + 1,
    title: article.title,
    author: article.author,
    description: article.description,
    date: new Date(article.publishedAt).toISOString().split("T")[0],
    url: article.url,
    image: article.urlToImage,
    content: article.content,
    source: article.source.name,
  }));

  const handleRowClick = (params) => {
    const article = params.row;
    navigate(`/article/${encodeURIComponent(article.title)}`, {
      state: article,
    });
  };

  return (
    <div style={{ padding: "0 40px" }}>
      <DataGrid
        //   columns={columns}
        columns={columns.map((column) => ({
          ...column,
          align: "center",
          editable: false,
        }))}
        rows={rows.map((row) => ({
          ...row,
          align: "center",
        }))}
        // rows={rows}
        pageSizeOptions={[5, 10]}
        // rowHeight={120}
        disableRowSelectionOnClick={true}
        disableColumnMenu={true}
        onRowClick={handleRowClick}
        showCellVerticalBorder={true}
        showColumnVerticalBorder={true}
        autoHeight={true}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
      />
    </div>
  );
}
