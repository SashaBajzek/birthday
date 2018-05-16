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
  stalled: string,
  stalledTargetX: number,
  stalledTargetY: number,
  targetVisible: boolean,
  targetX: number,
  targetY: number,
  cells: any[]
}