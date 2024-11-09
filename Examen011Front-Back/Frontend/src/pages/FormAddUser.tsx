import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { FormEvent, useState } from "react";
import HomePage from "./HomePage";

const FormAddUser: React.FC = () => {
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [error, setError] = useState({
    error: false,
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const textValidation = (text: string) => {
    const textEvaluation = /[A-Za-z0-9!?-]{8,12}/;
    return textEvaluation.test(text);
  };

  const clearError = () => {
    setError({ error: false, message: "" });
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !textValidation(name) &&
      !textValidation(lastname)
    ) {
      setError({
        error: true,
        message: "Fill in the inputs correctly",
      });
      return;
    }

    clearError();

    try {
      const response = await fetch("http://localhost:5133/api/User", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          lastName: lastname,
          age,
        }),
      });

      if (!response.ok) {
        // alert("BIEN HIJO");
        <HomePage />
      } else {
        setError({ error: true, message: "HUBO UN ERROR" });
      }
    } catch (error) {
      console.error(error);
      setError({ error: true, message: "HUBO UN ERROR" });
    }

    setLoading(true);

    setLoading(false);
    setError({
      error: false,
      message: "",
    });
  };

  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      autoComplete="on"
      style={{ margin: "15px", padding: "20px" }}
      boxShadow={3}
      borderRadius={3}
    >
      <Grid
        container
        spacing={2}
      >
        <Grid
          size={{ xs: 12 }}
          textAlign="center"
        >
          <Typography variant="h4">Register a User</Typography>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TextField
            label="Name"
            id="name"
            type="text"
            fullWidth
            required
            error={error.error}
            helperText={error.message}
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TextField
            label="LastName"
            id="lastName"
            type="text"
            fullWidth
            required
            error={error.error}
            helperText={error.message}
            onChange={(e) => setLastname(e.target.value)}
            value={lastname}
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TextField
            label="Age"
            variant="outlined"
            id="age"
            type="number"
            fullWidth
            required
            error={error.error}
            helperText={error.message}
            onChange={(e) => setAge(e.target.value)}
            value={age}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 2 }}>
          <Button
            fullWidth
            variant="outlined"
            type="submit"
            sx={{ mt: 2 }}
            disabled={loading}
          >
            Submit
            {loading && <CircularProgress size={12} />}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FormAddUser;
