import { toast } from "react-toastify";

const toastError = (message: string) => {
  toast.error(message, {
    theme: "light",
    position: "bottom-right",
    pauseOnFocusLoss: false,
    autoClose: 5000,
    toastId: "error",
  });
};

export default toastError;
