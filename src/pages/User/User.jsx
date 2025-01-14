import React, { useEffect } from "react";
import { useDispatch, useSelector, Provider } from "react-redux";
import { setGetProfile } from "../../redux/Reducers/ProfileSlice";
import Account from "../../components/Account/Account";
import EditButton from "../../components/EdditButton/EdditButton";
import getProfileService from "../../API/ProfilService";

export default function User() {
  const token = useSelector((state) => state.userAuth.token);
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDataUser = async () => {
      try {
        const data = await getProfileService(token);
        dispatch(setGetProfile({ data }));
      } catch (err) {
        console.log(err);
      }
    };

    fetchDataUser();
  }, [dispatch, token]);


  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{profile.firstName + " " + profile.lastName + "!"}</h1>
        <EditButton />
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance" />
      <Account
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        description="Available Balance" />
      <Account
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        description="Current Balance" />
    </main>
  )
}