export interface IGrid {
  width: number,
  height: number,
  nodes: any[]
}

export interface IStoreState {
  gameboardColumns: number,
  gameboardRows: number,
  pacmanDirection: string,
  pacmanMouth: boolean,
  pacmanX: number,
  pacmanY: number,
  score: number,
  targetVisible: boolean,
  targetX: number,
  targetY: number
  cells: any[]
}