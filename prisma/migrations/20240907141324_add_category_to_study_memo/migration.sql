/*
  Warnings:

  - Added the required column `category` to the `study_memo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `study_memo` ADD COLUMN `category` VARCHAR(191) NOT NULL,
    MODIFY `study_date` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    MODIFY `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    MODIFY `updated_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0);
