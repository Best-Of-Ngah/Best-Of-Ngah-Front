import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useState } from "react";
import { PALETTE_COLORS } from "../constant/palette";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const test2 = 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250';

const projects = [
  {
    id: 1,
    description: "blablabla dkfkdjdfkd",
    dateRealisation: "aujourd hui",
    imgPath: test2,  
    owner: "rakoto",
  },
  {
    id: 2,
    description: "blablabla okay",
    dateRealisation: "amaray",
    imgPath: test2,  
    owner: "rabe",
  },
  {
    id: 3,
    description: "blablabla dkfkdjdfkd",
    dateRealisation: "darem",
    imgPath: test2,  
    owner: "rabekoto",
  },
  {
    id: 4,
    description: "blablabla dkfkdjdfkd",
    dateRealisation: "radem",
    imgPath: test2,
    owner: "kotorabe",
  },
  {
    id: 5,
    description: "blablabla dkfkdjdfkd",
    dateRealisation: "aujourd hui",
    imgPath: test2, 
    owner: "rakoto",
  },
];

const Carousel = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = projects.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        maxWidth: 1200,
        flexGrow: 1,
        margin: "0 auto",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", 
        borderRadius: "12px", 
        overflow: "hidden", 
      }}
    >
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {projects.map((step, index) => (
          <div key={step.id}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  width: 1200,
                  height: 450,
                  display: "block",
                  maxWidth: "100%",
                  objectFit: "cover",
                }}
                src={step.imgPath}
                alt={step.imgPath}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>

      <Paper
        square
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          height: 150,
          padding: 3,
          backgroundColor: "#f5f5f5", 
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
          {projects[activeStep].description}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ marginBottom: 0.5 }}
        >
          Owner: {projects[activeStep].owner}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Date: {projects[activeStep].dateRealisation}
        </Typography>
      </Paper>

      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{
          backgroundColor: "#f5f5f5",
          borderRadius: "0 0 12px 12px",
          padding: 2,
        }}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            sx={{
              fontWeight: "bold",
              color: PALETTE_COLORS.second,
            }}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
            sx={{
              fontWeight: "bold",
              color: PALETTE_COLORS.main, 
            }}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
};

export default Carousel;
