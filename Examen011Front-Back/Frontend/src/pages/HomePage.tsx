import {
  CircularProgress,
  Grid2,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { PostInterface } from "../types/PostInterface";
import CardHomePage from "../components/CardHomePage";

const HomePage: React.FC = () => {
  const [postsData, setPostsData] = useState<PostInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      const response = await fetch(
        `http://localhost:5133/api/User`
      );

      if (response.ok) {
        const data = (await response.json()) as PostInterface[];
        setPostsData(data);
        setLoading(false);
      } else setError("There was an error getting the user  1");
    };

    fetchUserData();
  }, []);

  return (
      <Grid2 style={{ margin: "15px", padding: "20px" }} container spacing={2}>
        {loading && <CircularProgress size={60} />}
        {error && <Typography color="error">{error}</Typography>}
        {postsData.map((postData) => (
          <Grid2 key={postData.id + "post"} size={{ xs: 12, sm: 4, md: 2 }}>
            <CardHomePage postData={postData} />
          </Grid2>
        ))}
      </Grid2>
  );
};

export default HomePage