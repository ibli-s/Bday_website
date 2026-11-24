/* =====================================================
   PALLAVI BURST
   FILM STRIPS -> CAMERA -> BIRTHDAY FINALE
   ===================================================== */

const burstPhotos = [
    "img20.jpeg",
    "img21.jpeg",
    "img23.jpeg",
    "img25.jpeg",
    "img26.jpeg",
    "img27.jpeg",
    "img28.jpeg",
    "img29.jpeg",
    "img30.jpeg",
    "img31.jpeg",
    "img32.jpeg",
    "img33.jpeg",
    "img34.jpeg",
    "img35.jpeg"
];


/* =====================================================
   SHOW BURST
   ===================================================== */

window.showBurstBooth = function () {

    const screen = document.querySelector(".computer-screen");

    if (!screen) {
        console.error("Burst: computer-screen not found.");
        return;
    }

    screen.innerHTML = `
        <div class="burst-screen">

            <div class="burst-heading">
                <span>ONE LAST SNAPSHOT</span>
                <small>BEFORE THE NEXT CHAPTER</small>
            </div>

            <div class="film-stage">

                <div
                    class="film-strip film-strip-left"
                    id="filmStripLeft">
                </div>

                <div
                    class="film-strip film-strip-right"
                    id="filmStripRight">
                </div>

            </div>

            <button
                class="burst-camera-button"
                id="burstCameraButton">
                <span class="camera-icon">●</span>
                CAPTURE
            </button>

            <div class="photobooth-stage">

                <div class="birthday-finale">

                    <div class="photobooth-strip">

                        <div
                            class="booth-photos"
                            id="boothPhotos">
                        </div>

                    </div>

                    <div class="birthday-message">

                        <div class="floating-star star-one">✦</div>
                        <div class="floating-star star-two">✧</div>
                        <div class="floating-star star-three">✦</div>
                        <div class="floating-star star-four">⋆</div>

                        <div class="balloon balloon-one"></div>
                        <div class="balloon balloon-two"></div>
                        <div class="balloon balloon-three"></div>

                        <div class="birthday-cake">

                            <div class="cake-candle candle-one">
                                <span></span>
                            </div>

                            <div class="cake-candle candle-two">
                                <span></span>
                            </div>

                            <div class="cake-candle candle-three">
                                <span></span>
                            </div>

                            <div class="cake-top"></div>

                            <div class="cake-body">

                                <div class="cake-cream cream-one"></div>
                                <div class="cake-cream cream-two"></div>
                                <div class="cake-cream cream-three"></div>

                            </div>

                            <div class="cake-plate"></div>

                        </div>

                        <p class="birthday-small">
                            LEVEL 20 UNLOCKED
                        </p>

                        <h1>
                            HAPPY<br>
                            20TH,
                            <span>PALLAVI!</span>
                        </h1>

                        <div class="birthday-line"></div>

                        <p class="birthday-wish">
                            apparently,<br>
                            one picture<br>
                            was never enough.
                        </p>

                        <p class="birthday-note">
                            Here's to another year<br>
                            of laughter, chaos,<br>
                            and memories worth keeping. ♡
                        </p>

                        <div class="birthday-confetti">
                            <span>✦</span>
                            <span>·</span>
                            <span>✧</span>
                            <span>·</span>
                            <span>✦</span>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    `;

    createFilmStrips();
    createPhotobooth();

    const cameraButton =
        document.getElementById("burstCameraButton");

    if (cameraButton) {
        cameraButton.addEventListener(
            "click",
            captureBurst
        );
    }

    requestAnimationFrame(function () {

        const burstScreen =
            document.querySelector(".burst-screen");

        if (burstScreen) {
            burstScreen.classList.add("started");
        }

    });
};


/* =====================================================
   CREATE FILM STRIPS
   ===================================================== */

function createFilmStrips() {

    const leftStrip =
        document.getElementById("filmStripLeft");

    const rightStrip =
        document.getElementById("filmStripRight");

    if (!leftStrip || !rightStrip) {
        console.error("Burst: film strips not found.");
        return;
    }

    leftStrip.innerHTML = "";
    rightStrip.innerHTML = "";

    for (let i = 0; i < 7; i++) {

        const frame =
            createFilmFrame(
                burstPhotos[i],
                i
            );

        leftStrip.appendChild(frame);
    }

    for (let i = 7; i < 14; i++) {

        const frame =
            createFilmFrame(
                burstPhotos[i],
                i
            );

        rightStrip.appendChild(frame);
    }
}


/* =====================================================
   CREATE ONE FILM FRAME
   ===================================================== */

function createFilmFrame(photo, index) {

    const frame =
        document.createElement("div");

    frame.className = "film-frame";

    const photoContainer =
        document.createElement("div");

    photoContainer.className =
        "film-photo";

    const image =
        document.createElement("img");

    image.src = photo;

    image.alt =
        "Burst frame " +
        (index + 1);

    photoContainer.appendChild(image);

    const number =
        document.createElement("span");

    number.className =
        "frame-number";

    number.textContent =
        String(index + 1).padStart(2, "0");

    frame.appendChild(photoContainer);
    frame.appendChild(number);

    return frame;
}


/* =====================================================
   CAPTURE
   ===================================================== */

function captureBurst() {

    const burstScreen =
        document.querySelector(".burst-screen");

    if (!burstScreen) {
        return;
    }

    burstScreen.classList.add("captured");

    const cameraButton =
        document.getElementById("burstCameraButton");

    if (cameraButton) {
        cameraButton.disabled = true;
    }

    setTimeout(function () {

        burstScreen.classList.add(
            "transforming"
        );

    }, 900);
}


/* =====================================================
   CREATE FINAL PHOTOBOOTH
   ONLY 7 PHOTOS
   ===================================================== */

function createPhotobooth() {

    const boothPhotos =
        document.getElementById("boothPhotos");

    if (!boothPhotos) {
        console.error("Burst: booth photos not found.");
        return;
    }

    boothPhotos.innerHTML = "";

    const finalPhotos =
        burstPhotos.slice(0, 7);

    finalPhotos.forEach(function (photo, index) {

        const photoBox =
            document.createElement("div");

        photoBox.className =
            "booth-photo";

        const image =
            document.createElement("img");

        image.src = photo;

        image.alt =
            "Birthday photo " +
            (index + 1);

        photoBox.appendChild(image);

        boothPhotos.appendChild(photoBox);

    });
}
