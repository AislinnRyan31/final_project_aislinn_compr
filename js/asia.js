var markers=[
    {latLng: [35.6895, 139.6917], name: 'Tokyo', weburl:'../cities/tokyo.html'},
    {latLng: [1.3521, 103.8198], name: 'Singapore',weburl:'../cities/singapore.html'},
    //{latLng: [13.7563, 100.5018], name: 'Bangkok', weburl:'../cities/bangkok.html'},
    //{latLng: [14.3692, 100.5877], name: 'Ayutthaya, weburl:'../cities/ayutthaya.html''},
    //{latLng: [9.5120, 100.0136], name: 'Ko Samui', weburl:'../cities/ko_samui.html'},
    //{latLng: [9.7319, 100.0136], name: 'Ko Pha Ngan', weburl:'../cities/ko_pha_ngan.html'},
    //{latLng: [7.9519, 98.3381], name: 'Phuket', weburl:'../cities/phuket.html'},
    //{latLng: [7.7407, 98.7784], name: 'Ko Phi Phi', weburl:'../cities/ko_phi_phi.html'}
    ];
$(document).ready(function(){
    $('#asia').vectorMap({
    	map: 'asia_mill',
        onRegionOver: function(e,code){
            if (code=='BD'||code=='MN'||code=='BN'||code=='BH'||code=='BT'||code=='HK'||code=='JO'||code=='PS'||code=='LB'||code=='LA'||code=='TW'||code=='TR'||code=='LK'||code=='TL'||code=='TM'||code=='TJ'||code=='XC'||code=='NP'||code=='PK'||code=='PH'||code=='AE'||code=='CN'||code=='AF'||code=='IQ'||code=='IR'||code=='AM'||code=='SY'||code=='VN'||code=='GE'||code=='IL'||code=='IN'||code=='AZ'||code=='ID'||code=='OM'||code=='KG'||code=='UZ'||code=='MM'||code=='KH'||code=='CY'||code=='QA'||code=='KR'||code=='KP'||code=='KW'||code=='KZ'||code=='SA'||code=='MY'||code=='YE'){
                e.preventDefault();
            }
        },
        onRegionTipShow: function(e,el,code){
            if (code=='BD'||code=='MN'||code=='BN'||code=='BH'||code=='BT'||code=='HK'||code=='JO'||code=='PS'||code=='LB'||code=='LA'||code=='TW'||code=='TR'||code=='LK'||code=='TL'||code=='TM'||code=='TJ'||code=='XC'||code=='NP'||code=='PK'||code=='PH'||code=='AE'||code=='CN'||code=='AF'||code=='IQ'||code=='IR'||code=='AM'||code=='SY'||code=='VN'||code=='GE'||code=='IL'||code=='IN'||code=='AZ'||code=='ID'||code=='OM'||code=='KG'||code=='UZ'||code=='MM'||code=='KH'||code=='CY'||code=='QA'||code=='KR'||code=='KP'||code=='KW'||code=='KZ'||code=='SA'||code=='MY'||code=='YE'){
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
            {latLng: [35.6895, 139.6917], name: 'Tokyo'},
            {latLng: [1.3521, 103.8198], name: 'Singapore'},
            {latLng: [13.7563, 100.5018], name: 'Bangkok'},
            {latLng: [14.3692, 100.5877], name: 'Ayutthaya'},
            {latLng: [9.5120, 100.0136], name: 'Ko Samui'},
            {latLng: [9.7319, 100.0136], name: 'Ko Pha Ngan'},
            {latLng: [7.9519, 98.3381], name: 'Phuket'},
            {latLng: [7.7407, 98.7784], name: 'Ko Phi Phi'},
                ],
        onMarkerTipShow: function(e,el,code){
            $('.jvectormap-tip').css('color','#A10C19').css('font-size','30px')
        },
        onMarkerClick: function(event, index){
            var url= markers[index].weburl;
            window.location=url;
        },        
        backgroundColor: '#FFFAFA',
    	series:{
    		regions:[{
    			values:{
    				TH:'#BA0E1D',
    				JP:'#BA0E1D',
                    SG:'#BA0E1D',
                    BD:'#F7D2D5',
                    MN:'#F7D2D5',
                    BN:'#F7D2D5',
                    BH:'#F7D2D5',
                    BT:'#F7D2D5',
                    HK:'#F7D2D5',
                    JO:'#F7D2D5',
                    PS:'#F7D2D5',
                    LB:'#F7D2D5',
                    LA:'#F7D2D5',
                    TW:'#F7D2D5',
                    TR:'#F7D2D5',
                    LK:'#F7D2D5',
                    TL:'#F7D2D5',
                    TM:'#F7D2D5',
                    TJ:'#F7D2D5',
                    XC:'#F7D2D5',
                    NP:'#F7D2D5',
                    PK:'#F7D2D5',
                    PH:'#F7D2D5',
                    AE:'#F7D2D5',
                    CN:'#F7D2D5',
                    AF:'#F7D2D5',
                    IQ:'#F7D2D5',
                    IR:'#F7D2D5',
                    AM:'#F7D2D5',
                    SY:'#F7D2D5',
                    VN:'#F7D2D5',
                    GE:'#F7D2D5',
                    IL:'#F7D2D5',
                    IN:'#F7D2D5',
                    AZ:'#F7D2D5',
                    ID:'#F7D2D5',
                    OM:'#F7D2D5',
                    KG:'#F7D2D5',
                    UZ:'#F7D2D5',
                    MM:'#F7D2D5',
                    KH:'#F7D2D5',
                    CY:'#F7D2D5',
                    QA:'#F7D2D5',
                    KR:'#F7D2D5',
                    KP:'#F7D2D5',
                    KW:'#F7D2D5',
                    KZ:'#F7D2D5',
                    SA:'#F7D2D5',
                    MY:'#F7D2D5',
                    YE:'#F7D2D5',
    			}
    		}]
    	}
    });
});