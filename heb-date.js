/**
 * Created by Talsi on 06/12/2015.
 */
;(function(){

    'use strict';

    var days = [];
    days[days.length] = "יום ראשון";
    days[days.length] = "יום שני";
    days[days.length] = "יום שלישי";
    days[days.length] = "יום רביעי";
    days[days.length] = "יום חמישי";
    days[days.length] = "יום שישי";
    days[days.length] = "יום שבת";

    var months = [];
    months[months.length] = "ינואר";
    months[months.length] = "פברואר";
    months[months.length] = "מרץ";
    months[months.length] = "אפריל";
    months[months.length] = "מאי";
    months[months.length] = "יוני";
    months[months.length] = "יולי";
    months[months.length] = "אוגוסט";
    months[months.length] = "ספטמבר";
    months[months.length] = "אוקטובר";
    months[months.length] = "נובמבר";
    months[months.length] = "דצמבר";

    Date.prototype.toHebrew = function(){

        var dateString = '';

        dateString += days[this.getDay()];
        dateString += ', ';
        dateString += ' ' + this.getDate();
        dateString += ' ב';
        dateString += months[this.getMonth()];
        dateString += ', ' + this.getFullYear();

        return dateString;
    };

    /* יום חמישי, ב לדצמבר, 2015 */

})();
