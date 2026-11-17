async function initMap() {
  await ymaps3.ready;

  const { YMap, YMapDefaultSchemeLayer } = ymaps3;

  const map = new YMap(
    document.getElementById("map"),
    {
      location: {
        center: [37.439600, 55.849500],
        zoom: 13
      }
    }
  );
  map.addChild(new YMapDefaultSchemeLayer({}));
}

initMap();