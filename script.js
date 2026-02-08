mapboxgl.accessToken = 'pk.eyJ1Ijoicm9oYW4yMDAzIiwiYSI6ImNtazRrYTVtMDA4OTEzbW91YTBtOHhxczEifQ.ZVzMbtIQ2tihbIcpSl3fmQ'

const map = new mapboxgl.Map({
    container: 'my-map',
    style: 'mapbox://styles/rohan2003/cmld7caru001a01ql6176cx3o',
    center: [19.073, 72.928],
    zoom: 9.58
});

map.on('load', () => {
    map.addSource('mumbai-lm-data', {
        type: 'vector',
        url: 'mapbox://rohan2003.cpbv0rmp'
    })
});

