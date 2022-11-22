import { checkHorizontalWin, checkVerticalWin } from "./CheckWin";
import { Player } from "./Player";

describe("CheckWin", () => {
  describe("checkHorizontalWin", () => {
    it("should return false with an empty board", () => {
      const board = Array.from(Array(7)).map((_) => Array.from(Array(6)));
      const res = checkHorizontalWin(board);
      expect(res).toBe(false);
    });

    it("should return true if player one has 4 horizontal disks in a row", () => {
      const board = [
        [
          Player.PLAYER_ONE,
          Player.PLAYER_ONE,
          Player.PLAYER_ONE,
          Player.PLAYER_ONE,
          undefined,
          undefined,
        ],
        [undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined],
      ];
      const res = checkHorizontalWin(board);
      expect(res).toBe(true);
    });

    it("should return false if player one has 4 horizontal disks not in a row", () => {
      const board = [
        [
          Player.PLAYER_ONE,
          Player.PLAYER_ONE,
          Player.PLAYER_ONE,
          Player.PLAYER_TWO,
          Player.PLAYER_ONE,
          undefined,
        ],
        [undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined],
      ];
      const res = checkHorizontalWin(board);
      expect(res).toBe(false);
    });
  });

  describe("checkVerticalWin", () => {
    it("should return false with an empty board", () => {
      const board = Array.from(Array(7)).map((_) => Array.from(Array(6)));
      const res = checkVerticalWin(board);
      expect(res).toBe(false);
    });

    it("should return true if player one has 4 horizontal disks in a row", () => {
      const board = [
        [
          Player.PLAYER_ONE,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
        ],
        [
          Player.PLAYER_ONE,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
        ],
        [
          Player.PLAYER_ONE,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
        ],
        [
          Player.PLAYER_ONE,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
        ],
        [undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined],
      ];
      const res = checkVerticalWin(board);
      expect(res).toBe(true);
    });

    it("should return false if player one has 4 horizontal disks not in a row", () => {
      const board = [
        [
          Player.PLAYER_ONE,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
        ],
        [
          Player.PLAYER_TWO,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
        ],
        [
          Player.PLAYER_ONE,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
        ],
        [
          Player.PLAYER_ONE,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
        ],
        [
          Player.PLAYER_ONE,
          ,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
        ],
        [undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined],
      ];
      const res = checkVerticalWin(board);
      expect(res).toBe(true);
    });
  });
});
