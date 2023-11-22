'use client';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AddBlog({open,handleAddBlogClose}) {
    // const [open, setOpen] = React.useState(false);

    // const handleClickOpen = () => {
    //   setOpen(true);
    // };
  
    // const handleClose = () => {
    //   setOpen(false);
    // };
  return (
    <React.Fragment>
      <Dialog   open={open} onClose={handleAddBlogClose} className="font-dmsan ">
        <DialogTitle style={{fontFamily:'dmsan'}} >Add new blog</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please insert your blog to be publish here ! 
          </DialogContentText>
          <TextField style={{fontFamily:'dmsan'}} margin="dense" id="name" label="Blog title" type="text" fullWidth variant="standard"/>
          <TextField style={{fontFamily:'dmsan'}} margin="dense" id="name" label="Blog title" type="text" fullWidth variant="standard"/>
        </DialogContent>
        <DialogActions >
          <Button onClick={handleAddBlogClose} className="font-dmsan text-black">Cancel</Button>
          <Button onClick={handleAddBlogClose} className="font-dmsan text-black">Add</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

