import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import TextField from '@mui/material/TextField';
import { getContacts } from 'redux/contacts/contactsSelectors';
import { addContact } from 'redux/contacts/contactsOperations';

export default function AddContactForm() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.log('incorrect input name');
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in your phone book`);
      return;
    }
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
    handleClose();
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create new contact
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create new contact</DialogTitle>
        <DialogContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            mr: 1,
            alignItems: 'center',
          }}
        >
          <DialogContentText>
            Please enter contact's name and phone number here.
          </DialogContentText>
          <TextField
            label="Name"
            name="name"
            variant="filled"
            type="text"
            placeholder="Enter name"
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Phone number"
            name="number"
            variant="filled"
            type="tel"
            placeholder="Enter phone number"
            onChange={handleChange}
            required
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Add contact</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}