import React, { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";
import Snackbar from "@mui/material/Snackbar";
import { useNavigate } from "react-router-dom";

const CreateMemo = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const handleLoadingClose = () => {
    setLoading(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createMemo = () => {
    setOpen(true);
  };

  const handleSubmit = () => {
    setLoading(true);
    setOpen(false);

    const saved = localStorage.getItem("memoList");
    const currentMemoList = JSON.parse(saved) || [];

    currentMemoList.push({
      title: title,
      content: content,
      id: parseInt(Math.random() * 10000)
    });
    localStorage.setItem("memoList", JSON.stringify(currentMemoList));

    setTimeout(() => {
      init();
    }, 1000);
  };

  const init = () => {
    setOpenSnackbar(true);
    setLoading(false);
    setTitle("");
    setContent("");
    navigate("/memoList");
  };

  return (
    <>
      <Typography variant="body1" component="div" gutterBottom>
        Put your most memorable experience of your life today.
      </Typography>
      <br />
      <br />
      <div style={{ width: 400, display: "flex", flexDirection: "column" }}>
        <TextField
          value={title}
          required
          id="title"
          label="Title"
          defaultValue=""
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <TextField
          multiline
          rows={5}
          required
          id="content"
          label="content"
          defaultValue=""
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Button variant="contained" color="primary" onClick={createMemo}>
            Create
          </Button>
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you want to create a new memo?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you gonna..?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>no</Button>
          <Button onClick={handleSubmit} autoFocus>
            Go!
          </Button>
        </DialogActions>
      </Dialog>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
        onClick={handleLoadingClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message="Created"
      />
    </>
  );
};

export default CreateMemo;
