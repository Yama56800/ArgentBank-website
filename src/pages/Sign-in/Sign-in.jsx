import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setLogIn } from "../../redux/Reducers/UserAuthSlice"
import TextInput from "../../components/TextInput/TextInput"
import Button from "../../components/Button/Button"
import signInService from "../../Services/API/SignInService"

export default function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [checkBox, setCheckBox] = useState(false)
    const [error, setError] = useState(null)  // Ajout d'un état pour gérer les erreurs

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const fetchLogIn = async (e) => {
        e.preventDefault();
        try {
            const response = await signInService(email, password);
            if (!response.ok) {  // Vérification si la réponse est correcte
                throw new Error("Connexion échouée");  // Génération d'une erreur si la connexion échoue
            }
            const token = response.body.token;
            dispatch(setLogIn({ token }));
            navigate("/user");
            setError(null);  // Réinitialisation de l'erreur
        } catch (err) {
            console.error(err);
            setError("Erreur lors de la connexion");  // Affichage d'un message d'erreur
        }
    };

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={fetchLogIn}>
                    <TextInput
                        className="input-wrapper"
                        label="E-mail"
                        id="email"
                        type="text"
                        autoComplete="email"
                        onChange={(e) => setEmail(e.target.value)} />
                    <TextInput
                        className="input-wrapper"
                        label="Password"
                        id="password"
                        type="password"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)} />
                    <TextInput
                        className="input-remember"
                        label="Remember me"
                        id="remember-me"
                        type="checkbox"
                        onChange={() => setCheckBox(!checkBox)} />
                    <Button
                        className="sign-in-button"
                        type="submit">
                        Sign In
                    </Button>
                    {error && <p className="error-message">{error}</p>}
                </form>
            </section>
        </main>
    )
}
