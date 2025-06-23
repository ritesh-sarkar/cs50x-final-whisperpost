import { z } from "zod";

const TEMP_EMAIL_REGEX =
  /@(tempmail|10minutemail|mailinator|guerrillamail|discardmail|yopmail|fakeinbox|trashmail|getnada|mintemail|spamgourmet|sharklasers|emailondeck|moakt|throwawaymail|mytemp|maildrop|dispostable|mailpoof|inboxkitten|fakebox|instantemail|spam4\.me|trashmailz|anonaddy|burnermail|dropmail|mailnesia|spamavert|snkmail|mailtemp|temporarymail|tempail|emailtemporario|temporaryemail|dsitip|easytrashmail|mailsac|fakemailgenerator|spambox|emailondeck|mailnesia|spamex|emailtemporanea|tempm|zmail|luxusmail|mail7|mailtome|nowmymail|pjjkp|netmail|mytrashmail|binkmail|trashinbox|throwam|spamgourmet|trashmailer|spamfree24|webemail24|24hourmail|dayrep|spamavert|spambox|getairmail|deadaddress|spamspot|fakeinbox|letthemeatspam)\.(com|net|org|info|xyz|online|email|de|ru|co|us|cc|uk)$/i;

export const SignUpValidationZod = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters long")
    .max(30, "Name must be at most 30 characters long")
    .trim()
    .regex(/^[a-zA-Z\s]+$/, "Name must contain only letters and spaces")
    .transform((name) => name.trim()),

  username: z
    .string()
    .min(5, "Username must be at least 5 characters long")
    .max(15, "Username must be at most 15 characters long")
    .trim()
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username must contain only letters, numbers, and underscores"
    )
    .transform((username) => username.trim()),

  email: z
    .string()
    .email("Invalid or Temporary or disposable email addresses are not allowed")
    .refine((email) => !TEMP_EMAIL_REGEX.test(email)),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(30, "Password must be at most 30 characters long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
});
