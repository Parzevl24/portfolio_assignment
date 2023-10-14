import "./profileSection.css"
function ProfileSection (){
    return (
        <div>hello from profile
            <section id="profile">
                <div class="section__pic-container">
                    <img src="" alt="profilepic"></img>
                </div>
                <div class="section__text">
                    <p class="section__text__p1">Hello I'm</p>
                    <h1 class="title"> Priyansu Kumar</h1>
                    <p class="section__text__p2"> Full stack developer</p>
                    <div class="btn-container">
                        <button class="btn btn-color-2" >Download cv </button>
                        <button class="btn btn-color-1"  >contact info </button>
                    </div>
                    <div id="socials-container">
                        <img src="./assets/linkedin.png" alt="my linkedin profile" class="icon" ></img>
                        <img src="./assets/github.png" alt="my githu b profile" class="icon" ></img>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProfileSection