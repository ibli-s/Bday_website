function showProfile() {

    document.querySelector(".computer-screen").innerHTML = `

        <div class="profile-screen">

            <!-- =========================================
                 DECORATIVE ELEMENTS
                 ========================================= -->

            <!-- CAMERA 1 -->
            <div class="profile-doodle camera-doodle">
                <div class="camera-body">
                    <div class="camera-lens"></div>
                    <div class="camera-flash"></div>
                </div>
            </div>


            <!-- CAMERA 2 -->
            <div class="profile-doodle camera-doodle camera-two">
                <div class="camera-body">
                    <div class="camera-lens"></div>
                    <div class="camera-flash"></div>
                </div>
            </div>


            <!-- FLOWER 1 -->
            <div class="profile-doodle flower-doodle">
                <div class="flower">

                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>

                    <div class="flower-center"></div>

                </div>
            </div>


            <!-- FLOWER 2 -->
            <div class="profile-doodle flower-doodle flower-two">
                <div class="flower">

                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>

                    <div class="flower-center"></div>

                </div>
            </div>


            <!-- FLOWER 3 -->
            <div class="profile-doodle flower-doodle flower-three">
                <div class="flower">

                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>

                    <div class="flower-center"></div>

                </div>
            </div>


            <!-- SPARKLE 1 -->
            <div class="profile-doodle sparkle-doodle">
                <span>✦</span>
            </div>


            <!-- SPARKLE 2 -->
            <div class="profile-doodle sparkle-doodle sparkle-two">
                <span>✦</span>
            </div>


            <!-- SPARKLE 3 -->
            <div class="profile-doodle sparkle-doodle sparkle-three">
                <span>✦</span>
            </div>


            <!-- SPARKLE 4 -->
            <div class="profile-doodle sparkle-doodle sparkle-four">
                <span>✦</span>
            </div>


            <!-- CHOCOLATE 1 -->
            <div class="profile-doodle chocolate-doodle">
                <div class="chocolate">

                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>

                </div>
            </div>


            <!-- CHOCOLATE 2 -->
            <div class="profile-doodle chocolate-doodle chocolate-two">
                <div class="chocolate">

                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>

                </div>
            </div>


            <!-- CHOCOLATE 3 -->
            <div class="profile-doodle chocolate-doodle chocolate-three">
                <div class="chocolate">

                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>

                </div>
            </div>


            <!-- =========================================
                 MAIN PROFILE
                 ========================================= -->

            <div class="profile-content">

                <p class="profile-eyebrow">
                    ✦ CHARACTER PROFILE ✦
                </p>


                <h1 class="profile-name">
                    PALLAVI
                </h1>


                <p class="profile-subtitle">
                    LEVEL 20 · EST. 2006
                </p>


                <div class="profile-layout">


                    <!-- MAIN PHOTO -->

                    <div class="profile-main-photo" onclick="showMemories()">

                        <img
                            src="img/img1.jpeg"
                            alt="Pallavi"
                        >

                    </div>


                    <!-- PROFILE INFORMATION -->

                    <div class="profile-info">

                        <p class="profile-label">
                            CURRENT VERSION
                        </p>

                        <p class="profile-value">
                            20.0
                        </p>


                        <p class="profile-label">
                            KNOWN FOR
                        </p>

                        <p class="profile-value">
                            Being Pallavi.
                        </p>


                        <p class="profile-label">
                            STATUS
                        </p>

                        <p class="profile-value">
                            Somehow surviving.
                        </p>

                    </div>


                </div>

            </div>

        </div>

    `;

}


/* =====================================================
   MEMORY DATA
   ===================================================== */

const memories = [

    {
        phrase: "All our chaos",
        photos: [
            "img/img14.jpeg",
            "img/img7.jpeg",
            "img/img8.jpeg"
        ],
        layout: "memory-one"
    },


    {
        phrase: "and somehow we survived this",
        photos: [
            "img/img6.jpeg",
            "img/img10.jpeg",
            "img/img12.jpeg"
        ],
        layout: "memory-two"
    },


    {
        phrase: "we've made sooooo many core memories.",
        photos: [
            "img/img11.jpeg",
            "img/img13.jpeg",
            "img/img15.jpeg"
        ],
        layout: "memory-three"
    },


    {
        phrase: "I would do it all over again, will you ?",
        photos: [
            "img/img17.jpeg",
            "img/img16.jpeg",
            "img/img18.jpeg"
        ],
        layout: "memory-four"
    }

];


let currentMemory = 0;


/* =====================================================
   OPEN MEMORIES
   ===================================================== */

function showMemories() {

    currentMemory = 0;

    renderMemory();

}


