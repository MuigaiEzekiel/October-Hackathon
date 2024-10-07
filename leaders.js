const searchLeader = document.getElementById("search--leader");
const searchLeaderIcon = document.querySelector(".search--leader--icon");
const leaderContainer = document.querySelector(".leader--container");
let leaderProfile = document.querySelector(".leader--profile");
const sectionThree = document.querySelector(".section--3");
const insertedContainer = document.querySelector(".inserted--container");
// const Leaders = {
//   trackLeader[0]: [],
// };

// leader html
const removeChild = function () {
  while (leaderContainer.firstChild) {
    leaderContainer.removeChild(leaderContainer.firstChild);
  }
};

let previousleaderHtml = null;
console.log(leaderContainer.firstElementChild);
const renderLeader = function () {
  removeChild();
  const trackLeader = [];
  trackLeader.push(searchLeader.value);
  leaderContainer.firstElementChild = "";
  const leaderHtml = ` 
<div class="inserted--container">
          <div class="leader--profile">
            <!-- Profile Picture -->
            <img
              src="https://via.placeholder.com/150"
              alt="Leader Profile Picture"
            />

            <!-- Leader's Name and Title -->
            <h2> ${trackLeader[0]} </h2>
            <p>CEO & Founder</p>

            <!-- Description -->
            <div class="description">
              ${trackLeader[0]} is an experienced leader with a passion for innovation
              and leadership. With over 15 years in the industry, she has led
              her team to success and continues to strive for excellence in
              every project.
            </div>

            <!-- Social Media Links -->
            <div class="social-icons">
              <a href="#" class="twitter"><i class="fab fa-twitter"></i></a>
              <a href="#" class="linkedin"><i class="fab fa-linkedin"></i></a>
              <a href="#" class="github"><i class="fab fa-github"></i></a>
            </div>
          </div>
          <div class="services--container">
            <div class="mental--health">
              <p>Leaders promises</p>
              <button class="mental--health--btn">
                <i class="fa-arrow-right"></i>
              </button>
            </div>
            <div class="disabilities">
              <p>perfomance</p>
              <button class="disabilities--btn">
                <i class="fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <div class="leader--promise--status">
            <p>
              A section where users can view campaign promises made by
              officials, with statuses indicating whether they are fulfilled, in
              progress, or unfulfilled.
            </p>

            <h2>Leader's Promises</h2>

            <!-- Promise Card 1 -->
            <div class="promise-search--container">
              <div>
                <h3>Expand Company Reach to 20 Countries</h3>
                <p>Goal: Reach more markets by end of year.</p>
              </div>
              <span class="status completed">Completed</span>
            </div>

            <!-- Promise Card 2 -->
            <div class="promise-search--container">
              <div>
                <h3>Launch New AI Product</h3>
                <p>Goal: To innovate and automate customer service.</p>
              </div>
              <span class="status in-progress">In Progress</span>
            </div>

            <!-- Promise Card 3 -->
            <div class="promise-search--container">
              <div>
                <h3>Reduce Company Carbon Footprint</h3>
                <p>Goal: Achieve carbon neutrality by 2025.</p>
              </div>
              <span class="status pending">Pending</span>
            </div>
          </div>
          <div class="leader--performance--records">
            <p>
              Data visualizations and metrics showing officials' performance on
              key issues, such as voting records, attendance at meetings, and
              community engagement.
            </p>
          </div>
        </div>
        <!-- metrics -->
        <div class="feedback-container">
          <h1>Feedback on Officials' Actions</h1>

          <!-- Feedback Form -->
          <div class="feedback-form">
            <h2>Leave Your Feedback</h2>
            <form id="feedbackForm">
              <label for="rating">Rate the Official:</label>
              <select id="rating" name="rating" required>trackLeader[0]="5">Excellent</option>trackLeader[0]="4">Good</option>trackLeader[0]="3">Average</option>trackLeader[0]="2">Poor</option>trackLeader[0]="1">Very Poor</option>
              </select>

              <label for="feedback">Your proposal:</label>
              <textarea
                id="feedback"
                name="feedback"
                required
                placeholder="Write your feedback..."
              ></textarea>

              <button type="submit">Submit proposal</button>
            </form>
          </div>

          <!-- Feedback Display Section -->
          <div class="feedback-display">
            <h2>Recent Feedback</h2>
            <ul id="feedbackList"></ul>
          </div>
          
    </div>

          `;
  console.log(leaderContainer);
  leaderContainer.firstChild;

  !leaderContainer.firstElementChild
    ? leaderContainer.insertAdjacentHTML("afterbegin", leaderHtml)
    : console.log("qwerty");

  //leaderHtml = previousleaderHtml;

  // previousleaderHtml = leaderHtml;
};

searchLeaderIcon.addEventListener("click", renderLeader);
