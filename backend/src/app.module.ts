import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { AiModule } from './ai/ai.module';
import { ProfileModule } from './profile/profile.module';
import { EquipmentModule } from './equipment/equipment.module';
import { BookingsModule } from './bookings/bookings.module';
import { ClassesModule } from './classes/classes.module';
import { AttendanceModule } from './attendance/attendance.module';
import { UsersModule } from './users/users.module';
import { UsersModule } from './users/users.module';
import { AttendanceModule } from './attendance/attendance.module';
import { ClassesModule } from './classes/classes.module';
import { BookingsModule } from './bookings/bookings.module';
import { BokkingsController } from './bokkings/bokkings.controller';
import { EquipmentModule } from './equipment/equipment.module';
import { ProfileModule } from './profile/profile.module';
import { AiModule } from './ai/ai.module';
import { SandunModule } from './sandun/sandun.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule, UsersModule, AttendanceModule, ClassesModule, BookingsModule, EquipmentModule, ProfileModule, AiModule, SandunModule, CommonModule],
  controllers: [AppController, BokkingsController],
  providers: [AppService],
})
export class AppModule {}
