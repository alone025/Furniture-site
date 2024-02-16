import React from "react";
import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import localFont from "next/font/local";
import moreOptionImage from "@/public/more.png";
import Image from "next/image";
import DialogBlog from "./DialogBlog";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import SpamDialog from "./spamDialog";
import Alerts from "./alert";
import nodemailer from "nodemailer";
import emailjs from "emailjs-com";

// Fonts
const ProductSans4 = localFont({
  src: "../../public/Fonts/Product Sans Regular.ttf",
});
const ProductSans7 = localFont({
  src: "../../public/Fonts/Product Sans Bold.ttf",
});

type Props = {
  data: any;
  cdata: any;
  setAllData: any;
};

const Comment = ({ data, cdata, setAllData }: Props) => {
  const token = localStorage.getItem("token");
  const [open, handleOpen] = React.useState(false);
  const [ed, setEd] = React.useState(false);
  const [sp, setSpm] = React.useState(false);
  const [dt, setDt] = React.useState<any>();
  const [alertOpen, setAlertOpen] = React.useState(false);

  const handleDelete = () => {
    const updatedComment = cdata?.comment.filter(
      (tok: any) => tok.description !== data.description
    );
    dataCommentSend(updatedComment);
  };

  const handleEdit = (e: any) => {
    const updatedComment = cdata.comment.map((c: any) => {
      if (c?.token == token && c?.description == data.description) {
        return {
          ...c,
          name: e.name,
          description: e.description,
          email: e.email,
        };
      }

      return c;
    });

    dataCommentSend(updatedComment);
  };

  function dataCommentSend(e: any) {
    const options: AxiosRequestConfig = {
      method: "PATCH",
      url: `https://2c57c2fe491dd2f3.mokky.dev/blogs/${cdata.id}`,
      data: {
        comment: e,
      },
    };

    axios
      .request(options)
      .then(function (response: AxiosResponse) {
        setAllData(response.data);
      })
      .catch(function (error: any) {
        alert("Error updating server , please try again : (");
      });
  }

  const sendReport = async (e: any) => {
    console.log(e);

    emailjs
      .send(
        "service_93hzeyc",
        "template_vsjg2uf",
        {
          from_email: e.email,
          to_name: "Admin",
          from_name: e.name,
          message: e.description,
          commentId: data.token || "default comment",
          commentDes: data.description,
        },
        "a0yQC4dHLA7YZEzES"
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
    // const templateParams = {
    //   from_email: "example@gmail.com",
    //   to_email: "forestest26@gmail.com",
    //   message: "Hello bro its again test but its so big test for you bro : ) ",
    // };

    // emailjs
    //   .send(
    //     "service_93hzeyc",
    //     "template_1si0azf",
    //     templateParams,
    //     "a0yQC4dHLA7YZEzES"
    //   )
    //   .then((response) => {
    //     console.log("Email sent successfully!", response.status, response.text);
    //   })
    //   .catch((error) => {
    //     console.error("Error sending email:", error);
    //   });
  };

  return (
    <Card
      placeholder={""}
      color="transparent"
      shadow={false}
      className="w-full max-w-[24rem] min-w-[280px] sm:min-w-[320px] "
    >
      <CardHeader
        placeholder={""}
        color="transparent"
        floated={false}
        shadow={false}
        className="mx-0 flex items-center gap-3 md:gap-4 pt-0 pb-6 md:pb-7 lg:pb-8"
      >
        <Avatar
          placeholder={""}
          size="lg"
          variant="circular"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          alt=""
          className="w-[48px] h-[48px] md:w-[58px] md:h-[58px]"
        />
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <Typography
              placeholder={""}
              variant="h5"
              color="blue-gray"
              className={`${ProductSans7.className} text-[15px] md:text-[16px] lg:text-xl`}
            >
              {data.name}
            </Typography>
            <div className="5 flex items-center gap-0"></div>
          </div>
          <Typography
            placeholder={""}
            color="blue-gray"
            className={`${ProductSans4.className} max-w-[175px] md:max-w-[210px] line-clamp-1 text-[14px] md:text-[15px] lg:text-base `}
          >
            {data.email}
          </Typography>
        </div>
        <div className="menu-button">
          <Menu>
            <MenuHandler>
              <Image
                src={moreOptionImage}
                alt=""
                width={32}
                className="w-8 h-[20px] cursor-pointer"
              />
            </MenuHandler>

            {data.token == token ? (
              <MenuList placeholder={""}>
                <MenuItem
                  placeholder={""}
                  onClick={() => {
                    setEd(true), handleOpen(true);
                  }}
                >
                  Edit
                </MenuItem>
                <MenuItem
                  placeholder={""}
                  onClick={() => {
                    setEd(false), handleOpen(true);
                  }}
                >
                  Delete
                </MenuItem>
              </MenuList>
            ) : (
              <MenuList placeholder={""}>
                <MenuItem
                  placeholder={""}
                  onClick={() => {
                    setSpm(true);
                  }}
                >
                  Spam
                </MenuItem>
              </MenuList>
            )}
          </Menu>
        </div>
      </CardHeader>
      <CardBody placeholder={""} className="mb-6 p-0">
        <Typography
          placeholder={""}
          className={`${ProductSans4.className} text-[14px] md:text-[15px] lg:text-base overflow-hidden`}
        >
          {data.description}
        </Typography>
      </CardBody>
      <DialogBlog
        open={open}
        handleOpen={handleOpen}
        ed={ed}
        dt={data}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      <Alerts open={alertOpen} setOpen={setAlertOpen} />
      <SpamDialog
        handleOpen={setSpm}
        open={sp}
        handleSend={setDt}
        send={sendReport}
        alrt={setAlertOpen}
      />
    </Card>
  );
};

export default Comment;
