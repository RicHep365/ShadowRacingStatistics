function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: {
            lat: 54.856178,
            lng: -2.928170
        }
    });

    var locations = [
        ["Aintree, The Racecourse, Ormskirk Road, Aintree, Liverpool, L9 5AS", 53.480930, -2.952790],
        ["Ascot, Ascot, Berkshire, SL5 7JX", 51.410858, -0.675880],
        ["Ayr, Racecourse Office, 2 Whitletts Road, Ayr, Scotland, KA8 0JE", 55.468571, -4.611010],
        ["Bangor, The Racecourse, Bangor on Dee, Wrexham, LL13 0DA", 53.005211, -2.897100],
        ["Bath, Bath Racecourse, Landsdowne, Bath, BA1 9BU", 51.414959, -2.393370],
        ["Beverley, The Grandstand, York Road, Beverley, E Yorkshire, HU17 8QZ", 53.843559, -0.450370],
        ["Brighton, The Racecourse, Freshfield Road, Brighton, BN2 9XZ", 50.826721, -0.119620],
        ["Carlisle, Carlisle Racecourse, Durdar Road, Carlisle, Cumbria, CA2 4TS", 54.856178, -2.928170],
        ["Cartmel, The Racecourse, Cartmel, Nr Grange over Sands, Cumbria, LA11 6QF", 54.201370, -2.955090],
        ["Catterick, The Racecourse, Catterick Bridge, Richmond, N Yorkshire, DL10 7PE", 54.387459, -1.650590],
        ["Chelmsford City, Chelmsford, CM3 1QP", 51.793770, 0.457670],
        ["Cheltenham, Prestbury Park, Cheltenham, Gloucestershire, GL50 4SH", 51.924751, -2.069090],
        ["Chepstow, The Racecourse, Chepstow Racecourse, Chepstow, Monmouthshire, NP16 6BE", 51.646900, -2.690220],
        ["Chester, The Racecourse, Chester, CH1 2LY", 53.189121, -2.897570],
        ["Doncaster, Doncaster Racecourse, Grandstand, Leger Way, Doncaster, DN2 6BB", 53.520401, -1.107270],
        ["Down Royal, Gravelhill Rd, Lisburn, BT27 5RW", 54.492270, -6.117750],
        ["Downpatrick, 24 Ballydugan Rd, Downpatrick, BT30 6TE", 54.321770, -5.721190],
        ["Epsom Downs, The Grandstand, Epsom Downs, Surrey, KT18 5LQ", 51.312120, -0.247260],
        ["Exeter, The Racecourse, Halden, Nr. Exeter, Devon, EX6 7XS", 50.654388, -3.541430],
        ["Fakenham, The Racecourse, Fakenham, Norfolk, NR21 7NY", 52.822320, 0.847640],
        ["Ffos Las, Trimsaran, Carmarthenshire, SA17 4DE", 51.725880, -4.243760],
        ["Fontwell Park, Nr Arundel, West Sussex, BN18 0SX", 50.855659, -0.651550],
        ["Goodwood, Goodwood, Chichester, W.Sussex, PO18 0PS", 50.894360, -0.731130],
        ["Great Yarmouth, The Racecourse, Jellicoe Road, Great Yarmouth, Norfolk, NR30 4AU", 52.627610, 1.733470],
        ["Hamilton Park, Racecourse Office, Bothwell Road, Hamilton, Lanarkshire, ML3 0DW", 55.787048, -4.050950],
        ["Haydock Park, Newton Le Willows, Merseyside, WA12 0HQ", 53.481339, -2.627190],
        ["Hereford, Racecourse House, Roman Road, Hereford, HR4 9QU", 52.075240, -2.722460],
        ["Hexham, The Ridings, Hexham, Northumberland, NE46 4PF", 54.992900, -2.108670],
        ["Huntingdon, Huntingdon Racecourse, Huntingdon, Cambs, PE28 4NL", 52.328709, -0.236880],
        ["Kelso, 18-20 Glendale Road, Wooler, Northumberland, NE71 6DW", 55.547740, -2.016140],
        ["Kempton Park, Kempton Park Racecourse, Sunbury on Thames, TW16 5AQ", 51.414700, -0.404040],
        ["Leicester, The Racecourse, Oadby, Leicester, LE2 4AL", 52.603771, -1.097520],
        ["Lingfield Park, Racecourse Road, Lingfield, Surrey, RH7 6PQ", 51.170681, -0.003320],
        ["Ludlow, Bromfield, Ludlow, Salop, SY8 2BT", 52.403210, -2.760220],
        ["Market Rasen, Legsby Road, Market Rasen, Lincolnshire, LN8 3EA", 53.380320, -0.317160],
        ["Musselburgh, Musselburgh Racecourse, Linkfield Road, Musselburgh, East Lothian, EH21 7RG", 55.945340, -3.046970],
        ["Newbury, The Racecourse, Newbury, Berkshire, RG14 7NZ", 51.396370, -1.309470],
        ["Newcastle, High Gosforth Park, Newcastle Upon Tyne, NE3 5HP", 55.033340, -1.609570],
        ["Newmarket, Westfield House, Cambridge Road, Newmarket, Suffolk, CB8 OTG", 52.283430, 0.488280],
        ["Newton Abbot, The Racecourse, Kingsteignton Road, Newton Abbot, Devon, TQ12 3AF", 50.542510, -3.598940],
        ["Nottingham, Colwick Park, Colwick Road, Nottingham, NG2 4BE", 52.951220, -1.118900],
        ["Perth, Perth Racecourse, Scone Palace Park, Perth, PH2 6BB", 56.423760, -3.427650],
        ["Plumpton, Plumpton, East Sussex, BN7 3AL", 50.923740, -0.064520],
        ["Pontefract, Pontefract Park, Park Road, Pontefract, West Yorkshire, WF8 4QD", 53.707321, -1.331170],
        ["Redcar, The Racecourse, Redcar, Cleveland, TS10 2BY", 54.614250, -1.063670],
        ["Ripon, The Racecourse, Boroughbridge Road, Ripon, North Yorkshire, HG4 1UG", 54.128110, -1.500770],
        ["Salisbury, Salisbury Racecourse, Netherhampton, Wiltshire, SP2 8PN", 51.055190, -1.865850],
        ["Sandown Park, Sandown Park Racecourse, Esher, Surrey, KT10 9AJ", 51.371052, -0.362950],
        ["Sedgefield, The Racecourse, Sedgefield, Stockton on Tees, Cleveland, TS21 2HW", 54.643990, -1.463220],
        ["Southwell, Rolleston, Southwell, Nottinghamshire, NG25 0TS", 53.065922, -0.917160],
        ["Stratford Upon Avon, Luddington Road, Stratford upon Avon, Warwicks, CV37 9SE", 52.176418, -1.741690],
        ["Taunton, Orchard Portman, Taunton, Somerset, TA3 7BL", 50.989861, -3.084950],
        ["Thirsk, The Racecourse, Station Road, Thirsk, N Yorkshire, YO7 1QL", 54.230820, -1.353230],
        ["Towcester, London Road, Towcester, Northamptonshire, NN12 6LB", 52.125729, -0.978880],
        ["Uttoxeter, The Racecourse, Wood Lane, Uttoxeter, Staffordshire, ST14 8BD", 52.893720, -1.85649],
        ["Warwick, Hampton Street, Warwick, Warwickshire, CV34 6HN", , ],
        ["Wetherby, The Racecourse, York Road, Wetherby, West Yorkshire, LS22 5EJ", , ],
        ["Wincanton, Wincanton Racecourse, Wincanton, Somerset, BA9 8BJ", , ],
        ["Windsor, The Racecourse, Windsor, Berkshire, SL4 5JJ", , ],
        ["Wolverhampton, Gorsebrook Road, Wolverhampton, West Midlands, WV6 0PE", , ],
        ["Worcester, The Grandstand, Grandstand Road, Worcester, WR1 3ET", , ],
        ["York, The Racecourse, York, YO23 1EX", , ],
    ]

    var infowindow = new google.maps.InfoWindow();

    var racecourse, i;

    for (i = 0; i < locations.length; i++) {
        racecourse = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
        });

        google.maps.event.addListener(racecourse, 'click', (function(racecourse, i) {
            return function() {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, racecourse);
            }
        })(racecourse, i));
    }

    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}