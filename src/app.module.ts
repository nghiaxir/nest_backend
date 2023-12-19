import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';
import { ConfigModule } from '@nestjs/config';
import config from './config/configuration';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://dinhtrongnghia1212:09qUcjyApQdHfqPP@nestjs-ecommerce.3b0o7ue.mongodb.net/?retryWrites=true&w=majority',
    ),
    ProductModule,
    UserModule,
    AuthModule,
    CartModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
