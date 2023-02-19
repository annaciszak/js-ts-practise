function recFibonacci(n) {
    if (n < 0) throw new Error('n must be non-negative')
    if (n == 0) return 0
    if (n == 1) return 1
    if (n > 1) return (recFibonacci(n - 1) + recFibonacci(n - 2))
}

console.log(recFibonacci(15))


function itFibonacci(n) {
    let temp1 = 0
    let temp2 = 1

    if (n < 0) throw new Error('n must be non-negative')
    if (n == 0) return temp1
    if (n == 1) return temp2

    for (let i = 2; i <= n; i++) {
        let tempSum = temp1 + temp2
        temp1 = temp2
        temp2 = tempSum
    }
    return temp2
}

console.log(itFibonacci(-11))
