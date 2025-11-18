document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".theme-btn");

    console.log("Theme JS loaded:", buttons.length, "buttons found");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const theme = btn.dataset.theme;
            console.log("Clicked theme:", theme);

            if (theme === "dark") {
                document.documentElement.style.backgroundColor = "black";
                document.documentElement.style.color = "#F3F4F6";
            }

            if (theme === "light") {
                document.documentElement.style.backgroundColor = "#BFA98A"; 
                document.documentElement.style.color = "black";
            }

            if (theme === "blue") {
                document.documentElement.style.backgroundColor = "#001F3F";
                document.documentElement.style.color = "#F6F6F6";
            }
        });
    });

    const copyBtn = document.getElementById("copy-email-btn");
    const copyMsg = document.getElementById("copy-msg");

    copyBtn.addEventListener("click", () => {
        const email = "vivangarg124@gmail.com"; 

        navigator.clipboard.writeText(email).then(() => {
            copyMsg.style.display = "block";
            setTimeout(() => {
                copyMsg.style.display = "none";
            }, 1500);
        });
    });
});
