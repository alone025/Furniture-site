"use client";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import React from "react";

type Props = {
  open: any;
  handleOpen: any;
};

function VideoDialog({ open, handleOpen }: Props) {
  return (
    <div className="video-dialog">
      <Dialog
        placeholder={""}
        open={open}
        size="xl"
        handler={() => {
          handleOpen(false);
        }}
      >
        <DialogBody placeholder={""}>
          <video className="h-full w-full rounded-lg" controls>
            <source
              src="https://cdn0.divan.by/app/v1/promotions/b64b0131/3b47d42308bc755051258e8a369c6b1211ef878346c00d47b6ec58b6233690ed.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </DialogBody>
        <DialogFooter placeholder={""}>
          <Button
            placeholder={""}
            variant="text"
            color="red"
            onClick={() => {
              handleOpen(false);
            }}
            className="mr-1"
          >
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}

export default VideoDialog;
