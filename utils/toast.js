import toast from "react-hot-toast";

export const toastMessage = (text, type) => {
  if (type == "promise") {
    toast(text, {
      icon: "⏳",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  }
};
