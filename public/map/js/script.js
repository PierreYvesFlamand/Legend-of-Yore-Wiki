const [isle, x, y] = window.location.hash.substring(1).split('&');
let pointer;
if (x && y) {
    pointer = {
        map: isle ? isle.substring(2) : null,
        x: x ? Number(x.substring(2)) : null,
        y: y ? Number(y.substring(2)) : null,
    };
} else {
    pointer = {
        map: null,
        x: null,
        y: null,
    };
}

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        document.querySelector('.menuButton').addEventListener('click', () => {
            document.querySelector('.menu').classList.toggle('hideMenu');
        });
        buildPage(allMapData[firstSelectedMap()].data);
    }
};

// Divice Check
let isMobile = 'false';
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent)) {
    isMobile = 'true';
}

// Regroup all map Data
const allMapData = [{ data: Aria_Island }, { data: Cennyn_Island }, { data: Ynys_Island }, { data: Tal_Nivek_Island }];

function buildPage(mapToLoad) {
    window.location.hash = mapToLoad.name.split(' ').join('_');
    buildMenu(mapToLoad.name);
    buildMap(mapToLoad);
}

// Detect if there is an #Hash location
function firstSelectedMap() {
    let i = 0;
    let val;
    if (pointer.map) {
        val = '#' + pointer.map;
    } else {
        val = location.hash;
    }

    if (val === '#Aria_Island') {
        i = 0;
    } else if (val === '#Cennyn_Island') {
        i = 1;
    } else if (val === '#Ynys_Island') {
        i = 2;
    } else if (val === '#Tal_Nivek_Island') {
        i = 3;
    }
    return i;
}

// Build the user buttons menu
function buildMenu(name) {
    // Reset all buttons

    document.querySelectorAll('.menu div').forEach((item) => {
        item.style.display = 'block';
    });

    // Remove useless buttons
    if (name === 'Aria Island') {
        document.querySelector('#Aria_Island').style.display = 'none';
    } else if (name === 'Cennyn Island') {
        document.querySelector('#Cennyn_Island').style.display = 'none';
    } else if (name === 'Ynys Island') {
        document.querySelector('#Ynys_Island').style.display = 'none';
    } else if (name === 'Tal Nivek Island') {
        document.querySelector('#Tal_Nivek_Island').style.display = 'none';
    }
}

