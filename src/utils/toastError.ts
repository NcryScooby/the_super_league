import { toast } from "react-toastify";

const toastError = (message: string) => {
  toast.error(message, {
    theme: "light",
    position: "bottom-right",
    pauseOnFocusLoss: false,
    autoClose: 2500,
  });
};

export default toastError;
