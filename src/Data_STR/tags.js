// https://www.producthunt.com/topics/user-experience
// https://www.producthunt.com/topics/prototyping
// https://www.producthunt.com/topics/branding
// https://www.producthunt.com/topics/freelance
// https://www.producthunt.com/topics/advertising
// https://www.producthunt.com/topics/sketch         design-tools
// https://www.producthunt.com/topics/design-tools
// https://www.producthunt.com/topics/typography
// https://www.producthunt.com/topics/art
// https://www.producthunt.com/topics/icons
// https://www.producthunt.com/topics/photoshop         design-tools
// https://www.producthunt.com/topics/squarespace         design-tools
// design learning
// Youtube Channels

// resources for explorer
// https://www.topuxlist.xyz/
// https://startupstash.com/
// https://learnux.io/

// for policy
// helloconsent.com/

// Articles website
// https://user-interface.io/
// https://flipboard.com/
// https://www.userinterviews.com/category/research-methods-deliverables

// resourses for redesign this app
// https://pfpmaker.com/
// https://uppbeat.io/
// https://icons8.com/illustrations/style--3d-flame

// suggest categories
// design learning
// https://leetcode.com/
// https://learnux.io/

// related apps
// https://www.uxdatabase.io/

const btn = document.getElementById ('__next');
function scrolling () {
  window.scrollBy (0, 1000);
}

var s = setInterval (scrolling, 200);

btn.onclick = function () {
  clearInterval (s);
};
