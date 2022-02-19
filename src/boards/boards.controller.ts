import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  /*
    boardsService: BoardsService;
    constructor(boardService: BoardsService) {
    this.boardsService = boardService;
    }
    아래의 코드와 동일,
    접근제한자 private 을 사용함으로써 위의 코드 3줄을 1줄로 표현 할 수 있다.
*/
  constructor(private boardsService: BoardsService) {
    // 서비스 호출
  }
  @Get('/')
  getAllBoard() {
    return this.boardsService.getAllBoards();
  }
}
