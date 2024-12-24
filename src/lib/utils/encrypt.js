import crypto from "crypto";
import { CRYPTO_KEY, CRYPTO_IV } from "$env/static/private";

const algorithm = "aes-256-cbc";
const key = Buffer.from(CRYPTO_KEY, "hex");
const iv = Buffer.from(CRYPTO_IV, "hex");

const encrypt = (text) => {
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(text, "utf8", "hex");
    encrypted += cipher.final("hex");
    return encrypted;
}

const decrypt = (text) => {
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(text, "hex", "utf8");
    decrypted += decipher.final("utf8");
    return decrypted;
}

export { encrypt, decrypt };