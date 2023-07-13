import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import EyeIcon from "assets/icons/EyeIcon";
import EyeOffIcon from "assets/icons/EyeOffIcon";
import { useState } from "react";
import { useLocationHook, useNavigatorHook } from "third-party-package-handler/RouterHelper";
// import { Link as RouterLink } from "react-router-dom";

const LoginRightSide = () => {
  const localtion = useLocationHook();
  const navigate = useNavigatorHook();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  const handleSubmit = () => {
    navigate("/console/category", { replace: true, state: localtion.pathname });
  };

  return (
    <Grid item sm={12} md={6} py={5}>
      <Stack
        justifyContent={"space-between"}
        alignItems={"center"}
        height={"calc(100% - 100px)"}
        width={"100%"}
        sx={{ pt: { md: 10 } }}
      >
        <Box
          sx={{
            maxWidth: "540px",
            padding: "48px",
            gap: "48px",
            bgcolor: "common.white",
            borderRadius: "12px"
          }}
        >
          <Box textAlign={"center"} mb={3}>
            <Typography variant="h3" mb={0} color={"text.primary"}>
              Welcome
            </Typography>
            <Typography variant="body1" color={"text.secondary"}>
              Log in to your account & get started
            </Typography>
          </Box>

          <Box component={"span"}>
            <TextField
              id="outlined-multiline-flexible"
              label="Email Address"
              multiline
              fullWidth
              maxRows={4}
              type="email"
            />

            <FormControl variant="outlined" sx={{ my: 2 }} fullWidth>
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <EyeIcon /> : <EyeOffIcon />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>

            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} mb={4}>
              <FormGroup sx={{ color: "text.secondary" }}>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
              </FormGroup>

              {/* <Link component={RouterLink} to="/forgot-password" underline="none">
                Forgot Password?
              </Link> */}
            </Stack>

            <Button variant="contained" disableElevation onClick={handleSubmit}>
              Log In
            </Button>
          </Box>
        </Box>

        <Box textAlign={"center"} mt={4}>
          <Typography variant="body2">@ 2023 My base structure - All Rights Reserved</Typography>
          <Typography variant="body2" color={"other.primaryDark"}>
            Terms of services & privacy policy
          </Typography>
        </Box>
      </Stack>
    </Grid>
  );
};
export default LoginRightSide;
