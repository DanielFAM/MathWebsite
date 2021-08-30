function calculateMean(elements){
    sortArray(elements);
    let count=0;
    elements.forEach(element => {
        count += element;
    });

    const average = count / elements.length;
    return average;
}

function calculateMedian (elements){
    sortArray(elements);
    const midList = parseInt(elements.length / 2);
    let median = 0;
    
    if (elements.length % 2 === 0) {
        median = calculateMean([
            elements[midList],
            elements[midList-1]
        ]);

    }else{
        median = elements[midList];
    }
    return median;
}

function calculateMode (elements){
    const list = {};
    elements.map(
        function (element) {
            if (list[element]) {
                list[element] += 1; 
            }else{
                list[element] = 1;
            }
           
        }
    );
    const array = Object.entries(list).sort(
        function (value, newvalue){
            return valor[1] - newvalue[1];
        }
    );
    const mode = array[array.length - 1];
}

function sortArray (elements){
    elements.sort(function(a,b){
        return a-b;
    });
}

