import io from "socket.io-client"; // Import the socket.io client library
import { Socket_API } from "./Constant";

const socket = io(Socket_API);

socket.on("resrequestCancel", (data) => {
  // Handle the cancellation response globally
  console.log(data);
});

export default socket;
