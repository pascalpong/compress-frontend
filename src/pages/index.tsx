import Information from "./sections/Information";
import Upload from "./sections/Upload";
import Faq from "./sections/Faq";
import AllTools from "@/layouts/Footer/AllTools";
import { Box } from "@mui/material";
import LowerHeader from "@/layouts/Header/LowerHeader";

export default function Page() {
    return (
      <Box sx={{height: '100%'}}>
        <LowerHeader/>
        <Upload/>
        <Information/>
        <Faq/>
        <AllTools/>
      </Box>
    )
  }