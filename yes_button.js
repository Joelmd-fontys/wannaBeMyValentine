document.addEventListener("click", (event) => {
    if (event.target.matches(".my-custom-button-class-yes")) {
        // Example array of image URLs
        const imageUrls = ["bottom_flowers.png","corner_flowers_1.png","corner_flowers_2.png","yippee-icegif-1.gif","cat.gif"];

        imageUrls.forEach((url) => {
            // Extract the filename without extension
            const baseName = url.split("/").pop().split(".").shift();

            // Create an image element
            const img = document.createElement("img");
            img.src = url;

            // Give each image a unique class based on the filename
            img.classList.add(`my-valentine-image-${baseName}`);

            // Start with 0 opacity
            img.style.opacity = "0";
            // Optional transition for a smoother fade
            img.style.transition = "opacity 2s ease";

            // Append the image to the document
            document.body.appendChild(img);

            // Trigger a reflow, then set opacity to 1
            requestAnimationFrame(() => {
                img.style.opacity = "1";
            });
        });
    }
});
