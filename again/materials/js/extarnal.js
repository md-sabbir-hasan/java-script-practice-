particlesJS("particles-js", {
        particles: {
          number: { value: 80 },
          color: { value: "#7bed9f" },
          size: { value: 4 },
          opacity: { value: 0.8 },
          line_linked: {
            enable: true,
            color: "#7bed9f",
            distance: 200,
          },
          move: {
            speed: 10,
          },
        },
        interactivity: {
          events: {
            onhover: { enable: true, mode: "repulse" },
          },
        },
      });


      // div-4
  
  function showContent(img, title, desc) {
    document.getElementById("rightImg").src = img;
    document.getElementById("rightTitle").innerText = title;
    document.getElementById("rightDesc").innerText = desc;
  }

