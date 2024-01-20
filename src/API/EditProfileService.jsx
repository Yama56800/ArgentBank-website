
const editProfileService = async (token, newUserName) => {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({ userName: newUserName }),
    });

    if (!response.ok) {
      throw new Error("Échec de la mise à jour du nom d'utilisateur");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Erreur lors de la mise à jour du nom d'utilisateur");
  }
};

export default editProfileService;
