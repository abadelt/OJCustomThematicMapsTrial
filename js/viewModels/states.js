/**
 * states module
 */
define(['text!../model/bundeslaender.geo.json', 'ojs/ojcore', 'knockout', 'ojs/ojthematicmap', 'ojs/ojlegend'
], function (geo, oj, ko) {
    /**
     * The view model for the main content view template
     */
    function statesContentViewModel() {
        var self = this;
        self.title = 'German States';
        self.mapProvider = {
            geo: JSON.parse(geo),
            propertiesKeys: {
                id: 'ID_1',
                longLabel: 'NAME_1'
            }
        };
        var getStateColor = function (mp) {
            if (mp == 'CDU')
                return '#111111';
            else if (mp == 'SPD')
                return '#FF0000';
            else if (mp == 'Left')
                return '#EE0088';
            else if (mp == 'Green')
                return '#00FF00';
        };
        var getStateId = function (state, stateIdMap) {
            for (var id in stateIdMap) {
                if (stateIdMap[id] == state)
                    return id;
            }
        };
        var getStateData = function (dataContext) {
            var areaData = [];
            var features = JSON.parse(geo).features;
            for (var i = 0; i < features.length; i++) {
                var id = features[i]["properties"]["ID_1"];
                var name = features[i]["properties"]["NAME_1"];
                var mp = features[i]["properties"]["MainGoverningParty"];
                areaData.push({
                    id: id,
                    location: getStateId(name, dataContext.ids),
                    color: getStateColor(mp),
                    label: name
                });
            }
            return areaData;
        };
        self.layers = [
        {
                layer: 'states',
                areaDataLayer: {id: 'adl1', areas: getStateData}
        }];
    }
    
    return statesContentViewModel;
});