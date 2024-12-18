import { Module, } from '@nestjs/common';
import { WbIntegrationService } from './wb-integration.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Token } from "./token.entity";
import { WbIntegrationController } from "./wb-integration.controller";


@Module({
  imports: [
    TypeOrmModule.forFeature([Token]),
  ],
  providers: [WbIntegrationService],
  controllers: [WbIntegrationController],
  exports: [WbIntegrationService],
})
export class WbIntegrationModule { }