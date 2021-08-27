-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 27, 2021 at 04:02 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pemesanan_kendaraan`
--

-- --------------------------------------------------------

--
-- Stand-in structure for view `daftar_pemesan`
-- (See below for the actual view)
--
CREATE TABLE `daftar_pemesan` (
`NOMOR` bigint(21)
,`ID_PEMESANAN` int(11)
,`ID_PEMESAN` int(11)
,`NAMA_USER` varchar(255)
,`NAMA_KENDARAAN` varchar(255)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `daftar_persetujuan_1`
-- (See below for the actual view)
--
CREATE TABLE `daftar_persetujuan_1` (
`NOMOR` bigint(21)
,`NAMA_KENDARAAN` varchar(255)
,`ID_PENYETUJU_1` int(11)
,`NAMA_PENYETUJU_1` varchar(255)
,`PERSETUJUAN_1` varchar(255)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `daftar_persetujuan_2`
-- (See below for the actual view)
--
CREATE TABLE `daftar_persetujuan_2` (
`NOMOR` bigint(21)
,`NAMA_KENDARAAN` varchar(255)
,`ID_PENYETUJU_2` int(11)
,`NAMA_PENYETUJU_2` varchar(255)
,`PERSETUJUAN_2` varchar(255)
);

-- --------------------------------------------------------

--
-- Table structure for table `kendaraan`
--

CREATE TABLE `kendaraan` (
  `ID_KENDARAAN` int(11) NOT NULL,
  `NAMA_KENDARAAN` varchar(255) NOT NULL,
  `TANGGAL_BUAT_KENDARAAN` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `kendaraan`
--

INSERT INTO `kendaraan` (`ID_KENDARAAN`, `NAMA_KENDARAAN`, `TANGGAL_BUAT_KENDARAAN`) VALUES
(1, 'Toyota Corolla ', '2021-08-27 03:51:15'),
(2, 'Toyota Supra', '2021-08-27 03:51:15');

-- --------------------------------------------------------

--
-- Table structure for table `pemesanan`
--

CREATE TABLE `pemesanan` (
  `ID_PEMESANAN` int(11) NOT NULL,
  `ID_KENDARAAN` int(11) NOT NULL,
  `ID_PEMESAN` int(11) NOT NULL,
  `ID_PENYETUJU_1` int(11) NOT NULL,
  `ID_PENYETUJU_2` int(11) NOT NULL,
  `STATUS_PERSETUJUAN_1` int(11) NOT NULL,
  `STATUS_PERSETUJUAN_2` int(11) NOT NULL,
  `TANGGAL_BUAT_PEMESANAN` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pemesanan`
--

INSERT INTO `pemesanan` (`ID_PEMESANAN`, `ID_KENDARAAN`, `ID_PEMESAN`, `ID_PENYETUJU_1`, `ID_PENYETUJU_2`, `STATUS_PERSETUJUAN_1`, `STATUS_PERSETUJUAN_2`, `TANGGAL_BUAT_PEMESANAN`) VALUES
(6, 1, 1, 2, 3, 1, 2, '2021-08-27 10:01:34'),
(8, 2, 10, 2, 3, 1, 1, '2021-08-27 12:25:59');

-- --------------------------------------------------------

--
-- Table structure for table `persetujuan`
--

CREATE TABLE `persetujuan` (
  `ID_PERSETUJUAN` int(11) NOT NULL,
  `PERSETUJUAN` varchar(255) NOT NULL,
  `TANGGAL_BUAT_PERSETUJUAN` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `persetujuan`
--

INSERT INTO `persetujuan` (`ID_PERSETUJUAN`, `PERSETUJUAN`, `TANGGAL_BUAT_PERSETUJUAN`) VALUES
(1, 'Diajukan', '2021-08-27 10:01:00'),
(2, 'Disetujui', '2021-08-27 10:01:00');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `ID_USER` int(11) NOT NULL,
  `LEVEL_USER` int(11) NOT NULL,
  `NAMA_USER` varchar(255) NOT NULL,
  `PASSWORD` varchar(255) NOT NULL,
  `TANGGAL_BUAT_USER` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`ID_USER`, `LEVEL_USER`, `NAMA_USER`, `PASSWORD`, `TANGGAL_BUAT_USER`) VALUES
(1, 0, 'Pemesan', 'pemesan', '2021-08-27 03:43:53'),
(2, 1, 'Penyetuju Satu', 'penyetuju1', '2021-08-27 03:43:53'),
(3, 2, 'Penyetuju Dua', 'penyetuju2', '2021-08-27 03:46:48'),
(8, 2, 'Penyetuju Dua B', 'penyetujuduab', '2021-08-27 07:09:41'),
(10, 0, 'Pemesan Dua', 'pemesandua', '2021-08-27 07:10:39'),
(13, 3, 'Admin', 'admin', '2021-08-27 12:20:32');

