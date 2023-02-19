function isBalanced(text) {
    let leftParentheses = 0
    let rightParetheses = 0

    for (let i = 0; i < text.length; i++) {
        if (text[i] === '(') leftParentheses++
        if (text[i] === ')') rightParetheses++
        if (rightParetheses > leftParentheses) return false
    }

    return leftParentheses === rightParetheses
}

function isBalancedStack(text) {
    let n = 0

    for (let i = 0; i < text.length; i++) {
        if (text[i] === '(') n++
        if (text[i] === ')') n--
        if (n < 0) return false
    }

    return n === 0
}

console.log(isBalancedStack("())345())"))
console.log(isBalancedStack("((345())"))
console.log(isBalancedStack("(345()987)"))