// Build the Leaflet Map
function buildMap(mapToLoad) {
    map = L.map('map', {
        zoomControl: false,
    }).setView(pointer.x && pointer.y ? [pointer.x, pointer.y] : [0, 0], pointer.x && pointer.y ? 3 : 2);
    // Relerence the Tiles
    L.tileLayer('./data/tiles/' + mapToLoad.name.split(' ').join('_') + '/{z}/{x}/{y}.png', {
        minZoom: 0,
        maxZoom: 3,
        noWrap: true,
        bounds: L.latLngBounds(L.latLng(-90, -180) /*SW*/, L.latLng(90, 180) /*NE*/),
    }).addTo(map);
    L.control
        .zoom({
            position: 'bottomright',
        })
        .addTo(map);

    // Remove Default Leaflet Attribution + Adding a custom one
    $('.leaflet-control-attribution').hide();
    $('.attribution').html('Powered by <a target="_blank" rel="noopener noreferrer" href="https://leafletjs.com/">Leaflet</a>');

    // Markers Creation
    var buttonData = [
        (Monsters = {
            id: 'monstersButton',
            content: 'Monsters',
            layerGroup: L.layerGroup(),
        }),
        (Dungeons = {
            id: 'dungeonsButton',
            content: 'Dungeons',
            layerGroup: L.layerGroup(),
        }),
        (Portals = {
            id: 'portalsButton',
            content: 'Fast travel',
            layerGroup: L.layerGroup(),
        }),
    ];

    mapToLoad.popup.forEach((mapData) => {
        for (var i = 0; i < mapData.NumberOfCoord; i++)
            L.marker(mapData.coord[i], { icon: L.icon({ iconUrl: mapData.icon, iconSize: [30, 30], iconAnchor: [15, 18], popupAnchor: [-3, -15] }) })
                .on(isMobile == 'false' ? 'mouseover' : '', function (e) {
                    this.openPopup();
                })
                .on(isMobile == 'false' ? 'mouseout' : '', function (e) {
                    this.closePopup();
                })
                .on(isMobile == 'false' ? 'click' : '', function () {
                    isMobile == 'false' ? window.open(mapData.popupLink[1], mapData.popupLink[0]) : '';
                })
                .bindPopup(
                    '<center><font color="#48edff">' +
                        mapData.popupTitle +
                        '</font></center>' +
                        mapData.popupBody +
                        '<center><b><i><font color="#929398">' +
                        (isMobile == 'false'
                            ? ''
                            : '<a target="' + mapData.popupLink[0] + '" rel="noopener noreferrer" href=' + mapData.popupLink[1] + '>') +
                        mapData.popupLinkText +
                        '</a></font></i></b></center>'
                )
                .addTo(
                    mapData.layerGroup === 'monsters'
                        ? buttonData[0].layerGroup
                        : mapData.layerGroup === 'dungeons'
                        ? buttonData[1].layerGroup
                        : buttonData[2].layerGroup
                );
    });

    // Enable Monsters/Dungeons Markers by default
    if (!(pointer.x && pointer.y)) {
        buttonData[0].layerGroup.addTo(map);
        buttonData[1].layerGroup.addTo(map);
        buttonData[2].layerGroup.addTo(map);
    }

    // Menu
    const okBox = '<img class="menuImg" src="./data/asset/Main/okBox.png">';
    const emptyBox = '<img class="menuImg" src="./data/asset/Main/emptyBox.png">';

    document.querySelector('.zoneName').textContent = mapToLoad.name;
    document.querySelector('.zones').textContent = 'Maps';

    for (let i = 0; i < buttonData.length; i++) {
        document.querySelector(`#${buttonData[i].id}`).innerHTML = (pointer.x && pointer.y ? emptyBox : okBox) + buttonData[i].content;
    }

    let i = 0;
    document.getElementById(buttonData[i++].id).onclick = function () {
        toggleButton(buttonData[0]);
    };
    document.getElementById(buttonData[i++].id).onclick = function () {
        toggleButton(buttonData[1]);
    };
    document.getElementById(buttonData[i++].id).onclick = function () {
        toggleButton(buttonData[2]);
    };

    function toggleButton(buttonData) {
        if (document.querySelector(`#${buttonData.id}`).innerHTML === okBox + buttonData.content) {
            map.removeLayer(buttonData.layerGroup);
        } else {
            buttonData.layerGroup.addTo(map);
        }
        document.querySelector(`#${buttonData.id}`).innerHTML =
            (document.querySelector(`#${buttonData.id}`).innerHTML === okBox + buttonData.content ? emptyBox : okBox) + buttonData.content;
    }

    document.querySelector('#Aria_Island').innerHTML = '<img class="menuImg" src="./data/asset/Main/iconDungeon.png"/>' + 'Aria Island';
    document.querySelector('#Aria_Island').addEventListener('click', () => {
        switchMap(0);
    });

    document.querySelector('#Cennyn_Island').innerHTML = '<img class="menuImg" src="./data/asset/Main/iconDungeon.png"/>' + 'Cennyn Island';
    document.querySelector('#Cennyn_Island').addEventListener('click', () => {
        switchMap(1);
    });

    document.querySelector('#Ynys_Island').innerHTML = '<img class="menuImg" src="./data/asset/Main/iconDungeon.png"/>' + 'Ynys Island';
    document.querySelector('#Ynys_Island').addEventListener('click', () => {
        switchMap(2);
    });

    document.querySelector('#Tal_Nivek_Island').innerHTML = '<img class="menuImg" src="./data/asset/Main/iconDungeon.png"/>' + 'Tal Nivek Island';
    document.querySelector('#Tal_Nivek_Island').addEventListener('click', () => {
        switchMap(3);
    });

    function switchMap(i) {
        pointer = {
            map: null,
            x: null,
            y: null,
        };
        map.remove();
        buildPage(allMapData[i].data);
    }

    if (pointer.x && pointer.y) {
        const HERE = L.marker([pointer.x, pointer.y], {}).addTo(map);
    }

    let devTool = L.marker([0, 0], {
        draggable: true,
    }).addTo(map);
    devTool.bindPopup(
        '<span style="color: #48edff; font-family: none; font-size: 16px; user-select: initial;"><center>Move me to know a position<br>Dev Tool</center></span>'
    );
    devTool.on('dragend', function (e) {
        devTool
            .getPopup()
            .setContent(
                '<span style="font-family: none; font-size: 16px;"><center>Clicked ' +
                    devTool.getLatLng().toString() +
                    '<br>' +
                    'Pixels ' +
                    map.project(devTool.getLatLng(), map.getMaxZoom().toString()) +
                    '<br><br>' +
                    '<font color="#48edff">Move me to know a position<br>Dev Tool</font></center></span>'
            )
            .openOn(map);
    });
}
