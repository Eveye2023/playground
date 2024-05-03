import axios from "axios";
import "./Profile.scss";
import error_icon from "../../assets/icons/error-24px.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { SERVER_ENDPOINT } from "../../util";

interface UserInfo {
  id: number;
  email: string;
  name?: string;
}

interface ProfileProps {
  user: UserInfo | null;
}

function Profile({ user }: ProfileProps) {
  const navigate = useNavigate();
  const [saveMsg, setSaveMsg] = useState("");

  if (!user) {
    setTimeout(() => navigate("/signin"));
    return <p>Please log in to see your profile</p>;
  }

  let timeoutId: any;
  const submitHandler = async (event: any) => {
    setSaveMsg("");
    clearTimeout(timeoutId);
    event.preventDefault();
    for (const item of ["email", "name"]) {
      if (!event.target[item].value || event.target[item].value === "") {
        return;
      }
    }

    const authToken = localStorage.getItem("authToken");
    try {
      const response = await axios.put(
        SERVER_ENDPOINT + "/profile",
        {
          email: event.target.email.value,
          name: event.target.name.value,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      setSaveMsg("Saved sucessfully!");
      timeoutId = setTimeout(() => setSaveMsg(""), 2000);
    } catch (err: any) {
      console.log(err);
      setSaveMsg(err.response.data);
    }
  };

  return (
    <>
      <main className="profile">
        <form action="" className="profile__form" onSubmit={submitHandler}>
          <div className="profile__field">
            <label htmlFor="id" className="profile__label">
              Id:{" "}
            </label>
            <input type="text" name="id" id="id" defaultValue={user ? user.id : ""} disabled />
          </div>
          <div className="profile__field">
            <label htmlFor="name" className="profile__label">
              Name:{" "}
            </label>
            <input type="text" name="name" id="name" defaultValue={user ? user.name : ""} />
          </div>
          <div className="profile__field">
            <label htmlFor="email" className="profile__label">
              Email:{" "}
            </label>
            <input
              type="text"
              name="email"
              id="email"
              defaultValue={user ? user.email : ""}
              disabled
            />
          </div>
          <input type="submit" value="Save" className="profile__submit" />
          <div className="save-err-msg" style={{ display: saveMsg ? "block" : "none" }}>
            {saveMsg}
          </div>
        </form>
      </main>
    </>
  );
}

export default Profile;
