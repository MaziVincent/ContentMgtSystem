import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

const DeleteDialogue = ({open, handleClose,deleteId, handleDelete}) => {
    
  return (
    <Dialog
      open={open}
      onClose={() => {handleClose}}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Use Google's location service?"}
      </DialogTitle>

      <DialogActions>
        <Button onClick={() => {handleClose}}>Dismiss</Button>
        <Button
          onClick={() => {handleDelete(deleteId); handleClose()}}
          autoFocus
          color="error"
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialogue;
