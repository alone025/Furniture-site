import React from "react";
import {
  Button,
  ButtonGroup,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";

type Props = {
  handleOpen: any;
  open: any;
  handleSend: any;
  alrt: any;
  send: any;
};

// Use Form content

type FormValues = {
  name: string;
  email: string;
  description: string;
};

export default function SpamDialog({
  handleOpen,
  open,
  handleSend,
  alrt,
  send,
}: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({});
  const onSubmit = handleSubmit((data) => {
    handleSend(data);
    send(data);
    handleOpen(false);
    alrt(true);
    reset();
  });
  return (
    <Dialog placeholder={""} open={open} handler={handleOpen} size="sm">
      <DialogHeader placeholder={""} className="justify-center">
        Complaint
      </DialogHeader>
      <DialogBody placeholder={""} className="flex justify-center">
        <div className="inputs-tab max-w-[890px] w-[80%]">
          <form className="flex flex-col" onSubmit={onSubmit}>
            <label className="mb-2">
              Please describe your complaint in as much detail as possible
            </label>
            <Textarea
              color="blue-gray"
              label="Your response here"
              {...register("description", {
                required: true,
              })}
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
                Must be have length
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
      </DialogBody>
      <DialogFooter placeholder={""} className="justify-center">
        <ButtonGroup placeholder={""} variant="outlined">
          <Button
            placeholder={""}
            variant="text"
            color="red"
            onClick={() => {
              handleOpen(false);
            }}
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            placeholder={""}
            onClick={() => {
              onSubmit();
            }}
          >
            <span>Send to support</span>
          </Button>
        </ButtonGroup>
      </DialogFooter>
    </Dialog>
  );
}
