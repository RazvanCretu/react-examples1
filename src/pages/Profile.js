import React, { useState } from "react";
import { Container, Box, Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const ContainerBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexFlow: "column",
  position: "relative",
  height: 400,
  width: "80%",
  backgroundColor: "white",
  borderRadius: 5,
  "& .MuiTextField-root": {
    marginBottom: "1rem",
  },
  "& .MuiBox-root": {
    marginBottom: "1rem",
  },
});

const StyledButton = styled(Button)({
  position: "absolute",
  top: 20,
  right: 50,
});

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    username: "Jhon Doe",
    email: "jhondoe@gmail.com",
    address: "St. Hall of Fame 1, NY",
  });

  const handleEditClick = () => setIsEditing(true);
  const handleCancelClick = () => setIsEditing(false);
  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <Container
      disableGutters
      sx={{
        height: 600,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {isEditing ? (
        <ContainerBox>
          {" "}
          <StyledButton
            variant="contained"
            color="error"
            onClick={handleCancelClick}
          >
            Cancel
          </StyledButton>
          <TextField
            value={user.username}
            name="username"
            label="Username"
            variant="standard"
            onChange={handleChange}
            focused={user.username !== ""}
          />
          <TextField
            type="email"
            value={user.email}
            name="email"
            label="Email"
            variant="standard"
            onChange={handleChange}
            focused={user.email !== ""}
          />{" "}
          <TextField
            value={user.address}
            name="address"
            label="Address"
            variant="standard"
            onChange={handleChange}
            focused={user.address !== ""}
          />
          <Button
            sx={{
              position: "absolute",
              bottom: 20,
            }}
            variant="contained"
            onClick={handleSaveClick}
          >
            Save
          </Button>
        </ContainerBox>
      ) : (
        <ContainerBox>
          {" "}
          <Box>Username: {user.username}</Box>
          <Box>Email: {user.email}</Box>
          <Box>Address: {user.address}</Box>
          <StyledButton variant="contained" onClick={handleEditClick}>
            Edit
          </StyledButton>
        </ContainerBox>
      )}
    </Container>
  );
};

export default ProfilePage;
