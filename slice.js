const getUserNameFromEmail = (email) => {
return email.slice(0, email.indexOf("@"));
};
console.log(getUserNameFromEmail("merry@gmail.com"));