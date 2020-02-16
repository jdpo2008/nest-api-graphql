import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app/app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

(async () => {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  // app.use(cookieParser());
  app.useStaticAssets('public');
  await app.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
    Logger.log(
      `Aplicacion corriendo en: ${process.env.APP_PROTOCOL}://${process.env.APP_HOST}:${process.env.APP_PORT}/api/v1`,
      'Server',
    );

    Logger.log(
      `PlayGround Running in: ${process.env.APP_PROTOCOL}://${process.env.APP_HOST}:${process.env.APP_PORT}/graphql`,
      'GraphQL',
    );

    Logger.log(
      `Conenctado a la Base de datos: ${process.env.DB_NAME}`,
      'MongoDB',
    );
  });
})();
