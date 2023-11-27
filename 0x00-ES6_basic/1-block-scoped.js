/* disable-eslint */
export default function taskBlock(trueOrFalse) {
  const task = false; // Outer scope variable
  const task2 = true;  // Outer scope variable

  if (trueOrFalse) {
    const task = true;  // Inner scope variable (shadows the outer variable)
    const task2 = false;  // Inner scope variable (shadows the outer variable)
  }
  
  return [task, task2];  // Returns the outer scope variables, not the ones inside the if block
}