-- --------------------------------------------------------

--
-- Structure for view `daftar_pemesan`
--
DROP TABLE IF EXISTS `daftar_pemesan`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `daftar_pemesan`  AS SELECT row_number()  ( order by `pemesanan`.`ID_PEMESANAN`) AS `over` FROM ((`user` join `pemesanan` on(`user`.`ID_USER` = `pemesanan`.`ID_PEMESAN`)) join `kendaraan` on(`kendaraan`.`ID_KENDARAAN` = `pemesanan`.`ID_KENDARAAN`)) ;

-- --------------------------------------------------------

--
-- Structure for view `daftar_persetujuan_1`
--
DROP TABLE IF EXISTS `daftar_persetujuan_1`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `daftar_persetujuan_1`  AS SELECT row_number()  ( order by `pemesanan`.`ID_PEMESAN`) AS `over` FROM (((`pemesanan` join `user` on(`user`.`ID_USER` = `pemesanan`.`ID_PENYETUJU_1`)) join `kendaraan` on(`kendaraan`.`ID_KENDARAAN` = `pemesanan`.`ID_KENDARAAN`)) join `persetujuan` on(`persetujuan`.`ID_PERSETUJUAN` = `pemesanan`.`STATUS_PERSETUJUAN_1`)) ;

-- --------------------------------------------------------

--
-- Structure for view `daftar_persetujuan_2`
--
DROP TABLE IF EXISTS `daftar_persetujuan_2`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `daftar_persetujuan_2`  AS SELECT row_number()  ( order by `pemesanan`.`ID_PEMESAN`) AS `over` FROM (((`pemesanan` join `user` on(`user`.`ID_USER` = `pemesanan`.`ID_PENYETUJU_2`)) join `kendaraan` on(`kendaraan`.`ID_KENDARAAN` = `pemesanan`.`ID_KENDARAAN`)) join `persetujuan` on(`persetujuan`.`ID_PERSETUJUAN` = `pemesanan`.`STATUS_PERSETUJUAN_2`)) ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `kendaraan`
--
ALTER TABLE `kendaraan`
  ADD PRIMARY KEY (`ID_KENDARAAN`);

--
-- Indexes for table `pemesanan`
--
ALTER TABLE `pemesanan`
  ADD PRIMARY KEY (`ID_PEMESANAN`),
  ADD KEY `KENDARAAN_YANG_DIPESAN` (`ID_KENDARAAN`),
  ADD KEY `USER_YANG_MEMESAN` (`ID_PEMESAN`),
  ADD KEY `PENYETUJU_1` (`ID_PENYETUJU_1`),
  ADD KEY `ID_PENYETUJU_2` (`ID_PENYETUJU_2`),
  ADD KEY `STATUS_PERSETUJUAN_1` (`STATUS_PERSETUJUAN_1`),
  ADD KEY `STATUS_PERSETUJUAN_2` (`STATUS_PERSETUJUAN_2`);

--
-- Indexes for table `persetujuan`
--
ALTER TABLE `persetujuan`
  ADD PRIMARY KEY (`ID_PERSETUJUAN`),
  ADD KEY `STATUS_PERSETUJUAN` (`PERSETUJUAN`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`ID_USER`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `kendaraan`
--
ALTER TABLE `kendaraan`
  MODIFY `ID_KENDARAAN` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `pemesanan`
--
ALTER TABLE `pemesanan`
  MODIFY `ID_PEMESANAN` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `persetujuan`
--
ALTER TABLE `persetujuan`
  MODIFY `ID_PERSETUJUAN` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `ID_USER` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `pemesanan`
--
ALTER TABLE `pemesanan`
  ADD CONSTRAINT `pemesanan_ibfk_1` FOREIGN KEY (`ID_PEMESAN`) REFERENCES `user` (`ID_USER`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanan_ibfk_2` FOREIGN KEY (`ID_PENYETUJU_1`) REFERENCES `user` (`ID_USER`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanan_ibfk_3` FOREIGN KEY (`ID_PENYETUJU_2`) REFERENCES `user` (`ID_USER`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanan_ibfk_4` FOREIGN KEY (`ID_KENDARAAN`) REFERENCES `kendaraan` (`ID_KENDARAAN`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanan_ibfk_5` FOREIGN KEY (`STATUS_PERSETUJUAN_1`) REFERENCES `persetujuan` (`ID_PERSETUJUAN`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `pemesanan_ibfk_6` FOREIGN KEY (`STATUS_PERSETUJUAN_2`) REFERENCES `persetujuan` (`ID_PERSETUJUAN`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
