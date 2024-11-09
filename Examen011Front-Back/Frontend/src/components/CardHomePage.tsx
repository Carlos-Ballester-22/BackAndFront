import {
    Card,
    CardContent,
    Typography,
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
  import { PostCardProps } from "../types/PostInterface";
  import { UserInterface } from "../types/UserInterface";
  
  const CardHomePage:React.FC<PostCardProps> = ({ postData }) => {
    const [userData, setUserData] = useState<null | UserInterface>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<null | string>(null);
  
    useEffect(() => {
      const fetchUserData = async () => {
        setLoading(true);
        const response = await fetch(
          `http://localhost:5133/api/User/${postData.id}`
        );
  
        if (response.ok) {
          const user = (await response.json()) as UserInterface;
          setUserData(user);
        } else setError("There was an error getting the user");
        setLoading(false);
      };
  
      fetchUserData();
    }, [postData.id]);
  
    return (
      <Card sx={{ height: "100%" }}>
        <CardContent>
          <Typography gutterBottom variant="h5" textTransform={"capitalize"}>
            {postData.name}
          </Typography>
          <Typography variant="body1">{postData.lastName}</Typography>
          <Typography variant="body1">{postData.age}</Typography>
          {loading ? (
            <Typography variant="caption">Loading...</Typography>
          ) :  (
            <Typography variant="caption" color="error">
              {error}
            </Typography>
          ) }
        </CardContent>
      </Card>
    );
  };
  
  export default CardHomePage