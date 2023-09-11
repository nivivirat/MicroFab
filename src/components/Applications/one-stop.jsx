import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
   import one from "./one-bg.png";
  export function HorizontalCard() {
    return (
      <Card className="w-full flex-row">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src={one}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          {/* <Typography variant="h6" color="gray" className="mb-4 uppercase">
            startups
          </Typography> */}
          <Typography variant="h4" color="blue-gray" className="mb-2">
          One-stop partners have more to offer
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
          No matter what point you are at: With our experience and range of services, we are sure to get you ahead. Maybe so with these offers:
          </Typography>
          <a href="#" className="inline-block">
          CONTRACT FILLING->
          </a><br></br>
          <a href="#" className="inline-block">
          PHARMA-SUITE-SERVICE->
          </a><br></br>
          <a href="#" className="inline-block">
          FACTORY PLANNING->
          </a> 
         
        </CardBody>
      </Card>
    );
  }