export interface IGrid {
  width: number,
  height: number,
  nodes: any[]
}

export interface IStoreState {
  doorLeft: any,
  doorRight: any,
  doorTargetX: number,
  doorTargetY: number,
  gameboardColumns: number,
  gameboardRows: number,
  pacmanDirection: string,
  pacmanMouth: boolean,
  pacmanX: number,
  pacmanXPrevious: number,
  pacmanY: number,
  pacmanYPrevious: number,
  score: number,
  targetVisible: boolean,
  targetX: number,
  targetY: number,
  travellingToDoor: boolean
  cells: any[]
}