function isBalancedStack(text: string): boolean {
    let n: number = 0

    for (let i: number = 0; i < text.length; i++) {
        if (text[i] === '(') n++
        if (text[i] === ')') n--
        if (n < 0) return false
    }

    return n === 0
}

console.log(isBalancedStack("())345())"))
console.log(isBalancedStack("((345())"))
console.log(isBalancedStack("(345()987)"))
