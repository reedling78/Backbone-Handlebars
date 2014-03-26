define(['async!//maps.google.com/maps/api/js?sensor=false!callback'], function() {
    google.maps.visualRefresh = true;

    var Maps = {};

    Maps.Model = function(){};
    Maps.Model.prototype.Set = function(prop, val){this[prop] = val;};
    Maps.Model.prototype.Get = function(prop){return this[prop];};

    Maps.View = function(){};
    Maps.View.prototype.Set = function(prop, val){this[prop] = val;};
    Maps.View.prototype.Get = function(prop){return this[prop];};

    Maps.View.prototype.Render = function() {

        this.Set('googlemap', new google.maps.Map(this.Get('$el')[0], {
            center: new google.maps.LatLng(this.model.Get('lat'), this.model.Get('long')),
            zoom: 10,
            scrollwheel: false,
            icon: '/public/images/orange-pin.gif',
            mapTypeId: google.maps.MapTypeId.TERRAIN,
            disableDefaultUI: true,
            streetViewControl: true,
            zoomControl: true
        }));

        this.Set('markers', [new google.maps.Marker({
            position: new google.maps.LatLng(this.model.Get('lat'), this.model.Get('long')),
            map: this.Get('googlemap')
        })]);
        
    };

    Maps.Initialize = function($map, long, lat){
        var view = new this.View();

        view.Set('$el', $map);
        view.Set('model', new this.Model());
        view.model.Set('long', long||$map.attr('long'));
        view.model.Set('lat', lat||$map.attr('lat'));
        
        view.Render();
        
        return view;
    };



    return Maps;
});


