const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];

function repeatCounter(param) {
    const count = {}
    for (let i = 0; i < array.length; i++) {
        
        if(count[array[i]] >= 1) {
            count[array[i]]++;
        } else {
            count[array[i]] = 1;
        }
        
    }

    console.log(count);
  }

repeatCounter(counterWords)