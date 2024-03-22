export default class UserInfo {
    constructor(titleSelector, descriptionSelector) {
        this.title = document.querySelector(titleSelector);
        this.description = document.querySelector(descriptionSelector);

    }
    getUserInfo() {
        return [this.title.textContent, this.description.textContent]
    }
    setUserInfo(title, decription) {
        this.title.textContent = title;
        this.description.textContent = decription;
    }
}