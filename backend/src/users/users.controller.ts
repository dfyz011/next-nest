import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get('/tree')
  findAllTree() {
    return this.userService.findAllTree();
  }

  @Get('/for-assign')
  findAllForAssign() {
    return this.userService.findAllForAssign();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.userService.remove(id);
  }

  @Post(':headId/assign')
  assignHeadToMany(
    @Param('headId') headId: number,
    @Body() body: { userIds: number[] },
  ) {
    return Promise.all(
      body.userIds.map((id) => this.userService.assignHead(id, headId)),
    );
  }

  @Put(':userId/assign/:headId')
  assignHeadToUser(
    @Param('userId') userId: number,
    @Param('headId') headId: number,
  ) {
    return this.userService.assignHead(userId, headId);
  }

  @Delete(':userId/unassign')
  unAssignHead(@Param('userId') userId: number) {
    return this.userService.unAssignHead(userId);
  }
}
