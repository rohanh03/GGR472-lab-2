mapboxgl.accessToken = 'pk.eyJ1Ijoicm9oYW4yMDAzIiwiYSI6ImNtazRrYTVtMDA4OTEzbW91YTBtOHhxczEifQ.ZVzMbtIQ2tihbIcpSl3fmQ'

const map = new mapboxgl.Map({
    container: 'my-map',
    style: 'mapbox://styles/rohan2003/cmld7caru001a01ql6176cx3o',
    center: [72.868, 19.075],
    zoom: 10
});

map.on('load', () => {

    map.addSource('mumbai-lm-data', {
        type: 'vector',
        url: 'mapbox://rohan2003.cpbv0rmp'
    });

    map.addSource('mumbai-route1-data', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/rohanh03/GGR472-lab-2/refs/heads/main/data/sgnp_to_mcaves.geojson'
    });

    map.addSource('mumbai-route2-data', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/rohanh03/GGR472-lab-2/main/data/mcaves_to_svtemple.geojson'
    });

    map.addSource('mumbai-route3-data', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/rohanh03/GGR472-lab-2/refs/heads/main/data/svtemple_to_wfort.geojson'
    });

    map.addSource('mumbai-route4-data', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/rohanh03/GGR472-lab-2/refs/heads/main/data/wfort_to_goi.geojson'
    });

    map.addLayer({
        'id': 'mumbai-lm-pt',
        'type': 'circle',
        'source': 'mumbai-lm-data',
        'paint': {
            'circle-radius': 6,
            'circle-color': '#007cbf'
        }
    });

    map.addLayer({
        'id': 'mumbai-route1-line',
        'type': 'line',
        'source': 'mumbai-route1-data',
        'layout':{
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-color': '#C94122',
            'line-width': 4
        }
    });

    map.addLayer({
        'id': 'mumbai-route2-line',
        'type': 'line',
        'source': 'mumbai-route2-data',
        'layout':{
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-color': '#57C922',
            'line-width': 4
        }
    });

    map.addLayer({
        'id': 'mumbai-route3-line',
        'type': 'line',
        'source': 'mumbai-route3-data',
        'layout':{
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-color': '#22AAC9',
            'line-width': 4
        }
    });

    map.addLayer({
        'id': 'mumbai-route4-line',
        'type': 'line',
        'source': 'mumbai-route4-data',
        'layout':{
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-color': '#9422C9',
            'line-width': 4
        }
    });
});

