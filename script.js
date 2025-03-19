document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.querySelector(".gallery");
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    lightbox.innerHTML = `
        <img src="" alt="">
        <p class="caption"></p>
    `;
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector("img");
    const lightboxCaption = lightbox.querySelector(".caption");

    const galleryData = [
        { thumb: "images/image1.jpeg", hd: "hd/image1.jpg", caption: "Green foliage texture" },
        { thumb: "images/image2.jpeg", hd: "hd/image2.jpg", caption: "Mountain landscape Ponta Delgada island, Azores" },
        { thumb: "images/image3.jpeg", hd: "hd/image3.jpg", caption: "Breathtaking panorama of morning wild nature high in mountains" },
        { thumb: "images/image4.jpeg", hd: "hd/image4.jpg", caption: "Woman overlooking waterfall at Skogafoss, Iceland" },
        { thumb: "images/image5.jpeg", hd: "hd/image5.jpg", caption: "Beautiful rays of sunlight in a green forest" },
        { thumb: "images/image6.jpeg", hd: "hd/image6.jpg", caption: "Colorful Autumn Season and Mountain Fuji" },
        { thumb: "images/image7.jpeg", hd: "hd/image7.jpg", caption: "Female Kingfisher emerging from the water" },
        { thumb: "images/image8.jpeg", hd: "hd/image8.jpg", caption: "Impressive summer sunrise on Eibsee lake with Zugspitze mountain range" },
        { thumb: "images/image9.jpeg", hd: "hd/image9.jpg", caption: "Abstract green leaf texture, nature background, tropical leaf" },
        { thumb: "images/image10.jpeg", hd: "hd/image10.jpg", caption: "Mountain landscape" },
        { thumb: "images/image11.jpeg", hd: "hd/image11.jpg", caption: "Walkway in a green spring beech forest in Leuven" },
        { thumb: "images/image12.jpeg", hd: "hd/image12.jpg", caption: "Sunset field landscape" }
    ];

    // Dynamically create gallery images
    galleryData.forEach((image) => {
        const imgElement = document.createElement("img");
        imgElement.src = image.thumb;
        imgElement.alt = image.caption;
        imgElement.classList.add("gallery-img");
        imgElement.dataset.hd = image.hd;
        imgElement.dataset.caption = image.caption;
        gallery.appendChild(imgElement);
    });

    // Event Delegation - Open Lightbox
    gallery.addEventListener("click", (event) => {
        if (event.target.classList.contains("gallery-img")) {
            lightbox.classList.add("show");
            lightboxImg.src = event.target.dataset.hd;
            lightboxCaption.textContent = event.target.dataset.caption;
        }
    });

    // Close Lightbox when clicking on it
    lightbox.addEventListener("click", () => {
        lightbox.classList.remove("show");
        lightboxImg.src = ""; // Clear the HD image
    });
});
