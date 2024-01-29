import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import React from "react";

type Props = {
  open: boolean;
  setOpen: any;
  clrdc: any;
};

export default function Dialo({ open, setOpen, clrdc }: Props) {
  const [randomnumber, setRandomNumber] = React.useState<number>();

  const handleOpen = () => {
    setOpen(!open), clrdc([]);
  };

  React.useEffect(() => {
    generateRandomNumber();
  }, [!randomnumber]);

  const generateRandomNumber = () => {
    const newRandomNumber = Math.floor(Math.random() * 1000);
    setRandomNumber(newRandomNumber);
  };

  return (
    <>
      <Dialog
        size="sm"
        placeholder={""}
        open={open}
        handler={handleOpen}
        className="p-5"
      >
        <DialogHeader placeholder={""}>This is success, friend!</DialogHeader>
        <DialogBody placeholder={""}>
          Order No. {randomnumber} has been successfully completed. We will send
          you message to agree on the details.
        </DialogBody>
        <DialogFooter placeholder={""}>
          <Button
            placeholder={""}
            variant="gradient"
            color="gray"
            onClick={handleOpen}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
