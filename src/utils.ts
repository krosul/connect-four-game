export function ithAvailable(gameState: number[][], j: number) {
  for (let index = gameState.length - 1; index >= 0; index--) {
    if (gameState[index][j] == 0) {
      return index;
    }
  }
}
export function makeMove(
  gameState: number[][],
  isPlayer1Turn: boolean,
  i: number,
  j: number
): [number[][], boolean, number, number] {
  const newGameState = [];
  for (let index = gameState.length - 1; index >= 0; index--) {
    const newRow = [...gameState[index]];
    if (index === i) {
      newRow[j] = isPlayer1Turn ? 1 : -1;
    }
    newGameState.push(newRow);
  }
  return [newGameState.reverse(), isPlayer1Turn, i, j];
}
