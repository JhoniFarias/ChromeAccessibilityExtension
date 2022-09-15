
var countClicks = 0;

(function () {

    createButtonColorBlind();
    createSvgFilters();

   
    setTimeout(function(){
    
      document.getElementById("btnColorBlind").addEventListener("click", function(){
        filtro_dalton(countClicks++)
      });
    }, 2000);

}());





function createSvgFilters(){
    document.body.innerHTML += `    <svg>
    <defs>
      <filter id="protanopia">
        <feColorMatrix
        type="matrix"
        values="1.3  0    0  0  0
                0    0.9  0  0  0
                0    0    0  0  0
                0    0    0  1  0"
        />
        <feColorMatrix
        type="saturate"
        values="2"
        />
      </filter>
      <filter id="deuteranopia">
        <feColorMatrix
        type="matrix"
        values="0.9  0    0    0  0
                0    0.9  0    0  0
                0    0    1.3  0  0
                0    0    0    1  0"
        />
        <feColorMatrix
        type="saturate"
        values="2"
        />
      </filter>
      <filter id="tritanopia">
        <feColorMatrix
        type="matrix"
        values="1.3  0    0    0  0
                0    0.9  0    0  0
                0    0    1.3  0  0
                0    0    0    1  0"
        />
        <feColorMatrix
        type="saturate"
        values="2"
        />
      </filter>
      <feColorMatrix
      type="saturate"
      values="2"
      />
      <filter id="acromatopsia">
        <feColorMatrix
        type="matrix"
        values="0.3  0.3  0.3  0 0
                    0.3  0.3  0.3  0 0
                    0.3  0.3  0.3  0 0
                    0    0    0    1 0"
        />
        <feColorMatrix
        type="saturate"
        values="2"
        />
      </filter>
      <filter id="normal">
        <feColorMatrix
        type="matrix"
        values="1  0  0  0  0
                0  1  0  0  0
                0  0  1  0  0
                0  0  0  1  0"
        />
      </filter>
    </defs>
  </svg>`;
}

function createButtonColorBlind(){
    document.body.innerHTML += `<button id="btnColorBlind"><img src="data:image/png;base64,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" alt=""></button>`
   
  }


function filtro_dalton(disfuncion) {

    var imagenes = document.getElementsByTagName('img');

    switch(disfuncion) {
      case 1:
        var filtro = '-webkit-filter: url(#protanopia); filter: url(#protanopia);';
        break;
      case 2: 
        var filtro = '-webkit-filter: url(#deuteranopia); filter: url(#deuteranopia);';
        break;
      case 3:
        var filtro = '-webkit-filter: url(#tritanopia); filter: url(#tritanopia);';
        break;
      case 4:
        var filtro = '-webkit-filter: url(#acromatopsia); filter: url(#acromatopsia);';
        break;
      default :
        var filtro = '-webkit-filter: url(#normal); filter: url(#normal);';
        break;
    }
    for(var i = 0; i < imagenes.length; i += 1) {
      imagenes[i].style.cssText = filtro;
    }

    countClicks = countClicks > 4 ? 0 : countClicks;
}
  