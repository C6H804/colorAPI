export const getPermissions = async () => {
    try {
        const response = await fetch("http://127.0.0.1:3000/api/permissions", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        });
        const data = await response.json();
        if (!data.valid) {
            console.error("Invalid permissions response:", data.message);
            return [];
        }
        return data.value;
    } catch (error) {
        console.error("Error fetching permissions:", error);
        return [];
    }
};