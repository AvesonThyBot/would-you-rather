const WouldYouRather = require("either-wyr");

WouldYouRather({ count: 3 }).then(console.log); // [Question, Question, Question]
WouldYouRather().then(console.log); // [Question]