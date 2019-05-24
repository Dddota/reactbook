
function computeSummary(counterValues) {
    let summary = 0;
    for( const key in counterValues){
        if (counterValues.hasOwnProperty(key)){
            summary +=counterValues[key];
        }
    }
}