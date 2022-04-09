import React from "react";
import "./AadharVerify.css";
import { Validator } from "format-utils";
import api from "../Api/Api";
import { Card, IconAlertCircle, IconAlertTriangle } from "@supabase/ui";
import { InputNumber } from "@supabase/ui";
import { Button } from "@supabase/ui";
import { Typography } from "@supabase/ui";
import { Modal } from "@supabase/ui";
import { useNavigate } from "react-router-dom";

function AadharVerify() {
  const [aadharNumber, setAadharNumber] = React.useState("");
  const [isValid, setValid] = React.useState(null);
  const [password, setPassword] = React.useState();
  const [inputPassword, setInputPassword] = React.useState();
  const [visible, setVisible] = React.useState(false);
  const [visibleError, setVisibleError] = React.useState(false);
  let navigate = useNavigate();

  const validate = (e) => {
    e.preventDefault();
    setValid(Validator.aadhaar(aadharNumber));
    api.get(`/verify/${aadharNumber}`).then((res) => {
      setPassword(res.data);
    });
  };

  const sendOtp = (e) => {
    e.preventDefault();
    if (inputPassword == password) {
      toggle();
    } else {
      toggleError();
    }
  };

  function toggle() {
    setVisible(!visible);
  }
  function toggleError() {
    setVisibleError(!visibleError);
  }

  const switchRoute = () => {
    api.get(`/user/${aadharNumber}`).then((res) => {
      navigate(`/${aadharNumber}`);
    });
  };

  return (
    <div className="flex w-full justify-center items-center">
      <Card title="Get Patient Info" className="w-1/3">
        <form>
          <InputNumber
            label="Aadhar Card number"
            onChange={(e) => setAadharNumber(e.target.value)}
            placeholder="Enter your UID"
          />
          <div class="subHeader">
            {isValid === null ? (
              <span></span>
            ) : isValid ? (
              <InputNumber
                label="OTP"
                placeholder="Enter your OTP here."
                onChange={(e) => setInputPassword(e.target.value)}
              />
            ) : (
              <Typography.Text type="danger" mark className="alertText text-center">
                &nbsp; &nbsp; Please Re-Check your Aadhar Card Number &nbsp;
                &nbsp;{" "}
              </Typography.Text>
            )}
            {isValid ? (
              <Button className="formButton" type="primary" onClick={sendOtp}>
                Confirm
              </Button>
            ) : (
              <Button className="formButton" type="primary" onClick={validate}>
                Continue
              </Button>
            )}
          </div>
        </form>
      </Card>

      <Modal
        title="Congratulations"
        description="We have successfully verified user"
        visible={visible}
        onCancel={() => navigate("/")}
        onConfirm={() => switchRoute}
        icon={<IconAlertCircle background="brand" size="xlarge" />}
      >
        <Typography.Text>
          You can proceed now to see patients previous Medical history.
        </Typography.Text>
      </Modal>

      <Modal
        title="Oops"
        description="Verification failed"
        visible={visibleError}
        onCancel={() =>toggleError}
        onConfirm={() => toggleError}
        icon={<IconAlertTriangle background="red" size="xlarge" />}
      >
        <Typography.Text>Please try again</Typography.Text>
      </Modal>
    </div>
  );
}

export default AadharVerify;
