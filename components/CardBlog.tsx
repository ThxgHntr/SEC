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
            <Image
              width={0}
              height={0}
              src="https://i1.wp.com/www.digital38.com.vn/wp-content/uploads/2021/01/nhiep-anh-gia-chanh-nguyen.-1.jpg"
              alt="ui/ux review check"
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
