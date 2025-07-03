import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { CourseModule } from './course/course.module';
import { ContentModule } from './content/content.module';
import { EnrollmentModule } from './enrollment/enrollment.module';
import { ProgressModule } from './progress/progress.module';
import { QiuzModule } from './qiuz/qiuz.module';
import { ReviewModule } from './review/review.module';
import { AdminModule } from './admin/admin.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { CertificatesModule } from './certificates/certificates.module';

@Module({
  imports: [AuthModule, UserModule, CourseModule, ContentModule, EnrollmentModule, ProgressModule, QiuzModule, ReviewModule, AdminModule, AnalyticsModule, CertificatesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
