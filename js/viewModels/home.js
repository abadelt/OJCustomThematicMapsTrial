/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * home module
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojpictochart'
], function (oj, ko) {
    /**
     * The view model for the main content view template
     */
    function homeContentViewModel() {
        var self = this;
        self.title = "My Home";
        this.pictoChartItems = ko.observableArray([
            {name: 'Have Sleep Problems', shape: 'human', count:7, color: '#ed6647'},
            {name: 'Sleep Well', shape: 'human', count: 3}
        ]);
    }

    return homeContentViewModel;
});
