-- CreateTable
CREATE TABLE "Order" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "phone_number" INTEGER NOT NULL,
    "parcel_weight" TEXT NOT NULL,
    "country" TEXT NOT NULL
);
