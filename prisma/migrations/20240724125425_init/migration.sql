/*
  Warnings:

  - You are about to drop the `studies_memo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `studies_memo`;

-- CreateTable
CREATE TABLE `study_memo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `study_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL DEFAULT '',
    `duration` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
