// Mapbox GL JS code to create a map of Mumbai with landmarks and routes
mapboxgl.accessToken = 'pk.eyJ1Ijoicm9oYW4yMDAzIiwiYSI6ImNtazRrYTVtMDA4OTEzbW91YTBtOHhxczEifQ.ZVzMbtIQ2tihbIcpSl3fmQ'

// Initialize the map with centering and zoom focused on Mumbai
const map = new mapboxgl.Map({
    container: 'my-map',
    // Use mapbox style I created with only the landmark points, landmark labels contained in a field called "Landmark"
    style: 'mapbox://styles/rohan2003/cmld7caru001a01ql6176cx3o',
    center: [72.868, 19.065],
    zoom: 10.59
});

// Load map sources and layers once the map has finished loading
map.on('load', () => {

    // Add a vector source for the Mumbai landmarks from mapbox, which includes both point and label data ('Landmark' field for labels)
    map.addSource('mumbai-lm-data', {
        type: 'vector',
        url: 'mapbox://rohan2003.cpbv0rmp'
    });

    // Add GeoJSON sources for the four routes between the landmarks, with data hosted on GitHub
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

    // Add layers for the landmark points and labels
    map.addLayer({
        'id': 'landmark-labels',
        'type': 'symbol',
        // Same source as the points
        'source': 'mumbai-lm-data',
        'source-layer': 'map-9q9num',
        'layout': {
            // Use the 'Landmark' field from the source for the label text
            'text-field': ['get', 'Landmark'],
            'text-size': 12,
            'text-offset': [-1, -1],
            'text-anchor': 'top'
        },
        'paint': {
            'text-color': '#202',
            'text-halo-color': '#fff',
            'text-halo-width': 1
        }
    });

    // Add a layer for the landmark points
    map.addLayer({
        'id': 'mumbai-lm-pt',
        'type': 'circle',
        'source': 'mumbai-lm-data',
        'paint': {
            'circle-radius': 6,
            'circle-color': '#007cbf'
        }
    });

    // Add layers for the four routes, with different colors and placed below the landmark labels for visibility
    // Colors chosen based on 'Tetradic' color scheme from htmlcolorcodes.com for good contrast and visibility on the map
    map.addLayer({
        'id': 'mumbai-route1-line',
        'type': 'line',
        'source': 'mumbai-route1-data',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-color': '#C94122',
            'line-width': 4
        },

    },
        'landmark-labels'
    );

    map.addLayer({
        'id': 'mumbai-route2-line',
        'type': 'line',
        'source': 'mumbai-route2-data',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-color': '#57C922',
            'line-width': 4
        }
    },
        'landmark-labels'
    );

    map.addLayer({
        'id': 'mumbai-route3-line',
        'type': 'line',
        'source': 'mumbai-route3-data',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-color': '#22AAC9',
            'line-width': 4
        }
    },
        'landmark-labels'
    );

    map.addLayer({
        'id': 'mumbai-route4-line',
        'type': 'line',
        'source': 'mumbai-route4-data',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-color': '#9422C9',
            'line-width': 4
        }
    },
        'landmark-labels'
    );
});

