import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcrypt";

// تعريف واجهة TypeScript لنموذج المستخدم
export interface IUser extends Document {
  phoneNumber: string;
  email: string;
  password: string;
  role: "user" | "admin";
  avatar?: string;
  status?: "active" | "inactive" | "banned";
  address?: string;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

// تعريف مخطط Mongoose باستخدام `IUser`
const UserSchema = new Schema<IUser>(
  {
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: [/^(\+20)?1[0-9]{9}$/, "رقم الهاتف يجب أن يكون مصريًا ويبدأ بـ +20 أو 01"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        "يرجى إدخال بريد إلكتروني صحيح",
      ],
    },
    password: {
      type: String,
      required: true,
      select: false,
      validate: {
        validator: function (value: string) {
          return /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value);
        },
        message: "يجب أن تحتوي كلمة المرور على 8 أحرف على الأقل، تشمل حرفًا كبيرًا، رقمًا، ورمزًا خاصًا.",
      },
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    avatar: { type: String, default: "" },
    status: {
      type: String,
      enum: ["active", "inactive", "banned"],
      default: "active",
    },
    address: { type: String, default: "" },
  },
  { timestamps: true }
);

// **إضافة فهرس لتحسين الأداء في البحث عن المستخدمين**
UserSchema.index({ phoneNumber: 1 });
UserSchema.index({ email: 1 });

// **التحقق من عدم وجود حساب بنفس البريد الإلكتروني أو رقم الهاتف**
UserSchema.pre<IUser>("save", async function (next) {
  if (this.isModified("email")) {
    const existingUser = await mongoose.models.User.findOne({ email: this.email });
    if (existingUser) {
      return next(new Error("البريد الإلكتروني مستخدم بالفعل."));
    }
  }
  
  if (this.isModified("phoneNumber")) {
    const existingUser = await mongoose.models.User.findOne({ phoneNumber: this.phoneNumber });
    if (existingUser) {
      return next(new Error("رقم الهاتف مستخدم بالفعل."));
    }
  }

  next();
});

// **تشفير كلمة المرور قبل الحفظ مع التحقق من عدم استخدام نفس كلمة المرور القديمة**
UserSchema.pre<IUser>("save", async function (next) {
  if (!this.isModified("password")) return next();

  const existingUser = await mongoose.models.User.findOne({ _id: this._id }).select("password");
  if (existingUser) {
    const isSamePassword = await bcrypt.compare(this.password, existingUser.password);
    if (isSamePassword) {
      return next(new Error("لا يمكنك استخدام نفس كلمة المرور القديمة."));
    }
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// **إضافة وظيفة للتحقق من كلمة المرور**
UserSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

// **إنشاء النموذج وتصديره**
const UserModel = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default UserModel;
