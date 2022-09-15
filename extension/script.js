
const ENDPOINT_API_VISION = "API URL COGNITIVE SERVICE";

let startExtension = () => {
  createButtonVlib();
  injectScripts();
  getDescriptionImages();

};

/* start Vlib */
let injectScripts = () => {
  const script = document.createElement("script");
  script.charset = "utf-8";
  script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
  document.body.appendChild(script);
  script.onload = () => {
    const domScript = document.createElement("script");
    domScript.src = chrome.extension.getURL("../js/widget.js");
    document.body.appendChild(domScript);

  };
};
let createButtonVlib = () => {

  document.body.innerHTML += `<div vw class="enabled">
    <div vw-access-button class="active"></div>
    <div vw-plugin-wrapper>
    <div class="vw-plugin-top-wrapper"></div>
    </div>
  </div>`;

};

// start call API CognitiveServices

let getAllUrlImagesFromWebSite = () => {
  return [...document.getElementsByTagName("img")];
}

let getDescriptionImages = () => {

  let allImages = getAllUrlImagesFromWebSite();

  for (var image of allImages) 
  {

    fetch(`${ENDPOINT_API_VISION}?urlImage=${image.src}`,
    { 
      method: "GET",
      mode: "cors",
      headers: {
        'Content-Type': 'application/json', 
        'Accept': 'application/json',
        
      }
    })
    .then((response) =>  response.json())
    .then((data) => { 
      document.getElementById("imageExample").alt = data.captions[0].text
      console.log(image.alt);
    })
    .catch((err) => { 
      console.log(err)
    })
  }



}

startExtension();


