import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setEditProfile } from "../../redux/Reducers/ProfileSlice"
import TextInput from "../TextInput/TextInput"
import Button from "../Button/Button"
import editProfileService from "../../API/EditProfileService"

export default function EditButton() {
    const token = useSelector(state => state.userAuth.token);
    const profile = useSelector(state => state.profile);
    const [isEditing, setIsEditing] = useState(false);
    const [newUserName, setNewUserName] = useState(profile.userName);
    const [error, setError] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        setNewUserName(profile.userName);
    }, [profile.userName]);

    const editUserName = async (e) => {
        e.preventDefault();
        if (!newUserName) {
            setError("The field cannot be empty.");
            return;
        }
        try {
            await editProfileService(token, newUserName);

            dispatch(setEditProfile(newUserName));
            setIsEditing(false);
        } catch (err) {
            console.log(err);
            setError(err.message);
        }
    };

    return (
        <div>
            {isEditing ? (
                <div>
                    <TextInput
                        label="Username "
                        id="username"
                        type="text"
                        autoComplete="username"
                        onChange={(e) => {
                            setNewUserName(e.target.value)
                            setError("")

                        }}
                        value={newUserName} />
                    {error && <p className="error-message">{error}</p>}
                    <br />
                    <Button
                        className="edit-button"
                        onClick={editUserName}>
                        Save
                    </Button>
                </div>
            ) : (
                <Button
                    className="edit-button"
                    onClick={() => setIsEditing(true)}>
                    Edit UserName
                </Button>
            )}
        </div>
    )
}