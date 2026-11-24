const installButton = document.getElementById("installButton");

installButton.addEventListener("click", function () {

    document.querySelector(".update-box").innerHTML = `
        <h1>PALLAVI 2.0</h1>

        <h2>INSTALLING UPDATE...</h2>

        <div class="progress-container">
            <div class="progress-bar" id="progressBar"></div>
        </div>

        <p id="progressText">Initializing...</p>
    `;

    let progress = 0;

    const progressBar = document.getElementById("progressBar");
    const progressText = document.getElementById("progressText");

    const messages = [
        "Checking system...",
        "Installing adulthood...",
        "Downloading wisdom...",
        "Downloading responsibility...",
        "Installing confidence...",
        "Installing questionable decisions...",
        "Installing new problems...",
        "Finalizing update..."
    ];

    const interval = setInterval(function () {

        progress += 2;

        progressBar.style.width = progress + "%";

        let messageIndex = Math.floor(progress / 13);

        if (messageIndex >= messages.length) {
            messageIndex = messages.length - 1;
        }

        progressText.textContent = messages[messageIndex];

        if (progress >= 100) {

            clearInterval(interval);

            progressText.textContent = "UPDATE COMPLETE.";

            setTimeout(function () {
                showBirthdayPage();
            }, 1000);
        }

    }, 100);
});


function showBirthdayPage() {

    document.querySelector(".computer-screen").innerHTML = `

        <div class="birthday-page">

            <h1>UPDATE COMPLETE.</h1>

            <div class="line"></div>

            <h2>PALLAVI 2.0 HAS BEEN INSTALLED</h2>

            <p>30 September 2006 → 30 September 2026</p>

            <h3>LEVEL 20 UNLOCKED</h3>

            <p>
                Congratulations, Pallavi.
                <br>
                You have successfully survived 20 years.
            </p>

            <button onclick="showStats()">CONTINUE</button>

        </div>

    `;
}


function showStats() {

    document.querySelector(".computer-screen").innerHTML = `

        <div class="birthday-page">

            <h1>PALLAVI</h1>

            <h2>LEVEL 20</h2>

            <div class="line"></div>

            <div class="stats">

                <div class="stat">
                    <span>INTELLIGENCE</span>
                    <div class="bar">
                        <div class="fill intelligence"></div>
                    </div>
                </div>

                <div class="stat">
                    <span>MAX CREATIVITY</span>
                    <div class="bar">
                        <div class="fill creativity"></div>
                    </div>
                </div>

                <div class="stat">
                    <span>CONFIDENCE</span>
                    <div class="bar confidence-bar">
                        <div class="fill confidence"></div>
                    </div>
                </div>

                <div class="stat">
                    <span>LUCK</span>
                    <div class="bar">
                        <div class="fill luck"></div>
                    </div>
                </div>

                <div class="stat">
                    <span>WISDOM</span>
                    <div class="bar">
                        <div class="fill wisdom"></div>
                    </div>
                    <span class="whats-that">what's that?</span>
                </div>

                <div class="stat">
                    <span>PATIENCE</span>
                    <div class="bar">
                        <div class="fill patience"></div>
                    </div>
                </div>

                <div class="stat">
                    <span>PROCRASTINATION</span>
                    <div class="bar">
                        <div class="fill procrastination"></div>
                    </div>
                </div>

            </div>

            <p class="stats-verdict">
                These are your stats now.<br>
                Even if you don't like them, deal with it.
            </p>

            <button onclick="showPortal()">ACCEPT MY FATE</button>

        </div>

    `;

    setTimeout(() => {

        document.querySelector(".intelligence").style.width = "20%";

        document.querySelector(".creativity").style.width = "100%";

        document.querySelector(".confidence").style.width = "180%";

        document.querySelector(".luck").style.width = "70%";

        document.querySelector(".wisdom").style.width = "8%";

        document.querySelector(".patience").style.width = "0%";

        document.querySelector(".procrastination").style.width = "100%";

    }, 300);
}