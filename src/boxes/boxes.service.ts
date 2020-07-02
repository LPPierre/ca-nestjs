import { Injectable } from '@nestjs/common';
import { Box } from './interfaces/box.interface';

@Injectable()
export class BoxesService {
  private readonly boxes: Box[] = [];

  create(box: Box) {
    this.boxes.push(box);
  }

  findAll(): Box[] {
    return this.boxes;
  }

  // TODO
  // findOne(id: string): Box {
  //   return box;
  // }

  delete(box: Box) {
    // TODO
  }
}