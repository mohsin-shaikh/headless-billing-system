import { Module } from '@nestjs/common';
import { InvoiceItemsService } from './invoice-items.service';
import { InvoiceItemsController } from './invoice-items.controller';

@Module({
  controllers: [InvoiceItemsController],
  providers: [InvoiceItemsService]
})
export class InvoiceItemsModule {}
