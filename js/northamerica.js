var markers=[
    {latLng: [39.1911, -106.8175], name: 'Aspen',weburl:'../cities/aspen.html'},
    {latLng: [17.9, -62.8333], name: 'Saint Barths', weburl:'../cities/st_barths.html'},
    {latLng: [37.7749, -122.4194], name: 'San Francisco', weburl:'../cities/san_francisco.html'},
    //{latLng: [30.2672, -97.7431], name: 'Austin', weburl:'../cities/austin.html'},
    //{latLng: [43.6532, -79.3832], name: 'Toronto',weburl:'../cities/toronto.html'},
    //{latLng: [29.9511, -90.0715], name: 'New Orleans',weburl:'../cities/new_orleans.html'} 
    ];
$(document).ready(function(){
	$('#north-america').vectorMap({
	    map: 'north_america_mill',
        onRegionOver: function(e,code){
            if (code=='PR'||code=='DO'||code=='DM'||code=='LC'||code=='NI'||code=='PA'||code=='SV'||code=='HT'||code=='TT'||code=='JM'||code=='GT'||code=='HN'||code=='BL'||code=='CR'||code=='GL'||code=='MX'||code=='CU'||code=='BZ'){
                e.preventDefault();
            }
        },
        onRegionTipShow: function(e,el,code){
            if (code=='PR'||code=='DO'||code=='DM'||code=='LC'||code=='NI'||code=='PA'||code=='SV'||code=='HT'||code=='TT'||code=='JM'||code=='GT'||code=='HN'||code=='BL'||code=='CR'||code=='GL'||code=='MX'||code=='CU'||code=='BZ'){
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
            {latLng: [39.1911, -106.8175], name: 'Aspen'},
            {latLng: [17.9, -62.8333], name: 'St. Barths'},
            {latLng: [37.7749, -122.4194], name: 'San Francisco'},
            {latLng: [30.2672, -97.7431], name: 'Austin'},
            {latLng: [43.6532, -79.3832], name: 'Toronto'},
            {latLng: [29.9511, -90.0715], name: 'New Orleans'}            
            ],
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
    				US:'#BA0E1D',
    				CA:'#BA0E1D',
                    BS:'#BA0E1D', //#E1292A
                    PR:'#F7D2D5',   
    				DO:'#F7D2D5',
    				DM:'#F7D2D5',
    				LC:'#F7D2D5',
    				NI:'#F7D2D5',
    				PA:'#F7D2D5',    					
    				SV:'#F7D2D5',
    				HT:'#F7D2D5',
    				TT:'#F7D2D5',
    				JM:'#F7D2D5',
    				GT:'#F7D2D5', 
    				HN:'#F7D2D5',
    				BL:'#F7D2D5',    					
    				CR:'#F7D2D5',
    				GL:'#F7D2D5',
    				MX:'#F7D2D5',
    				CU:'#F7D2D5',
                    BZ:'#F7D2D5'
    			}
    		}]
    	}
	});
});

