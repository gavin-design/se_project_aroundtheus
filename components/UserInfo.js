//The UserInfo class is responsible for rendering information about the user on the page. This class should:

// Take an object with the selectors of two elements into the constructor: one for the profile’s name element and one for its job element.
// Have a public method named getUserInfo(), which returns an object containing information about the user.
// This method will be handy for cases when it's necessary to display the user data in the open form.
// Have a public method named setUserInfo(), which takes new user data and adds it to the page. 
//This method should be used after successful submission of the profile form.
// Create an instance of the UserInfo class in index.js and use its methods as described.

export default class UserInfo {
    constructor(titleSelector, descriptionSelector){
        this.title = document.querySelector(titleSelector);
        this.description = document.querySelector(descriptionSelector);
        
        //const profileTitle = document.querySelector(".profile__title");
        //const profileDescription = document.querySelector(".profile__description");
    }
   getUserInfo () {
    return [this.title.textContent, this.description.textContent]
    // const profileTitle = document.querySelector(".profile__title");
    // const profileDescription = document.querySelector(".profile__description");
   }
   setUserInfo(title, decription) {
    this.title.textContent = title;
    this.description.textContent = decription;
 // profileTitle.textContent = title.value;
  // profileDescription.textContent = description.value;
   }
}
