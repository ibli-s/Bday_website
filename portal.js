function showPortal() {

    document.querySelector(".computer-screen").innerHTML = `

        <div class="portal-screen">

            <div class="portal-text">

                <p class="system-text">SYSTEM STATUS</p>

                <h1>LEVEL 20 ACHIEVED</h1>

                <p class="portal-description">
                    A new stage has been detected...
                </p>

                <button class="portal-button" onclick="activatePortal()">
                    ENTER THE PORTAL
                </button>

            </div>


            <div class="portal">

                <div class="portal-glow"></div>

                <div class="portal-ring ring-one"></div>
                <div class="portal-ring ring-two"></div>
                <div class="portal-ring ring-three"></div>

                <div class="portal-core"></div>


                <!-- PALLAVI PHOTOS -->

                <div class="portal-photo photo-one">
                    <img src="img/img5.jpeg" alt="Pallavi">
                </div>

                <div class="portal-photo photo-two">
                    <img src="img/img2.jpeg" alt="Pallavi">
                </div>

                <div class="portal-photo photo-three">
                    <img src="img/img3.jpeg" alt="Pallavi">
                </div>

                <div class="portal-photo photo-four">
                    <img src="img/img4.jpeg" alt="Pallavi">
                </div>

            </div>


            <p class="portal-entering">
                A NEW STAGE AWAITS...
            </p>

        </div>

    `;
}


function activatePortal() {

    const portalScreen = document.querySelector(".portal-screen");

    portalScreen.classList.add("portal-opening");

    setTimeout(function () {
        showProfile();
    }, 2100);

}