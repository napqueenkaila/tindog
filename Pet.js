class Pet {
    constructor(data) {
        Object.assign(this, data)
    }

    setMatchStatus(bool) {
        this.hasBeenLiked = bool
        this.hasBeenSwiped = true
    }

    getPetHtml() {
        const { name, avatar, age, bio } = this
        return `
            <div class="outer-wrapper">
                <div class="pet-profile-wrapper">
                    <div class="pet-info">
                        <h4 class="name-age"> ${name}, ${age} </h4>
                        <p class="bio">${bio}</p>
                    </div>
                    <div class="img-wrapper">
                        <img class="pet-img" src="${avatar}">
                    </div>
                </div>
                <image id="like-badge" src="images/badge-like.png">
                <image id="dislike-badge" src="images/badge-nope.png">
            </div>
            `
    }
}

export default Pet