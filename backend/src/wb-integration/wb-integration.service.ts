import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Token } from './token.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WbIntegrationService {
  constructor(
    @InjectRepository(Token)
    private readonly tokenRepository: Repository<Token>  // Репозиторий токенов
  ) { }

  // Метод для записи токена в базу данных
  async setToken(token: string): Promise<void> {
    const existingToken = await this.tokenRepository.findOne({
      where: { value: token },  // Поиск по значению токена
    });
    if (existingToken) {
      // Если токен уже есть в базе, обновляем его
      existingToken.value = token;
      await this.tokenRepository.save(existingToken);
    } else {
      // Если токен отсутствует, создаем новый
      const newToken = this.tokenRepository.create({ value: token });
      await this.tokenRepository.save(newToken);
    }
    console.log('Token saved to database:', token);
  }

  // Метод для получения токена из базы данных
  async getToken(): Promise<string> {
    const token = await this.tokenRepository.findOne({
      where: {},
      order: { id: "ASC" }
    }); // Передаем пустой объект
    if (!token) {
      throw new Error('Token not found in the database');
    }
    console.log('Token retrieved from database:', token.value);
    return token.value;
  }
}
