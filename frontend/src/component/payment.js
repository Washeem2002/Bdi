import "./payment.css";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();

  return (
    <div className="outer-box">
      <div className="inner-box">
        <TextField label="Enter Payment Details" variant="outlined" fullWidth style={{ marginBottom: "16px" }} />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            alert("You will receive a call at your chosen time");
            navigate("/");
          }}
        >
          Pay Now
        </Button>
      </div>
    </div>
  );
};

export default Payment;
