import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Slide } from '@mui/material';
import './TransferModal.scss';
import type { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type Props = {
  open: boolean;
  title?: string;
  message?: React.ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
  onClose: () => void;
  onConfirm: () => void;
};

const TransferModal: React.FC<Props> = ({
  open,
  title = 'Continue?',
  message = 'You are about to leave this page. Continue?',
  confirmLabel = 'Continue',
  cancelLabel = 'Cancel',
  onClose,
  onConfirm,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      keepMounted
      className="transfer-dialog"
      aria-labelledby="transfer-dialog-title"
    >
      <DialogTitle id="transfer-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <Typography className="transfer-message">{message}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} className="cancel">{cancelLabel}</Button>
        <Button onClick={onConfirm} className="confirm" variant="contained">{confirmLabel}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default TransferModal;
