// {[]}
function isBalanced(s: string): string {
    let stack: string[] = [];
    for (let i = 0; i < s.length; i++) {

        if (s[i] === '[' || s[i] === '(' || s[i] === '{') {
            stack.push(s[i]);
        } else {
            if (stack.length === 0) return "FALSE"
            let popVal = stack.pop();
            if (s[i] === ']' && popVal !== '[') {
                return "FALSE"
            } else if (s[i] === '}' && popVal !== '{') {
                return "FALSE"
            } else if (s[i] === '(' && popVal !== ')') {
                return "FALSE"
            }
        }
    }
    if (stack.length === 0) {
        return "TRUE"
    } else {
        return "FALSE"
    }
}
console.log(isBalanced('{[()]}'));
console.log(isBalanced('{[(])}'));
console.log(isBalanced('{{[[(())]]}}'));

