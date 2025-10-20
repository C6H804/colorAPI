const Auth = async () => {
    const token = localStorage.getItem("token");
    if (!token) return window.location.href = "/index.html";

    const response = await fetch("http://193.252.183.142:3000/api/auth", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        }
    });
    const result = await response.json();
    if (!result.valid)
        {
            localStorage.removeItem("token");
            return window.location.href = "/index.html";
        }
    return result;
}
export { Auth };