export interface IStoreState {
  gameboardColumns: number,
  gameboardRows: number,
  pacmanDirection: string,
  pacmanMouth: boolean,
  pacmanX: number,
  pacmanXPrevious: number,
  pacmanY: number,
  pacmanYPrevious: number,
  score: number,
  stalled: boolean,
  targetVisible: boolean,
  targetX: number,
  targetY: number,
  cells: any[]
}