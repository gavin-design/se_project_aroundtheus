export default class UserInfo {
    constructor(titleSelector, descriptionSelector) {
        this.title = document.querySelector(titleSelector);
        this.description = document.querySelector(descriptionSelector);

    }
    getUserInfo() {
        return {title:this.title.textContent, description:this.description.textContent}
    }
    setUserInfo(options) {
        this.title.textContent = options.title
        this.description.textContent = options.description;
    }
}