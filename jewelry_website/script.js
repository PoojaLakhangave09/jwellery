
    const hero = document.getElementById("hero");
    const video = document.getElementById("bgVideo");

    const images = [
      "https://plus.unsplash.com/premium_photo-1661645473770-90d750452fa0?q=80&w=870&auto=format&fit=crop",
      "https://png.pngtree.com/background/20231016/original/pngtree-sparkling-diamond-jewelry-designs-on-a-chic-gray-backdrop-3d-render-picture-image_5583186.jpg",
      "https://plus.unsplash.com/premium_photo-1661645473770-90d750452fa0?q=80&w=870&auto=format&fit=crop"
    ];

    let current = 0;

    function startImageRotation() {
      video.style.display = "none";
      setInterval(() => {
        current = (current + 1) % images.length;
        hero.style.backgroundImage = `url('${images[current]}')`;
      }, 5000);
    }

    // Option 1: On video end
    video.addEventListener('ended', startImageRotation);

    // Option 2: Fallback in case video doesn't fire "ended"
    setTimeout(startImageRotation, 8000);
  