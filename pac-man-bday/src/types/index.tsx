export interface IGrid {
  width: number,
  height: number,
  nodes: any[]
}

export interface IStoreState {
  blinkyDirection: string,
  blinkyWiggle: boolean,
  blinkyX: number,
  blinkyY: number,
  clydeDirection: string,
  clydeWiggle: boolean,
  clydeX: number,
  clydeY: number,
  gameboardColumns: number,
  gameboardRows: number,
  inkyDirection: string,
  inkyWiggle: boolean,
  inkyX: number,
  inkyY: number,
  pacmanDirection: string,
  pacmanMouth: boolean,
  pacmanX: number,
  pacmanY: number,
  pinkyDirection: string,
  pinkyWiggle: boolean,
  pinkyX: number,
  pinkyY: number,
  score: number,
  targetVisible: boolean,
  targetX: number,
  targetY: number
  cells: any[]
}