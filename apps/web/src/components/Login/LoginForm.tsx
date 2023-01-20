import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider/useAuth";
import Button from "../Elements/Button";

export const LoginForm = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get("username")!.toString();
    const password = data.get("password")!.toString();
    const checkedRemember = data.get("remember")!;
    let remember: boolean;
    checkedRemember ? (remember = true) : (remember = false);
    await login(username, password, remember);
  };

  const login = async (
    username: string,
    password: string,
    remember: boolean
  ) => {
    try {
      await auth.authenticate(username, password, remember);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src="/logo.png" />
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox name="remember" id="remember" />}
            name="remember"
            id="remember"
            value="remember"
            label="Manter conectado"
          />

          <Button
            onClick={undefined}
            variant={""}
            disabled={false}
            className={"w-full block"}
          >
            Entrar
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
