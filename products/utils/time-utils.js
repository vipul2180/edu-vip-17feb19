function getFormattedTime(date) {
    var getFormattedTime = date.getHours() + ' : ' + date.getMinutes() + ' : ' + date.getSeconds();
    
    return getFormattedTime;
}

module.exports= {
     getFormattedTime
}