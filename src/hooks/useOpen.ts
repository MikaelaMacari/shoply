import { useCallback, useState } from "react";

const useOpen = (initialState: boolean = false) => {
  const [open, setOpen] = useState<boolean>(initialState);

  const handleOpen = useCallback(() => setOpen(true), []);

  const handleClose = useCallback(() => setOpen(false), []);

  const handleToggle = useCallback(() => setOpen(!open), [open]);

  return {
    open,
    handleOpen,
    handleClose,
    handleToggle,
  };
};

export default useOpen;
