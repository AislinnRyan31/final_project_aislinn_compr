var markers=[
    {latLng: [-.2167, -78.5167], name: 'Quito', weburl:'../cities/quito.html'},
    {latLng: [-13.525, -71.9722], name: 'Cusco', weburl:'../cities/cusco.html'},
    {latLng: [-13.1547, -72.5254], name: 'Machu Picchu', weburl:'../cities/machu_picchu.html'}
    ];
$(document).ready(function(){
	$('#south-america').vectorMap({
	    map: 'south_america_mill',        
        onRegionOver: function(e,code){
            if (code=='PY'||code=='CO'||code=='VZ'||code=='CL'||code=='SR'||code=='BO'||code=='AR'||code=='GY'||code=='BR'||code=='UY'||code=='FK'||code=='VE'){
                e.preventDefault();
            }
        },
        onRegionTipShow: function(e,el,code){
            if (code=='PY'||code=='CO'||code=='VZ'||code=='CL'||code=='SR'||code=='BO'||code=='AR'||code=='GY'||code=='BR'||code=='UY'||code=='FK'||code=='VE'){
                e.preventDefault();
            }
            $('.jvectormap-tip').css('color','#8B8878').css('font-size','20px')
        },            
        markerStyle: {
            initial: {
                fill: '#E6E441',
                stroke: '#C2BC2D',
                r:7
            },
            hover: {
                fill: '#0EBA36',
                stroke: 'none',
            }
        },
        markers:[
            {latLng: [-.2167, -78.5167], name: 'Quito'},
            {latLng: [-13.525, -71.9722], name: 'Cusco'},
            {latLng: [-13.1547, -72.5254], name: 'Machu Picchu'},
            //{latLng: [-12.0463, -77.0427], name: 'Lima', style: {fill:'#8B8878', stroke: '#8B8878'}} //no photos
        ],
            //lima
        onMarkerTipShow: function(e,el,code){
            $('.jvectormap-tip').css('color','#A10C19').css('font-size','30px')
        },
        onMarkerClick: function(event, index){
            var url= markers[index].weburl;
            window.location=url;
        },
	    backgroundColor:'#FFFAFA',
    	series:{
    		regions:[{
    			values:{
    				PE:'#BA0E1D',
    				EC:'#BA0E1D',
                    PY:'#F7D2D5',
                    CO:'#F7D2D5',
                    VZ:'#F7D2D5',
                    CL:'#F7D2D5',
                    SR:'#F7D2D5',
                    BO:'#F7D2D5',
                    AR:'#F7D2D5',
                    GY:'#F7D2D5',
                    BR:'#F7D2D5',
                    UY:'#F7D2D5',
                    FK:'#F7D2D5',
                    VE:'#F7D2D5'
    			}
    		}]
    	}
	});
});