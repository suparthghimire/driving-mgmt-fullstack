-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 13, 2022 at 06:34 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_sad`
--

-- --------------------------------------------------------

--
-- Table structure for table `packages`
--

CREATE TABLE `packages` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `duration` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `packages`
--

INSERT INTO `packages` (`id`, `name`, `description`, `duration`, `price`, `createdAt`, `updatedAt`) VALUES
(1, 'Bike Driving', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus dolore consequatur iusto cum vero animi, obcaecati nisi? Eos corporis dicta quo, architecto quas necessitatibus incidunt quia magnam totam sed odio deserunt alias laborum aut illo doloremque? Fuga beatae corporis accusamus?', '1 Month for 30 Mins', 7000, '2022-02-11 14:16:29', '2022-02-11 14:16:29'),
(2, 'Bike Driving', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus dolore consequatur iusto cum vero animi, obcaecati nisi? Eos corporis dicta quo, architecto quas necessitatibus incidunt quia magnam totam sed odio deserunt alias laborum aut illo doloremque? Fuga beatae corporis accusamus?', '15 Days for 30 Mins', 3000, '2022-02-11 14:16:29', '2022-02-11 14:16:29'),
(3, 'Car Driving', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus dolore consequatur iusto cum vero animi, obcaecati nisi? Eos corporis dicta quo, architecto quas necessitatibus incidunt quia magnam totam sed odio deserunt alias laborum aut illo doloremque? Fuga beatae corporis accusamus?', '1 Month for 30 Mins', 13000, '2022-02-11 14:16:29', '2022-02-11 14:16:29'),
(4, 'Car Driving', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus dolore consequatur iusto cum vero animi, obcaecati nisi? Eos corporis dicta quo, architecto quas necessitatibus incidunt quia magnam totam sed odio deserunt alias laborum aut illo doloremque? Fuga beatae corporis accusamus?', '15 Days for 30 Mins', 7000, '2022-02-11 14:16:29', '2022-02-11 14:16:29'),
(5, 'Scooter Driving', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus dolore consequatur iusto cum vero animi, obcaecati nisi? Eos corporis dicta quo, architecto quas necessitatibus incidunt quia magnam totam sed odio deserunt alias laborum aut illo doloremque? Fuga beatae corporis accusamus?', '15 Days for 30 Mins', 4500, '2022-02-11 14:16:29', '2022-02-11 14:16:29');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20220211080634-create-user.js'),
('20220211080635-create-user.js'),
('20220211080638-create-user.js'),
('20220211082644-create-package.js'),
('20220211082644-create-user-package.js'),
('20220211082646-create-user-package.js'),
('20220211104816-create-user.js');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `full_name` varchar(255) NOT NULL,
  `phone_number` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `citizenship_no` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `full_name`, `phone_number`, `email`, `password`, `address`, `citizenship_no`, `image`, `createdAt`, `updatedAt`) VALUES
(9, 'Suparth Ghimire', '9848952466', 'suparthnarayanghimire2014@gmail.com', '$2b$10$g2osKzOTYjpIkkISYmPweuAx3hYwgswXgYajX8qPQ2ccw0qRDO6oS', 'Shivanagar', '66547471', '1644654369901.jpg', '2022-02-12 08:26:09', '2022-02-12 08:26:09'),
(11, 'Suparth Ghimire', '9848952466', 'suparthnarayanghimire2015@gmail.com', '$2b$10$NMNMr.CyLqYaY7P0/3r0fe9YebQmGyotpEo2OCbZtowYKzzUAxiMa', 'Shivanagar', '1234SDSDS', '1644686354165.jpg', '2022-02-12 17:19:14', '2022-02-12 17:19:14'),
(12, 'Suparth Ghimire', '9841111111', 'suparth@suparth.com', '$2b$10$ZljMrLQAKRUkfwBf9PHQN.imHIhhT15qoNkixqUuEVVJzr6PXWcay', 'Kirtipur', '1234', '1644687287719.jpg', '2022-02-12 17:34:47', '2022-02-12 17:34:47'),
(13, 'Suparth Ghimire', '9988441188', 'ss2014@gmail.com', '$2b$10$ox8/oipPGjturFBJCpRq..6wu7/MfPcByS.oLJRXaG9yyKMVn.plm', 'shsh', 'shsh', '1644687509453.jpg', '2022-02-12 17:38:29', '2022-02-12 17:38:29'),
(14, 'Suparth Ghimire', '888', 'ssdsd@gmail.com', '$2b$10$j5EWw22A.0jemzxSoUlAp.LFonmIWzFkcX8RmoBe3uwqxCTm2wjZS', 'Shivanagar', 'dhjdhfd', '1644687619639.jpg', '2022-02-12 17:40:19', '2022-02-12 17:40:19'),
(15, 'Shree', '432423', 'abc@gmail.com', '$2b$10$olqSbYsHgP61MwCX2p0mZOMBSd/fvKgKrdglU6hvA5ZVtK8uLfkXG', 'Address', 'ssdsds', '1644771849713.png', '2022-02-13 17:04:09', '2022-02-13 17:04:09');

-- --------------------------------------------------------

--
-- Table structure for table `user_package`
--

CREATE TABLE `user_package` (
  `id` int(11) NOT NULL,
  `UserId` int(11) DEFAULT NULL,
  `PackageId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_package`
--

INSERT INTO `user_package` (`id`, `UserId`, `PackageId`, `createdAt`, `updatedAt`) VALUES
(2, 12, 5, '2022-02-13 17:34:20', '2022-02-13 17:34:20'),
(3, 9, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 9, 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 9, 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 9, 4, '2022-02-13 17:00:28', '2022-02-13 17:00:28'),
(7, 15, 1, '2022-02-13 17:05:58', '2022-02-13 17:05:58');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `packages`
--
ALTER TABLE `packages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `citizenship_no` (`citizenship_no`),
  ADD UNIQUE KEY `image` (`image`);

--
-- Indexes for table `user_package`
--
ALTER TABLE `user_package`
  ADD PRIMARY KEY (`id`),
  ADD KEY `UserId` (`UserId`),
  ADD KEY `PackageId` (`PackageId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `packages`
--
ALTER TABLE `packages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `user_package`
--
ALTER TABLE `user_package`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `user_package`
--
ALTER TABLE `user_package`
  ADD CONSTRAINT `user_package_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `user_package_ibfk_2` FOREIGN KEY (`PackageId`) REFERENCES `packages` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
