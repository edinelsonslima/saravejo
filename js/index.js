

function initMap() {
    var coordenadas = {lat: -5.047545025626878, lng: -42.75877203768939};

    map = new google.maps.Map(document.getElementById('mapa'), {
      zoom: 11,
      center: coordenadas 
    });

    // // var marker = new google.maps.Marker({
    // //   position: coordenadas,
    // //   map: mapa,
    // //   title: 'Meu marcador'
    // // });
  }

  initMap()