export enum BombItemType {
  SECTION = 'SECTION',
  QUESTION = 'QUESTION',
}

export enum BombItemFormat {
  DATE = 'DATE',
  TIME = 'TIME',
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
  SHORT_ANSWER = 'SHORT_ANSWER',
  PARAGRAPH = 'PARAGRAPH',
  CHECKBOXES = 'CHECKBOXES',
  DROP_DOWN = 'DROP_DOWN',
}

export interface BombItem {
  type: BombItemType;
  name: string;
  description?: string;
  format?: BombItemFormat;
}
