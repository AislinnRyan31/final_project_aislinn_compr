var markers=[
    {latLng: [48.8566, 2.3522], name: 'Paris',weburl:'../cities/paris.html'},
    {latLng: [43.7102, 7.2620], name: 'Nice', weburl:'../cities/nice.html'},
    {latLng: [43.2677, 6.6407], name: 'St. Tropez', weburl:'../cities/st_tropez.html'},
    {latLng: [43.5804, 7.1251], name: 'French Riviera', weburl:'../cities/french_riviera.html'},
    {latLng: [43.2965, 5.3698], name: 'Marseille',weburl:'../cities/marseille.html'},
    {latLng: [43.5297, 5.4474], name: 'Aix-en-Provence',weburl:'../cities/aix_en_provence.html'},
    {latLng: [43.9493, 4.8055], name: 'Avignon',weburl:'../cities/avignon.html'},
    {latLng: [44.1488, 9.6544], name: 'Cinque Terre',weburl:'../cities/cinque_terre.html'},    
    {latLng: [45.4654, 9.1859], name: 'Milan',weburl:'../cities/milan.html'},        
    {latLng: [47.4979, 19.0402], name: 'Budapest', weburl:'../cities/budapest.html'},
    {latLng: [52.5200, 13.4050], name: 'Berlin', weburl:'../cities/berlin.html'},
    {latLng: [52.3702, 4.8952], name: 'Amsterdam', weburl:'../cities/amsterdam.html'},
    {latLng: [59.3293, 18.0686], name: 'Stockholm', weburl:'../cities/stockholm.html'},
    {latLng: [51.5074, -.128], name: 'London',weburl:'../cities/london.html'},
    {latLng: [55.8642, -4.2518], name: 'Glasgow', weburl:'../cities/glasgow.html'},
    {latLng: [53.3498, -6.2675], name: 'Dublin', weburl:'../cities/dublin.html'},
    {latLng: [38.7223, -9.1356], name: 'Lisbon', weburl:'../cities/lisbon.html'},
    {latLng: [38.8029, -9.3817], name: 'Sintra', weburl:'../cities/sintra.html'},
    {latLng: [39.4699, -.3768], name: 'Valencia', weburl:'../cities/valencia.html'},
    {latLng: [47.3769, 8.5417], name: 'Zurich', weburl:'../cities/zurich.html'},
    {latLng: [47.0502, 8.3093], name: 'Lucerne', weburl:'../cities/lucerne.html'},
    {latLng: [45.4408, 12.3155], name: 'Venice', weburl:'../cities/venice.html'},
    {latLng: [43.5081, 16.4402], name: 'Split', weburl:'../cities/split.html'},
    {latLng: [43.1729, 16.4411], name: 'Hvar', weburl:'../cities/hvar.html'},
    {latLng: [46.016, 9.2572], name: 'Lake Como', weburl:'../cities/lake_como.html'},
    {latLng: [50.0878, 14.4205], name: 'Prague', weburl:'../cities/prague.html'},
    {latLng: [37.9838, 23.7275], name: 'Athens', weburl:'../cities/athens.html'},
    {latLng: [37.1036, 25.3777], name: 'Naxos', weburl:'../cities/naxos.html'},
    {latLng: [37.4467, 25.3289], name: 'Mykonos', weburl:'../cities/mykonos.html'},
    {latLng: [39.6953, 3.0176], name: 'Mallorca', weburl:'../cities/mallorca.html'},
    {latLng: [40.6088, 14.3413], name: 'Massa Lubrense', weburl:'../cities/massa_lubrense.html'},
    {latLng: [40.5532, 14.2222], name: 'Capri', weburl:'../cities/capri.html'},
    {latLng: [40.6281, 14.4850], name: 'Positano', weburl:'../cities/positano.html'},
    {latLng: [55.1835, -7.9694], name: 'Dunfanaghy', weburl:'../cities/dunfanaghy.html'},
    {latLng: [54.9966, -7.3086], name: 'Derry', weburl:'../cities/derry.html'},         
    //{latLng: [46.2044, 6.1432], name: 'Geneva', weburl:'../cities/geneva.html'},
    //{latLng: [53.2738, -9.0518], name: 'Galway', weburl:'../cities/galway.html'},
    //{latLng: [53.1289, -9.7316], name: 'Inishmore', weburl:'../cities/inishmore.html'},
    //{latLng: [53.0573, -9.7316], name: 'Inisheer', weburl:'../cities/inisheer.html'}                   
    ];
