import { z } from "zod";

const OFFENSIVE_REGEX = new RegExp(
  [
    // English obscenities
    "\\bfuck\\b",
    "\\bshit\\b",
    "\\bbitch\\b",
    "\\bslut\\b",
    "\\bdamn\\b",
    "\\basshole\\b",
    "\\bwhore\\b",
    "\\bcunt\\b",
    "\\bdick\\b",
    "\\bpussy\\b",
    "\\bretard\\b",

    // Hindi/Banglish slangs (with possible distortions)
    "\\bm[4@]d[a4]r[cx]h[o0]d\\b", // madarchod, m@darxod
    "\\bm[4@]d[a4]r[cx]h[o0]+d\\b", // madarchood
    "\\bch[o0]d\\b",
    "\\bch[o0]dna\\b", // chod, ch*dna
    "\\bch[u*]tiy[a@]\\b", // chutiya, ch*tiya
    "\\bg[a@]nd\\b",
    "\\bg[a@][a@]nd\\b", // gand
    "\\blund\\b",
    "\\bl[o0]da\\b", // loda
    "\\br[a@]ndi\\b",
    "\\bbh[o0]sd[i1]ke?\\b", // randi, bhosdike
    "\\bmc\\b",
    "\\bbc\\b", // short slang versions
    "\\bga[ae]ndu\\b", // gaandu
    "\\bmom[kc]e?[r4]\\b", // momker / momeker type
  ].join("|"),
  "i"
);

export const MessageValidationZod = z.object({
  message: z
    .string({
      required_error: "Message is required",
      invalid_type_error: "Message must be a string",
    })
    .min(1, "Message cannot be empty")
    .max(500, "Message cannot exceed 500 characters")
    .transform((msg) => msg.trim())
    .refine(
      (msg) => !OFFENSIVE_REGEX.test(msg.toLowerCase()),
      "Your message contains inappropriate or offensive language"
    ),
});
