import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  findAll() {
    return `This action returns all templates`;
  }
}