$(document).ready(function(){
	$('#europe').vectorMap({
	    map: 'europe_mill',
        onRegionOver: function(e,code){
            if (code=='BG'||code=='DK'||code=='BA'||code=='JE'||code=='FI'||code=='BY'||code=='RU'||code=='NO'||code=='LI'||code=='LV'||code=='LT'||code=='LU'||code=='FO'||code=='PL'||code=='XK'||code=='VE'||code=='AD'||code=='IS'||code=='AL'||code=='GG'||code=='IM'||code=='AX'||code=='ME'||code=='MD'||code=='RO'||code=='RS'||code=='MK'||code=='SK'||code=='MT'||code=='SI'||code=='SM'||code=='UA'){
                e.preventDefault();
            }
        },
        onRegionTipShow: function(e,el,code){
            if (code=='BG'||code=='DK'||code=='BA'||code=='JE'||code=='FI'||code=='BY'||code=='RU'||code=='NO'||code=='LI'||code=='LV'||code=='LT'||code=='LU'||code=='FO'||code=='PL'||code=='XK'||code=='VE'||code=='AD'||code=='IS'||code=='AL'||code=='GG'||code=='IM'||code=='AX'||code=='ME'||code=='MD'||code=='RO'||code=='RS'||code=='MK'||code=='SK'||code=='MT'||code=='SI'||code=='SM'||code=='UA'){
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
            {latLng: [48.8566, 2.3522], name: 'Paris'},
            {latLng: [43.7102, 7.2620], name: 'Nice'},
            {latLng: [43.2677, 6.6407], name: 'St. Tropez'},
            {latLng: [43.5804, 7.1251], name: 'French Riviera'},
            {latLng: [43.2965, 5.3698], name: 'Marseille'},
            {latLng: [43.5297, 5.4474], name: 'Aix-en-Provence'},
            {latLng: [43.9493, 4.8055], name: 'Avignon'},
            {latLng: [44.1488, 9.6544], name: 'Cinque Terre'},            
            {latLng: [45.4654, 9.1859], name: 'Milan'},                     
            {latLng: [47.4979, 19.0402], name: 'Budapest'},
            {latLng: [52.5200, 13.4050], name: 'Berlin'},
            {latLng: [52.3702, 4.8952], name: 'Amsterdam'},
            {latLng: [59.3293, 18.0686], name: 'Stockholm'},
            {latLng: [51.5074, -.128], name: 'London'},
            {latLng: [55.8642, -4.2518], name: 'Glasgow'},
            {latLng: [53.3498, -6.2675], name: 'Dublin'},
            {latLng: [38.7223, -9.1356], name: 'Lisbon'},
            {latLng: [38.8029, -9.3817], name: 'Sintra'},
            {latLng: [39.4699, -.3768], name: 'Valencia'},
            {latLng: [47.3769, 8.5417], name: 'Zurich'},
            {latLng: [47.0502, 8.3093], name: 'Lucerne'},
            {latLng: [45.4408, 12.3155], name: 'Venice'},
            {latLng: [43.5081, 16.4402], name: 'Split'},
            {latLng: [43.1729, 16.4411], name: 'Hvar'},
            {latLng: [46.016, 9.2572], name: 'Lake Como'},
            {latLng: [50.0878, 14.4205], name: 'Prague'},
            {latLng: [37.9838, 23.7275], name: 'Athens'},
            {latLng: [37.1036, 25.3777], name: 'Naxos'},
            {latLng: [37.4467, 25.3289], name: 'Mykonos'},
            {latLng: [39.6953, 3.0176], name: 'Mallorca'},
            {latLng: [40.6088, 14.3413], name: 'Massa Lubrense'},
            {latLng: [40.5532, 14.2222], name: 'Capri'},
            {latLng: [40.6281, 14.4850], name: 'Positano'},
            {latLng: [55.1835, -7.9694], name: 'Dunfanaghy'},
            {latLng: [54.9966, -7.3086], name: 'Derry'},         
            {latLng: [46.2044, 6.1432], name: 'Geneva'},
            {latLng: [53.2738, -9.0518], name: 'Galway'},
            {latLng: [53.1289, -9.7316], name: 'Inishmore'},
            {latLng: [53.0573, -9.7316], name: 'Inisheer'},               
            ],

            //ibiza
            //brussels
            //barcelona
            //munich
            //salzburg
            //kitzbuhel
            //innsbruck
            //vienna
            //brussels
            //rome
            //florence
            
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
    				BE:'#BA0E1D',
                    FR:'#BA0E1D',
                    HR:'#BA0E1D',
                    DE:'#BA0E1D',
                    HU:'#BA0E1D',
                    GR:'#BA0E1D',
                    NL:'#BA0E1D',
                    PT:'#BA0E1D',
                    CH:'#BA0E1D',
                    IT:'#BA0E1D',
                    CZ:'#BA0E1D',
                    GB:'#BA0E1D',
                    IE:'#BA0E1D',
                    ES:'#BA0E1D',
                    SE:'#BA0E1D',
                    AT:'#BA0E1D',
                    BG:'#F7D2D5',
                    DK:'#F7D2D5',
                    BA:'#F7D2D5',
                    JE:'#F7D2D5',
                    FI:'#F7D2D5',
                    BY:'#F7D2D5',
                    RU:'#F7D2D5',
                    NO:'#F7D2D5',
                    LI:'#F7D2D5',
                    LV:'#F7D2D5',
                    LT:'#F7D2D5',
                    LU:'#F7D2D5',
                    FO:'#F7D2D5',
                    PL:'#F7D2D5',
                    XK:'#F7D2D5',
                    AD:'#F7D2D5',
                    IS:'#F7D2D5',
                    AL:'#F7D2D5',
                    GG:'#F7D2D5',
                    IM:'#F7D2D5',
                    AX:'#F7D2D5',
                    ME:'#F7D2D5',
                    MD:'#F7D2D5',
                    RO:'#F7D2D5',
                    RS:'#F7D2D5',
                    MK:'#F7D2D5',
                    SK:'#F7D2D5',
                    MT:'#F7D2D5',
                    SI:'#F7D2D5',
                    SM:'#F7D2D5',
                    UA:'#F7D2D5',
    			}
    		}]
    	}
	});
});

