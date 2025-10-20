export const getUserPermissions = async (userId) => {
    try {
        const permissions = await fetch(`http://193.252.183.142:3000/api/permissions/${userId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        });
        const data = await permissions.json();
        return data.value;
    } catch (error) {
        console.error("Error fetching permissions:", error);
        return [];
    }
};