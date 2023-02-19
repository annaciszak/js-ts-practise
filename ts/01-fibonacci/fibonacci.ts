function recFibonacci(n: number): number {

    if (n < 0) throw new Error('n must be non-negative')
    if (n == 0) return 0
    if (n == 1) return 1
    if (n > 1) return (recFibonacci(n - 1) + recFibonacci(n - 2))

    return -1
}

function itFibonacci(n: number): number {
    let temp1: number = 0
    let temp2: number = 1

    if (n < 0) throw new Error('n must be non-negative')
    if (n == 0) return temp1
    if (n == 1) return temp2

    for (let i: number = 2; i <= n; i++) {
        let tempSum: number = temp1 + temp2
        temp1 = temp2
        temp2 = tempSum
    }

    return temp2
}
