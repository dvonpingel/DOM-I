const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// SELECTORS
// navbar
const navBar = document.querySelector('header nav');
const navBarRef = navBar.querySelector('a');
const link1nav = navBarRef.nextElementSibling;
const link2nav = link1nav.nextElementSibling;
const link3nav = link2nav.nextElementSibling;
const link4nav = link3nav.nextElementSibling;
const link5nav = link4nav.nextElementSibling;
navBarRef.textContent = siteContent['nav']['nav-item-1'];
link1nav.textContent = siteContent['nav']['nav-item-2'];
link2nav.textContent = siteContent['nav']['nav-item-3'];
link3nav.textContent = siteContent['nav']['nav-item-4'];
link4nav.textContent = siteContent['nav']['nav-item-5'];
link5nav.textContent = siteContent['nav']['nav-item-6'];
navBarRef.style.color = 'green';
link1nav.style.color = 'green';
link2nav.style.color = 'green';
link3nav.style.color = 'green';
link4nav.style.color = 'green';
link5nav.style.color = 'green';
// NEW ITEMS
const blog = document.createElement('a');
blog.textContent = 'Blog';
blog.href = '#';
blog.style.color = "green";
document.querySelector('header nav').appendChild(blog);

const extras = document.createElement('a');
extras.textContent = 'Extras';
extras.href = '#';
extras.style.color = "green";
document.querySelector('header nav').appendChild(extras);


// CTA
const cta = document.querySelector('.cta');
const ctaHeader = cta.querySelector('h1');
const ctaButton = cta.querySelector('button');
const ctaImg = document.getElementById('cta-img');
ctaHeader.textContent = siteContent['cta']['h1'];
ctaButton.textContent = siteContent['cta']['button'];
ctaImg.setAttribute('src', siteContent['cta']['img-src']);


// MAIN CONTENT
const topContent = document.querySelector('.top-content');
const contentImg = document.getElementById('middle-img');
const botContent = document.querySelector('.bottom-content');
// specificity
const top1Text = topContent.querySelector('div');
const topTextHeader = top1Text.querySelector('h4');
const topTextPar = top1Text.querySelector('p');
const top2Text = top1Text.nextElementSibling;
const topText2Header = top2Text.querySelector('h4');
const topText2Par = top2Text.querySelector('p');
topTextHeader.textContent = siteContent['main-content']['features-h4'];
topTextPar.textContent = siteContent['main-content']['features-content'];
topText2Header.textContent = siteContent['main-content']['about-h4'];
topText2Par.textContent = siteContent['main-content']['about-content'];
contentImg.setAttribute('src', siteContent['main-content']['middle-img-src']);
const botText = botContent.querySelector('div');
const serviceHeader = botText.querySelector('h4');
const servicePara = serviceHeader.nextElementSibling;
const bot2Text = botText.nextElementSibling;
const productHeader = bot2Text.querySelector('h4');
const productPara = productHeader.nextElementSibling;
const bot3Text = bot2Text.nextElementSibling;
const visionHeader = bot3Text.querySelector('h4');
const visionPara = visionHeader.nextElementSibling;
serviceHeader.textContent = siteContent['main-content']['services-h4'];
servicePara.textContent = siteContent['main-content']['services-content'];
productHeader.textContent = siteContent['main-content']['product-h4'];
productPara.textContent = siteContent['main-content']['product-content'];
visionHeader.textContent = siteContent['main-content']['vision-h4'];
visionPara.textContent = siteContent['main-content']['vision-content'];


// CONTACT
const contactHeader = document.querySelector(".contact h4");
const contactpara = document.querySelector(".contact p");
const contact2para = contactpara.nextElementSibling;
const contact3para = contact2para.nextElementSibling;
contactHeader.textContent = siteContent['contact']['contact-h4'];
contactpara.textContent = siteContent['contact']['address'];
contact2para.textContent = siteContent['contact']['phone'];
contact3para.textContent = siteContent['contact']['email'];


// FOOTER
const footy = document.querySelector('footer');
footy.textContent = siteContent['footer']['copyright'];