//-----------------------------LEETMETRIC---------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const SearchButton = document.getElementById("search-button");
  const UserNameInput = document.getElementById("user-input");
  const StatsContainer = document.querySelector(".stats-container");

  const EasyProgressCircle = document.querySelector(".easy-progress");
  const MediumProgressCircle = document.querySelector(".Medium-progress");
  const HardProgressCircle = document.querySelector(".Hard-progress");

  const EasyLabel = document.getElementById("easy-label");
  const MediumLabel = document.getElementById("Medium-label");
  const HardLabel = document.getElementById("Hard-label");
  const CardStatsContainer = document.querySelector(".stats-card");

  const LoadingText = document.querySelector(".loading-text");
const ProgressSection = document.querySelector(".progress");

  

  function validUsername(username) {
    if (username.trim() === "") {
      alert("UserName should not be Empty! ");
      return false;
    }

    const regex = /^[a-zA-Z0-9_-]{1,15}$/;
    const isMatching = regex.test(username);
    if (!isMatching) {
      alert("Invalid UserName");
    }
    return isMatching;
  }

  async function FetchUserDetails(username) {
    //direct API call
    const url = `https://leetcode-stats-api.herokuapp.com/${username}`;

    //     const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    //     const targetUrl = 'https://leetcode.com/graphql/';

    //     const myHeaders = new Headers();
    //     myHeaders.append("content-type" , "application/json");

    //     const graphql = JSON.stringify({
    //   query: `
    //     query userSessionProgress($username: String!) {
    //       allQuestionsCount {
    //         difficulty
    //         count
    //       }
    //       matchedUser(username: $username) {
    //         submitStats {
    //           acSubmissionNum {
    //             difficulty
    //             count
    //             submissions
    //           }
    //           totalSubmissionNum {
    //             difficulty
    //             count
    //             submissions
    //           }
    //         }
    //       }
    //     }
    //   `,
    //   variables: { "username": `${username}` }
    // });

    // const requestOptions = {
    //   method: "POST",
    //   headers: myHeaders,
    //   body: graphql,
    //   redirect: "follow"
    // };

    // const response = await fetch(proxyUrl + targetUrl, requestOptions);

    SearchButton.textContent = "Searching...";
    SearchButton.disabled = true;

  // Loading state
  LoadingText.style.display = "block";
  ProgressSection.style.display = "none";
  CardStatsContainer.style.display = "none";
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Unable to fetch the user details");
      }
      const parsedData = await response.json();
      console.log("Logginggg Data : ", parsedData);

      DisplayUserData(parsedData);

    
    LoadingText.style.display = "none";
    ProgressSection.style.display = "flex";
    CardStatsContainer.style.display = "grid";


    } catch (error) {
          LoadingText.style.display = "none";
    CardStatsContainer.style.display = "block";
      StatsContainer.innerHTML = `<p>${error.message}</p>`;
      
    } finally {
      SearchButton.textContent = "Search";
      SearchButton.disabled = false;
    }
  }

  function updateProgress(solved, total, label, circle) {
    if (!circle || !label || total === 0) return;

    const ProgressDegree = (solved / total) * 100;
    circle.style.setProperty("--progress-degree", `${ProgressDegree}%`);

    let difficulty = "";

    if (circle.classList.contains("easy-progress")) {
      difficulty = "Easy";
    } else if (circle.classList.contains("Medium-progress")) {
      difficulty = "Medium";
    } else if (circle.classList.contains("Hard-progress")) {
      difficulty = "Hard";
    }

    label.textContent = `(${solved}/${total})\n${difficulty}`;
  }

  function DisplayUserData(parsedData) {
    const totalques = parsedData.totalQuestions;
    const totaleasyques = parsedData.totalEasy;
    const totalmediumques = parsedData.totalMedium;
    const totalhardques = parsedData.totalHard;

    const Solvedques = parsedData.totalSolved;
    const Solvedeasyques = parsedData.easySolved;
    const Solvedmediumques = parsedData.mediumSolved;
    const Solvedhardques = parsedData.hardSolved;

    updateProgress(
      Solvedeasyques,
      totaleasyques,
      EasyLabel,
      EasyProgressCircle
    );
    updateProgress(
      Solvedmediumques,
      totalmediumques,
      MediumLabel,
      MediumProgressCircle
    );
    updateProgress(
      Solvedhardques,
      totalhardques,
      HardLabel,
      HardProgressCircle
    );

    const cardData = [
      {
        label: "Acceptance rate",
        value: parsedData.acceptanceRate,
      },
      {
        label: "Ranking",
        value: parsedData.ranking,
      },
      { label: "Contribution Points", value: parsedData.contributionPoints },
    ];

    console.log("card data : " + cardData);

    CardStatsContainer.innerHTML = cardData
      .map((data) => {
        return `
        <div class="card" >
        <h3> ${data.label} </h3>
        <p> ${data.value} </p>
        </div>
        `;
      })
      .join("");
  }

  SearchButton.addEventListener("click", function () {
    const username = UserNameInput.value;
    console.log("logginggggg Username : ", username);

    if (validUsername(username)) {
      FetchUserDetails(username);
    }
  });
});
