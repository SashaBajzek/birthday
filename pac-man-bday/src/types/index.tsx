export interface IStoreState {
  gameboardColumns: number,
  gameboardRows: number,
  pacmanDirection: string,
  pacmanMouth: boolean,
  pacmanX: number,
  pacmanY: number,
  score: number,
  cells: any[]
}