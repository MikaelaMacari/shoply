import { useCallback, useState } from "react";
import * as React from "react";

const useCurrentTarget = (initialState: null = null) => {
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(
    initialState
  );

  const handleOpen = useCallback(
    (event: React.MouseEvent<HTMLElement>) =>
      setAnchorElement(event.currentTarget),
    []
  );

  const handleClose = useCallback(() => setAnchorElement(null), []);

  return {
    anchorElement,
    handleOpen,
    handleClose,
  };
};

export default useCurrentTarget;
