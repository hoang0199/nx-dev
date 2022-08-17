import { DataSource } from 'typeorm';

export const databaseConfig = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT, 3306),
        url: process.env.DB_URL,
        logging: true,
      });
      return dataSource.initialize()
    }
  }
];
