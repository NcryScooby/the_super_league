import { toast } from "react-toastify";

const toastSuccess = (message: string) => {
  toast.success(message, {
    theme: "light",
    position: "bottom-right",
    pauseOnFocusLoss: false,
    autoClose: 2500,
  });
};

export default toastSuccess;
