
const signUpService = async (email, password, firstName, lastName, userName) => {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, firstName, lastName, userName })
    });

    return response; 
  } catch (err) {
    console.error(err);
    throw new Error("Erreur lors de l'inscription");
  }
};

export default signUpService;
