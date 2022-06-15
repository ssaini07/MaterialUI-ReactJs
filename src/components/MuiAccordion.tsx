import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const MuiAccordion = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae ad
            blanditiis, aspernatur cumque ipsa dicta quas enim, optio provident
            accusamus ut quidem quo iusto culpa et obcaecati sapiente
            consectetur. Quaerat!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae ad
            blanditiis, aspernatur cumque ipsa dicta quas enim, optio provident
            accusamus ut quidem quo iusto culpa et obcaecati sapiente
            consectetur. Quaerat!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae ad
            blanditiis, aspernatur cumque ipsa dicta quas enim, optio provident
            accusamus ut quidem quo iusto culpa et obcaecati sapiente
            consectetur. Quaerat!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
