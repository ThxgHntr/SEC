import Image from "next/image";
import image from "../public/image.png";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

const CardBlog = () => {
  return (
    <div className="z-0">
      <Card className="max-w-[24rem] overflow-hidden">
        <div className="shadow-lg border border-gray-200 bg-white rounded-lg mt-5 my-3">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="ui/ux review check"
              loading="lazy"
            />
          </CardHeader>
          <CardBody>
            <Typography
              variant="h4"
              color="blue-gray"
              style={{ marginLeft: "4px", marginRight: "4px" }}
            >
              UI/UX Review Check
            </Typography>
            <Typography
              style={{
                marginLeft: "4px",
                marginRight: "4px",
                marginBottom: "4px",
              }}
              variant="lead"
              color="gray"
              className="mt-3 font-normal"
            >
              Because it&apos;s about motivating the doers. Because I&apos;m
              here to follow my dreams and inspire others.
            </Typography>
          </CardBody>
        </div>
      </Card>
    </div>
  );
};

export default CardBlog;
