

let allJobs = [];

// ye function jobs ko screen par dikhata hai
function displayJobs(jobs) {
  const jobsContainer = document.getElementById("jobsContainer");
  const messageBox = document.getElementById("messageBox");

  jobsContainer.innerHTML = "";
  messageBox.innerHTML = "";

  if (jobs.length === 0) {
    messageBox.innerHTML = "No jobs found";
    return;
  }

  jobs.forEach(function(job) {
    const card = document.createElement("div");
    card.classList.add("job-card");

    card.innerHTML = `
      <h3>${job.title}</h3>
      <p><strong>Company:</strong> ${job.company_name}</p>
      <p><strong>Location:</strong> ${job.candidate_required_location}</p>
      <p><strong>Category:</strong> ${job.category}</p>
      <p><strong>Type:</strong> ${job.job_type || "Not Given"}</p>
      <a href="${job.url}" target="_blank" class="apply-btn">Apply Now</a>
    `;

    jobsContainer.appendChild(card);
  });
}

// ye function API se jobs laata hai
async function fetchJobs() {
  const jobsContainer = document.getElementById("jobsContainer");

  try {
    const response = await fetch("https://remotive.com/api/remote-jobs");
    const data = await response.json();

    allJobs = data.jobs.slice(0, 20); // sirf 20 jobs le rahe hain
    displayJobs(allJobs);
  } catch (error) {
    // agar API fail ho jaye to simple sample data dikhayenge
    allJobs = [
      {
        title: "Frontend Developer",
        company_name: "ABC Tech",
        candidate_required_location: "India",
        category: "Software Development",
        job_type: "full_time",
        url: "https://example.com"
      },
      {
        title: "Backend Intern",
        company_name: "XYZ Company",
        candidate_required_location: "Remote",
        category: "Internship",
        job_type: "part_time",
        url: "https://example.com"
      },
      {
        title: "UI Designer",
        company_name: "Design Studio",
        candidate_required_location: "Delhi",
        category: "Design",
        job_type: "contract",
        url: "https://example.com"
      }
    ];

    displayJobs(allJobs);
  }
}

// ye function search aur filter karta hai
function searchJobs() {
  const searchValue = document.getElementById("searchInput").value.toLowerCase();
  const locationValue = document.getElementById("locationInput").value.toLowerCase();
  const typeValue = document.getElementById("jobTypeFilter").value;

  const filteredJobs = allJobs.filter(function(job) {
    const titleMatch = job.title.toLowerCase().includes(searchValue);
    const locationMatch = job.candidate_required_location.toLowerCase().includes(locationValue);

    let typeMatch = true;
    if (typeValue !== "all") {
      typeMatch = job.job_type === typeValue;
    }

    return titleMatch && locationMatch && typeMatch;
  });

  displayJobs(filteredJobs);
}

// page load hote hi jobs fetch hongi
fetchJobs();