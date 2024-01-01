import { Module } from '@nestjs/common';
import { PostsResolver } from './posts.resolver';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

@Module({
  providers: [PostsResolver, PostsService],
  controllers: [PostsController],
})
export class PostsModule {}
