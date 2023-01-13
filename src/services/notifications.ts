import Swal from "sweetalert2";
export const toast_message = (message?: string, icon?: any, time?: number) => {
  Swal.fire({
    position: "top",
    icon: icon,
    title: message,
    showConfirmButton: false,
    timerProgressBar: true,
    toast: true,
    timer: time,
  });
};
