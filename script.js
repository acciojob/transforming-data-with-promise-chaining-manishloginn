document.getElementById('btn').addEventListener('click', function() {
    const inputNumber = document.getElementById('ip').value;
    
    // First Promise
    const firstPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(inputNumber);
        }, 2000);
    });

    // Second Promise
    const secondPromise = firstPromise.then(number => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(number * 2);
            }, 1000);
        });
    });

    // Third Promise
    const thirdPromise = secondPromise.then(number => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(number - 3);
            }, 1000);
        });
    });

    // Fourth Promise
    const fourthPromise = thirdPromise.then(number => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(number / 2);
            }, 1000);
        });
    });

    // Fifth Promise
    const fifthPromise = fourthPromise.then(number => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(number + 10);
            }, 1000);
        });
    });

    // Final Result
    fifthPromise.then(finalResult => {
        document.getElementById('output').textContent = `Final Result: ${finalResult}`;
    });
});