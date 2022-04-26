import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useSelector } from "react-redux";
import { Field, Form, Formik } from "formik";
import { updateUserData } from "../API/Company/Update";

export default function MemberDialog(props) {
  const groups = useSelector((state) => state.api.groups);

  const handleClose = () => {
    props.toggleShowDialog(false);
  };
  const initialValues = {
    userId: props.currentMember.userId,
    userName: props.currentMember.userName,
    userGroup: props.currentMember.userGroup,
  };
  return (
    <div>
      <Dialog
        fullWidth={true}
        maxWidth="xs"
        open={props.showDialog}
        onClose={handleClose}
      >
        <DialogTitle>Company member</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={initialValues}
            onSubmit={async (values) => {
              props.toggleShowDialog(false);
              updateUserData(values.userId, values.userGroup, values.userName);
              props.setCurrentMember({
                ...props.currentMember,
              });
              alert("The data has been changed successfully!");
            }}
          >
            <Form>
              <div className="mb-3">
                <label htmlFor="Full Name" className="form-label">
                  Full name
                </label>
                <Field
                  className="form-control"
                  id="userName"
                  name="userName"
                  placeholder="Jane"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="groups" className="form-label">
                  Groups
                </label>
                <Field className="form-control" name="userGroup" as="select">
                  {groups.map((group, index) => (
                    <option key={index} value={group.groupId}>
                      {group.group}
                    </option>
                  ))}
                </Field>
              </div>
              <div className="d-flex justify-content-end">
                <Button type="submit" variant="contained">
                  Submit
                </Button>
              </div>
            </Form>
          </Formik>
        </DialogContent>
      </Dialog>
    </div>
  );
}
