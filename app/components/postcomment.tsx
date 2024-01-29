import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import React from "react";
import localFont from "next/font/local";
import { useForm } from "react-hook-form";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

// Use Form content

type FormValues = {
  name: string;
  email: string;
  description: string;
};

// Fonts
const ProductSans4 = localFont({
  src: "../../public/Fonts/Product Sans Regular.ttf",
});
const ProductSans7 = localFont({
  src: "../../public/Fonts/Product Sans Bold.ttf",
});

type Props = {
  cardData: any;
  setData: any;
};

function Postcomment({ cardData, setData }: Props) {
  const [loading, setLoading] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({});
  const onSubmit = handleSubmit((data) => {
    const updatecomment = cardData;
    const updatedcomment = [
      ...updatecomment.comment,
      { name: data.name, description: data.description, email: data.email },
    ];

    dataCommentSend(updatedcomment);
  });

  function dataCommentSend(e: any) {
    setLoading(true);
    const options: AxiosRequestConfig = {
      method: "PATCH",
      url: `https://2c57c2fe491dd2f3.mokky.dev/blogs/${cardData.id}`,
      data: {
        comment: e,
      },
    };

    axios
      .request(options)
      .then(function (response: AxiosResponse) {
        setLoading(false);
        setData(response.data);
      })
      .catch(function (error: any) {
        setLoading(true);
      });
  }

  return (
    <div className="post-comment-dov">
      <div className="logo-senter-of-text">
        <h3>Post a comment</h3>
      </div>
      <div className="bottom-content-full mt-8">
        <div className="inputs-tab max-w-[890px]">
          <form className="flex flex-col" onSubmit={onSubmit}>
            <Textarea
              color="blue-gray"
              label="Your message here"
              {...register("description", { required: true, minLength: 20 })}
              error={errors?.description ? true : false}
            />
            {errors?.description && (
              <Typography
                placeholder={""}
                variant="small"
                color="red"
                className="mt-2 flex items-center gap-1 font-normal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="-mt-px h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                  />
                </svg>
                Must be at least 20 in length
              </Typography>
            )}
            <div className="space mt-6"></div>
            <Input
              crossOrigin=""
              {...register("name", { required: true })}
              type="name"
              label="Name"
              placeholder="Bill"
              color="blue-gray"
              error={errors?.name ? true : false}
            />
            {errors?.name && (
              <Typography
                placeholder={""}
                variant="small"
                color="red"
                className="mt-2 flex items-center gap-1 font-normal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="-mt-px h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                  />
                </svg>
                Fill in this field
              </Typography>
            )}
            <div className="space mt-6 "></div>
            <Input
              crossOrigin=""
              type="email"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
              placeholder="example@gmail.com"
              label="Email"
              color="blue-gray"
              error={errors?.email ? true : false}
            />
            {errors?.email?.type === "pattern" ? (
              <Typography
                placeholder={""}
                variant="small"
                color="red"
                className="mt-2 flex items-center gap-1 font-normal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="-mt-px h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                  />
                </svg>
                This field must be a valid email address
              </Typography>
            ) : (
              errors?.email && (
                <Typography
                  placeholder={""}
                  variant="small"
                  color="red"
                  className="mt-2 flex items-center gap-1 font-normal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="-mt-px h-4 w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Fill in this field
                </Typography>
              )
            )}
          </form>
        </div>
        <div className="bttun max-w-[145px] mt-10">
          <Button
            type="submit"
            placeholder=""
            onClick={onSubmit}
            loading={loading}
            className={`bg-[#404040] normal-case whitespace-nowrap font-medium ${ProductSans7.className} tracking-wider rounded-[4px] max-w-[400px] w-full `}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Postcomment;
