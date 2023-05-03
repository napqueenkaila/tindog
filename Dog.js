class Dog {
    constructor(data) {
        Object.assign(this, data)
    }

    setMatchStatus(bool) {
        this.hasBeenLiked = bool
        this.hasBeenSwiped = true
    }

    getDogHtml() {
        const { name, avatar, age, bio } = this
        return `
            <div class="outer-wrapper">
                <div class="dog-profile-wrapper">
                    <div class="dog-info">
                        <h4 class="name-age"> ${name}, ${age} </h4>
                        <p class="bio">${bio}</p>
                    </div>
                    <img class="dog-img" src="${avatar}">
                </div>
                <image id="like-badge" src="images/badge-like.png">
                <image id="dislike-badge" src="images/badge-nope.png">
            </div>
            `
    }
}

export default Dog