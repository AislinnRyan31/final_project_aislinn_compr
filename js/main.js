$(document).ready(function(){
	//homepage world map//
    $('#world-map').vectorMap({
    	map: 'continents_mill',
    	onRegionClick: function(event,code){
            if (code=='NA'){window.location='html/continents/northamerica.html'};
            if (code=='AS'){window.location='html/continents/asia.html'};
            if (code=='EU'){window.location='html/continents/europe.html'};
            if (code=='SA'){window.location='html/continents/southamerica.html'}; 
            },
        onRegionOver: function(e,code){
            if (code== 'AF' ||code=='OC'){
                e.preventDefault();
            }
        },
        onRegionTipShow: function(e,el,code){
            if (code=='AF'||code=='OC'){
                e.preventDefault();
            }
        },
        backgroundColor: '#FFFAFA',
    	series:{
    		regions:[{
    			values:{
    				NA:'#BA0E1D', //BA0E1D
    				AS:'#BA0E1D',
    				EU:'#BA0E1D',
    				SA:'#BA0E1D',
    				AF:'#F7D2D5',
                    OC:'#F7D2D5' //e1cdd2
    			}
    		}]
    	}
    });
});