/* =====================================================
   RENDER MEMORY
   ===================================================== */

function renderMemory() {

    const memory = memories[currentMemory];

    const screen = document.querySelector(".computer-screen");

    screen.innerHTML = `

        <div class="memories-screen ${memory.layout}">

            <!-- =========================================
                 SPACE DECORATIONS
                 ========================================= -->

            <!-- CAMERA 1 -->
            <div class="memory-doodle camera-doodle memory-camera-one">
                <div class="camera-body">
                    <div class="camera-lens"></div>
                    <div class="camera-flash"></div>
                </div>
            </div>


            <!-- CAMERA 2 -->
            <div class="memory-doodle camera-doodle memory-camera-two">
                <div class="camera-body">
                    <div class="camera-lens"></div>
                    <div class="camera-flash"></div>
                </div>
            </div>


            <!-- FLOWER 1 -->
            <div class="memory-doodle flower-doodle memory-flower-one">

                <div class="flower">

                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>

                    <div class="flower-center"></div>

                </div>

            </div>


            <!-- FLOWER 2 -->
            <div class="memory-doodle flower-doodle memory-flower-two">

                <div class="flower">

                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>

                    <div class="flower-center"></div>

                </div>

            </div>


            <!-- FLOWER 3 -->
            <div class="memory-doodle flower-doodle memory-flower-three">

                <div class="flower">

                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>

                    <div class="flower-center"></div>

                </div>

            </div>


            <!-- SPARKLE 1 -->
            <div class="memory-doodle sparkle-doodle memory-sparkle-one">
                <span>✦</span>
            </div>


            <!-- SPARKLE 2 -->
            <div class="memory-doodle sparkle-doodle memory-sparkle-two">
                <span>✦</span>
            </div>


            <!-- SPARKLE 3 -->
            <div class="memory-doodle sparkle-doodle memory-sparkle-three">
                <span>✦</span>
            </div>


            <!-- SPARKLE 4 -->
            <div class="memory-doodle sparkle-doodle memory-sparkle-four">
                <span>✦</span>
            </div>


            <!-- CHOCOLATE 1 -->
            <div class="memory-doodle chocolate-doodle memory-chocolate-one">

                <div class="chocolate">

                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>

                </div>

            </div>


            <!-- CHOCOLATE 2 -->
            <div class="memory-doodle chocolate-doodle memory-chocolate-two">

                <div class="chocolate">

                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>

                </div>

            </div>


            <!-- CHOCOLATE 3 -->
            <div class="memory-doodle chocolate-doodle memory-chocolate-three">

                <div class="chocolate">

                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>

                </div>

            </div>


            <!-- =========================================
                 MEMORY CONTENT
                 ========================================= -->

            <div class="memories-content">

                <p class="memories-eyebrow">
                    ✦ UNLEASHING MY GALLERY ✦
                </p>


                <h1>
                    MEMORIES
                </h1>


                <div class="memory-photos">

                    ${memory.photos.map((photo, index) => `

                        <div class="memory-photo memory-photo-${index + 1}">

                            <img
                                src="${photo}"
                                alt="Pallavi memory"
                            >

                        </div>

                    `).join("")}

                </div>


                <p class="memory-phrase">
                    ${memory.phrase}
                </p>


                <div class="memory-navigation">

                    ${
                        currentMemory > 0
                        ?
                        `<button onclick="previousMemory()">
                            ←
                        </button>`
                        :
                        `<span></span>`
                    }


                    ${
                        currentMemory < memories.length - 1
                        ?
                        `<button onclick="nextMemory()">
                            →
                        </button>`
                        :
                        `<button onclick="finishMemories()">
                            ✦
                        </button>`
                    }

                </div>

            </div>

        </div>

    `;

}

/* =====================================================
   NEXT MEMORY
   ===================================================== */

function nextMemory() {

    if (currentMemory < memories.length - 1) {

        currentMemory++;

        renderMemory();

    } else {

        finishMemories();

    }

}

/* =====================================================
   PREVIOUS MEMORY
   ===================================================== */

function previousMemory() {

    if (currentMemory > 0) {

        currentMemory--;

        renderMemory();

    }

}


/* =====================================================
   END OF MEMORIES
   ===================================================== */

function finishMemories() {

    const screen = document.querySelector(".computer-screen");

    /*
     * Fade the final memory out first.
     * This gives the transition a cinematic feel.
     */

    const memoryScreen =
        document.querySelector(".memories-screen");

    if (memoryScreen) {

        memoryScreen.classList.add(
            "memory-exit"
        );

    }


    /*
     * Wait for the final memory to
     * disappear, then start the burst.
     */

    setTimeout(() => {

        showBurstBooth();

    }, 900);

}