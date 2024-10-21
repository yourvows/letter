import { Injectable, Logger, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    try{
      await this.$connect();
    } catch (e) {
      Logger.error(`Failed connect DB (${process.env.DATABASE_URL}): `, e);
    }
  }
}
