import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AttendanceModule } from './attendance/attendance.module';
import { ClassesModule } from './classes/classes.module';
import { BookingsModule } from './bookings/bookings.module';
import { BokkingsController } from './bokkings/bokkings.controller';
import { EquipmentModule } from './equipment/equipment.module';
import { ProfileModule } from './profile/profile.module';
import { AiModule } from './ai/ai.module';

@Module({
  imports: [AuthModule, UsersModule, AttendanceModule, ClassesModule, BookingsModule, EquipmentModule, ProfileModule, AiModule],
  controllers: [AppController, BokkingsController],
  providers: [AppService],
})
export class AppModule {}
