
import { AppDataSource } from "../config/db";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from "../entities/user.entity";
import { signupSchema, loginSchema } from "../validator/user.validator";
import { logger } from '../config/logger';


export class UserService{
   async register(data: any){
      const {error, value} = signupSchema.validate(data)
      if(error) throw new Error(error.details[0].message);

      const {name, email, password, address} = value;
      const userRepo = AppDataSource.getRepository(User);
      
      const exisitingUser = await userRepo.findOne({where : {email}});
      if(exisitingUser) throw new Error ('User already exists!')

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = userRepo.create({ name, email, password: hashedPassword, address });
      await userRepo.save(user);
      console.log(`User signed up: ${email}`);
      return { message: 'User created' };
   }

   async login(data: any) {
      const { error, value } = loginSchema.validate(data);
      if (error) throw new Error(error.details[0].message);
  
      const { email, password } = value;
      const userRepo = AppDataSource.getRepository(User);
      const user = await userRepo.findOne({ where: { email } });
      if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new Error('Invalid credentials');
      }
      const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET || 'secret', {
        expiresIn: '1d',
      });
      logger.info(`User logged in: ${email}`);
      return { token, message: 'Login successfull!' };
    }
}