import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { Employee } from './employee.entity';

@Entity()
export class ContactInfo {
  @PrimaryColumn()
  employeeId: number;

  @OneToOne(() => Employee)
  @JoinColumn()
  employee: Employee;

  @Column({ nullable: true })
  phone: string;

  @Column()
  email: string;
}
