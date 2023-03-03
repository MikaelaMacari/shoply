import Box from "@mui/material/Box";
import { MobileLogo } from "src/components/modules/navbar/components/navbar-collapse/index.styled";
import { Divider } from "@mui/material";
import NavItems from "../../navbar-items";

const SidebarContent = ({ handleOpen }: any) => {
  return (
    <Box onClick={handleOpen}>
      <MobileLogo noWrap>Shoply.</MobileLogo>
      <Divider />
      <NavItems />
    </Box>
  );
};
export default SidebarContent;
