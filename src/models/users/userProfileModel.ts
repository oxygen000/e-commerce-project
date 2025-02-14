import mongoose, { Schema, Document } from "mongoose";
import UserModel from "./User"; // استيراد موديل المستخدم للتحقق من وجود المستخدم

// تعريف واجهة TypeScript لنموذج الملف الشخصي
export interface IUserProfile extends Document {
  userId: mongoose.Types.ObjectId;
  avatar?: string;
  fullName?: string;
  status?: "active" | "inactive" | "banned";
  address?: string;
  dateOfBirth?: Date;
  gender?: "male" | "female";
  bio?: string;
  createdAt: Date;
  updatedAt: Date;
}

// تعريف مخطط Mongoose للملف الشخصي
const UserProfileSchema = new Schema<IUserProfile>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
      validate: {
        validator: async function (value: mongoose.Types.ObjectId) {
          const userExists = await UserModel.findById(value);
          return !!userExists;
        },
        message: "المستخدم غير موجود، يرجى التحقق من صحة `userId`.",
      },
    },
    avatar: { type: String, default: "" },
    fullName: {
      type: String,
      trim: true,
      minlength: [3, "يجب أن يكون الاسم الكامل 3 أحرف على الأقل"],
      maxlength: [100, "يجب ألا يتجاوز الاسم الكامل 100 حرف"],
    },
    status: { type: String, enum: ["active", "inactive", "banned"], default: "active" },
    address: { type: String, default: "", trim: true },
    dateOfBirth: {
      type: Date,
      validate: {
        validator: function (value: Date) {
          return value < new Date(); // يجب أن يكون تاريخ الميلاد في الماضي
        },
        message: "تاريخ الميلاد غير صحيح.",
      },
    },
    gender: { type: String, enum: ["male", "female"] },
    bio: { type: String, default: "", maxlength: [500, "النبذة لا يجب أن تتجاوز 500 حرف"] },
  },
  { timestamps: true }
);

// **إضافة فهرس لتحسين أداء البحث عن الملفات الشخصية**
UserProfileSchema.index({ userId: 1 });
UserProfileSchema.index({ status: 1 });

// **منع إنشاء أكثر من ملف شخصي لنفس المستخدم**
UserProfileSchema.pre("save", async function (next) {
    const profile = this as IUserProfile & Document; // تحديد `this` ليكون من نوع `IUserProfile & Document`
  
    const existingProfile = await mongoose.models.UserProfile.findOne({ userId: profile.userId });
    if (existingProfile && existingProfile._id.toString() !== profile._id.toString()) {
      return next(new Error("لا يمكن للمستخدم امتلاك أكثر من ملف شخصي واحد."));
    }
    next();
  });
// **إنشاء النموذج وتصديره**
const UserProfileModel =
  mongoose.models.UserProfile || mongoose.model<IUserProfile>("UserProfile", UserProfileSchema);

export default UserProfileModel;
