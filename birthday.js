var message = document.querySelector("h1");

var birthday = {
  birthdayDate: {
    month: 11, //getMonth starts at 0
    day: 26
  },
  isTodayBirthday: function() {
    var today = new Date();
    var todayMonth = today.getMonth();
    var todayDay = today.getDate();
    if(birthday.birthdayDate.month === todayMonth && birthday.birthdayDate.day === todayDay) {
      return true;
    } else {
      return false;
    }
  }
}

if (birthday.isTodayBirthday()) {
  message.textContent = "YES, Happy Birthday Jeffrey!";
  message.classList.add("birthday");
} else {
  message.textContent = "NO";
}