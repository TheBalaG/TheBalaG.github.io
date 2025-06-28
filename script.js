document.addEventListener("DOMContentLoaded", async () => {
  const res = await fetch("data.json");
  const data = await res.json();

  /* === Render Small Info Cards (Education) === */
  const renderCards = (containerId, items) => {
    const container = document.getElementById(containerId);
    items.forEach((item) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h3>${item.title || item.name}</h3>
        <p>${item.description || ""}</p>
      `;
      container.appendChild(card);
    });
  };

  /* === Render Grouped Projects by Category === */
  const renderGroupedProjects = (containerId, projects) => {
    const container = document.getElementById(containerId);
    const grouped = {};

    // Group projects
    projects.forEach((project) => {
      if (!grouped[project.category]) grouped[project.category] = [];
      grouped[project.category].push(project);
    });

    // Render groups
    Object.entries(grouped).forEach(([category, projectList]) => {
      const sectionTitle = document.createElement("h3");
      sectionTitle.textContent = category;
      sectionTitle.className = "section-subtitle";
      container.appendChild(sectionTitle);

      projectList.forEach((project) => {
        const wrapper = document.createElement("div");
        wrapper.className = "full-width";

        const card = document.createElement("div");
        card.className = "card project-card";

        const techList = project.tech?.map(
          (t) => `<span class="tech-tag">${t}</span>`
        ).join(" ") || "";

        card.innerHTML = `
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <hr class="card-divider" />
          <p><strong>Client:</strong> ${project.client}</p>
          <p><strong>Tech Used:</strong> ${techList}</p>
          <div class="btn-group">
            ${project.demo ? `<a href="${project.demo}" target="_blank" class="btn">Live Demo</a>` : ""}
            ${project.code ? `<a href="${project.code}" target="_blank" class="btn outline">View Code</a>` : ""}
          </div>
        `;

        wrapper.appendChild(card);
        container.appendChild(wrapper);
      });
    });
  };

  /* === Render Experience Timeline === */
  const renderExperience = (containerId, experiences) => {
    const container = document.getElementById(containerId);

    experiences.forEach((exp) => {
      const block = document.createElement("div");
      block.className = "timeline-item";

      const skills = exp.skills?.map(
        (skill) => `<span class="tech-tag">${skill}</span>`
      ).join(" ") || "";

      block.innerHTML = `
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <h3>${exp.title} <span class="company">@ ${exp.company}</span></h3>
          <p class="timeline-date">${exp.timeline}</p>
          <p>${exp.description}</p>
          <div class="skills-used">${skills}</div>
        </div>
      `;
      container.appendChild(block);
    });
  };

  /* === Render Skill Icons === */
  const renderSkills = (skills) => {
    const container = document.getElementById("skills-container");
    skills.forEach((skill) => {
      const icon = document.createElement("div");
      icon.className = "skill-icon";
      icon.innerHTML = `
        <img src="${skill.icon}" alt="${skill.name}" title="${skill.name}" />
      `;
      container.appendChild(icon);
    });
  };

  // Run all renderers
  renderGroupedProjects("projects-container", data.projects);
  renderCards("education-container", data.education);
  renderExperience("experience-container", data.experience);
  renderSkills(data.skills);

  /* === Typing Animation === */
  new TypeIt("#typing", {
    strings: ["Web Developer", "Laravel Developer", "Cloud Enthusiast","Digital Marketer" ,"Freelancer"],
    speed: 100,
    breakLines: false,
    loop: true,
    waitUntilVisible: true,
  }).go();  
});

 document.addEventListener('DOMContentLoaded', function () {
   tsParticles.load("tsparticles", {
    fullScreen: { enable: false }, // already inside a specific container
    background: { color: "transparent" },
    particles: {
      number: { value: 25, density: { enable: true, area: 800 } },
      shape: {
        type: "image",
        image: [
          {
            src: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png", // HTML5
            width: 32,
            height: 32
          },
          {
            src: "https://cdn-icons-png.flaticon.com/512/919/919826.png", // Laravel
            width: 32,
            height: 32
          },
          {
            src: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png", // PHP
            width: 32,
            height: 32
          },
          {
            src: "https://cdn-icons-png.flaticon.com/512/919/919825.png", // JS
            width: 32,
            height: 32
          }
        ]
      },
      size: {
        value: 20,
        random: { enable: true, minimumValue: 10 }
      },
      opacity: {
        value: 0.9
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        outModes: "out"
      }
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" },
        onClick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        grab: {
          distance: 150,
          links: { opacity: 0.5 }
        },
        push: { quantity: 4 }
      }
    },
    detectRetina: true
  });


  

  });
