import { DataSource } from 'typeorm';
import { gql } from 'apollo-server-express';

export const databaseConfig = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT, 5432),
        logging: true,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
      });
      return dataSource.initialize()
    }
  }
];


