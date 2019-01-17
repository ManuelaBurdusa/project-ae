-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 17, 2019 at 01:06 PM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.0.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project`
--

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id_employee` int(11) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `department_role` varchar(500) DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL,
  `project` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id_employee`, `name`, `email`, `department_role`, `created_at`, `updated_at`, `project`) VALUES
(8, 'Test2 Test2', 'Test2@gmail.com', 'Test Role', '2019-01-17', '2019-01-17', 'Price&Cost'),
(9, 'Manuela Maria', 'manuela.burdusa@gmail.com', 'Software Developer', '2019-01-17', '2019-01-17', 'HR Management'),
(10, 'Test1 Test1', 'test1@gmail.com', 'Technical Consultant', '2019-01-17', '2019-01-17', 'Taxes Application'),
(11, 'John Smith', 'john.smith@gmail.com', 'Dev', '2019-01-17', '2019-01-17', 'SharePoint Dev'),
(12, 'Ioana Popescu', 'ioana@gmail.com', 'Improvement Manager', '2019-01-17', '2019-01-17', 'HR Management'),
(13, 'Test3 Test3', 'Test3@gmail.com', 'Test 3 Role', '2019-01-17', '2019-01-17', 'HolidaysApp'),
(14, 'Test4 Test4', 'Test4@gmail.com', 'Test 4 Role', '2019-01-17', '2019-01-17', 'SharePoint Dev'),
(15, 'Test5 Test5', 'Test5@gmail.com', 'Test 5 Role', '2019-01-17', '2019-01-17', 'Taxes Application');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id_project` int(3) NOT NULL,
  `project_code` varchar(10) DEFAULT NULL,
  `project_name` varchar(300) DEFAULT NULL,
  `duration` varchar(1000) DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id_project`, `project_code`, `project_name`, `duration`, `created_at`, `updated_at`) VALUES
(1, '123', 'Test ', '6 months', '2019-01-13', '2019-01-13'),
(2, '2000', 'Price&Cost', '12 months', '2019-01-13', '2019-01-13'),
(3, '444555', 'Taxes Application', '3 months', '2019-01-13', '2019-01-13'),
(4, '987223', 'SharePoint Dev', '9 months', '2019-01-13', '2019-01-13'),
(5, '2500', 'HolidaysApp', '2 months', '2019-01-13', '2019-01-13'),
(6, '9876', 'Test Added Today', '3 months', '2019-01-13', '2019-01-17'),
(7, '12345', 'HR Management', '3 months', '2019-01-13', '2019-01-13'),
(8, '3456', 'test', '2 months', '2019-01-17', '2019-01-17');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `user_name` varchar(200) DEFAULT NULL,
  `user_email` varchar(300) DEFAULT NULL,
  `user_password` varchar(500) DEFAULT NULL,
  `role` varchar(300) DEFAULT NULL,
  `phone_number` varchar(50) DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id_user`, `user_name`, `user_email`, `user_password`, `role`, `phone_number`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'admin@gmail.com', 'admin', 'Admin', '123456789', '2019-01-13', '2019-01-13'),
(2, 'Test', 'Test', 'admin', 'Test', 'Test', '2019-01-13', '2019-01-13'),
(3, 'John Smith', 'john@gmail.com', 'admin', 'Tech Consultant', '123456789', '2019-01-13', '2019-01-13'),
(4, 'Manu Test', 'manuela.burdusa@gmail.com', 'admin', 'Full Stack Developer', '123456789', '2019-01-13', '2019-01-17'),
(5, 'Manuela Maria', 'manuela.burdusa@gmail.com', 'admin', 'Dev Project Manager', '123', '2019-01-16', '2019-01-17'),
(6, 'User Test Updated', 'User@gmail.com', 'admin', 'HR Manager', '123456789', '2019-01-16', '2019-01-17');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id_employee`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id_project`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `id_employee` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id_project` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
