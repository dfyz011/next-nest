import { config } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
import configuration from './configuration';

config();

const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  ...configuration().database,
};

export default new DataSource(dataSourceOptions);
