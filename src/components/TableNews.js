import { useNavigate } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import CircularProgress from "@mui/material/CircularProgress";
import LinkIcon from "@mui/icons-material/Link";
import noImg from "../img/noimage.jpeg";

function TextCell({ value }) {
  return (
    <div>
      {value
        ? value.length > 100
          ? value.slice(0, 90)
          : value
        : "No description"}
      ...
    </div>
  );
}

function TitleCell({ value }) {
  return (
    <Typography variant="body2">
      {value ? (value.length > 90 ? value.slice(0, 70) : value) : "No title"}...
    </Typography>
  );
}

function AuthorCell({ value }) {
  return (
    <Typography variant="body2">
      {value ? (value.length > 90 ? value.slice(0, 70) : value) : "No Authors"}
      ...
    </Typography>
  );
}

const columns = [
  {
    field: "image",
    headerName: "Image",
    headerClassName: "super-app-theme--header",
    sortable: false,
    flex: 2,

    renderCell: (params) => {
      const imageUrl = params.value;

      if (imageUrl) {
        return (
          <Box style={{ padding: 10 }}>
            <img
              src={imageUrl}
              alt={`Image for ${params.row.title}`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
        );
      } else {
        return (
          <Box style={{ padding: 10 }}>
            <img
              src={noImg}
              alt="no image"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
        );
      }
    },
  },
  {
    field: "title",
    headerName: "Title",
    headerClassName: "super-app-theme--header",
    sortable: false,
    flex: 3,
    renderCell: (params) => <TitleCell {...params} />,
  },
  {
    field: "author",
    headerClassName: "super-app-theme--header",
    headerName: "Authors",
    sortable: false,
    flex: 2,
    renderCell: (params) => <AuthorCell {...params} />,
  },
  {
    field: "description",
    headerClassName: "super-app-theme--header",
    headerName: "Description",
    sortable: false,
    flex: 3,
    renderCell: (params) => <TextCell {...params} />,
  },
  {
    field: "date",
    headerClassName: "super-app-theme--header",
    headerName: "Publication date",
    sortable: false,
    flex: 1.5,
  },
  {
    field: "url",
    headerClassName: "super-app-theme--header",
    headerName: "Original URL",
    sortable: false,
    flex: 1.2,

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

export default function TableNews({ articles, loading }) {
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

  return loading ? (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        color: "secondary.main",
      }}
    >
      <CircularProgress color="inherit" size={80} />
    </Box>
  ) : (
    <Box style={{ padding: "0 40px" }}>
      {rows.length === 0 ? (
        <Typography variant="h4" align="center">
          No articles available. Try another search
        </Typography>
      ) : (
        <Box
          sx={{
            width: "100%",
            "& .super-app-theme--header": {
              backgroundColor: "primary.main",
            },
          }}
        >
          <DataGrid
            columns={columns.map((column) => ({
              ...column,
              align: "center",
            }))}
            rows={rows}
            pageSizeOptions={[5, 10]}
            getRowHeight={() => "auto"}
            getEstimatedRowHeight={() => 100}
            disableRowSelectionOnClick={true}
            disableColumnMenu={true}
            onRowClick={handleRowClick}
            showCellVerticalBorder={true}
            showColumnVerticalBorder={true}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
          />
        </Box>
      )}
    </Box>
  );
}
