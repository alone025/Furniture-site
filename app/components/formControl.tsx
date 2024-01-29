import { Button, Checkbox, Input, Typography } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";
import { useForm, Resolver } from "react-hook-form";
import localFont from "next/font/local";
import { sendEmail } from "../utils/email-send";

// Use Form content

type FormValues = {
  firstName: string;
  number: number;
  email: string;
  manzil: string;
};

// Images
import car from "@/public/car.svg";
import money from "@/public/money.svg";

// Fonts
const ProductSans4 = localFont({
  src: "../../public/Fonts/Product Sans Regular.ttf",
});
const ProductSans7 = localFont({
  src: "../../public/Fonts/Product Sans Bold.ttf",
});

type Props = {
  setOpen: any;
  open: boolean;
};

const FormControl = ({ setOpen, open }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({});
  const onSubmit = handleSubmit((data) => {
    sendEmail(data);
    setOpen(true);
    localStorage.removeItem("carts");
  });

  return (
    <div className="form-control mt-8 md:mt-10">
      <div className="forms">
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-3 md:gap-5 max-w-[415px] min-w-[200px]"
        >
          <div className="input-div">
            <Input
              crossOrigin=""
              {...register("firstName", { required: true })}
              label="Name"
              placeholder="Bill"
              error={errors?.firstName ? true : false}
            />
            {errors?.firstName && (
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
          </div>
          <div className="input-div">
            <Input
              crossOrigin=""
              {...register("number", {
                required: true,
                pattern: /^\+\d{3}-\d{2}-\d{3}-\d{2}-\d{2}$/,
              })}
              placeholder="+998-xx-xxx-xx-xx"
              label="Number"
              error={errors?.number ? true : false}
            />
            {errors?.number?.type === "pattern" ? (
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
                This field must be a valid phone number
              </Typography>
            ) : (
              errors?.number && (
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
          </div>

          <div className="input-div">
            <Input
              crossOrigin=""
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
              placeholder="example@gmail.com"
              label="Email"
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
          </div>
        </form>
      </div>
      <div className="dostavka mt-[50px] md:mt-[60px]">
        <h3 className={`mb-[30px] ${ProductSans4.className} text-[16px]`}>
          Select delivery method
        </h3>
        <div className="select flex items-center mb-[30px]">
          <div className="check mr-[15px]">
            <Checkbox
              crossOrigin={""}
              defaultChecked
              disabled
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              }
            />
          </div>
          <Image src={car} alt="" className="mr-[10px]" />
          <p className={`${ProductSans4.className} text-[14px]`}>Courier</p>
        </div>
        <div className="input-space mb-[15px] md:mb-[20px]">
          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-3 md:gap-5 max-w-[415px] min-w-0 md:min-w-[200px]"
          >
            <div className="input-div">
              <Input
                crossOrigin=""
                {...register("manzil", { required: true })}
                label="Location"
                placeholder="city, street, house, floor, apartment"
                error={errors?.manzil ? true : false}
              />
              {errors?.manzil && (
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
            </div>
          </form>
        </div>
        <div className="recomedation-sec mt-[15px]">
          <p className={`${ProductSans4.className} text-[12px] text-[#989898]`}>
            Payment upon receipt is made after inspection of the goods.
          </p>
        </div>
      </div>
      <div className="sposob-oplati mt-[50px] md:mt-[60px]">
        <h3
          className={`${ProductSans4.className} mb-[25px] md:mb-[30px] text-[16px]`}
        >
          Select a Payment Method
        </h3>
        <div className="icon-tab flex items-center gap-[13px] md:gap-[15px] max-w-[160px]">
          <Image src={money} alt="" loading="lazy" className="mr-[15px]" />
          <p className="text-[13px] md:text-[14px]">Cash upon receipt</p>
        </div>
      </div>

      <div className="submit-sec mt-[60px]">
        <Button
          type="submit"
          onClick={onSubmit}
          loading={open}
          placeholder=""
          className={`bg-[#404040] normal-case font-medium ${ProductSans7.className} tracking-wider rounded-[4px] max-w-[400px] w-full `}
        >
          Confirm the order
        </Button>
        <div className="notification-sec mt-[30px]">
          <p className={`${ProductSans4.className} text-[12px] text-[#989898]`}>
            By clicking “Confirm order”, you accept the terms of the
            corresponding offer:{" "}
            <span className="text-[#157ee9]">Offers for individuals</span> or{" "}
            <span className="text-[#157ee9]">
              Offers for legal entities and individual entrepreneurs
            </span>
            , posted on the site, and also give{" "}
            <span className="text-[#157ee9]">consent to processing</span>{" "}
            personal data on the terms{" "}
            <span className="text-[#157ee9]">Privacy Policy</span>, posted on
            the site.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormControl;
