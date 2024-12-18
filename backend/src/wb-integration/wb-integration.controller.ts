import { Controller, Post, Body, Res } from '@nestjs/common';
import { WbIntegrationService } from './wb-integration.service';
import { Response } from "express";

@Controller('wb-integration')
export class WbIntegrationController {
  constructor(private readonly wbIntegrationService: WbIntegrationService) { }

  @Post('token')
  async receiveToken(@Body('token') token: string, @Res() res: Response) {
    this.wbIntegrationService.setToken(token);
    res.status(200).send({ message: 'Token received and stored.' });
  }
}