-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Order" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "parcel_weight" TEXT NOT NULL,
    "country" TEXT NOT NULL
);
INSERT INTO "new_Order" ("country", "email", "id", "parcel_weight", "phone_number") SELECT "country", "email", "id", "parcel_weight", "phone_number" FROM "Order";
DROP TABLE "Order";
ALTER TABLE "new_Order" RENAME TO "Order";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
