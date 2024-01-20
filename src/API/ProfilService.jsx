// services/profileService.js

const getProfileService = async (token) => {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Erreur lors de la récupération du profil utilisateur");
  }
};

export default getProfileService;
