-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 04/01/2021 às 02:02
-- Versão do servidor: 10.4.16-MariaDB
-- Versão do PHP: 7.3.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `sempreitfullstack`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `admins`
--

CREATE TABLE `admins` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `admins`
--

INSERT INTO `admins` (`id`, `name`, `email`, `password`) VALUES
(1, 'ADM1', 'admnistrator1@gmail.com', '$2b$10$lnaIkfkffahsssMEtgp1SOzuOvD4Ft1eqbSAxV67c4GkAQps/EjIa'),
(2, 'ADM2', 'admnistrator2gmail.com', '$2b$10$MCpCzZldVv6auxMj.MR3HO9n8eeVSlRdRh9zgahEkifVj1w71ejv.');

-- --------------------------------------------------------

--
-- Estrutura para tabela `knex_migrations`
--

CREATE TABLE `knex_migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `batch` int(11) DEFAULT NULL,
  `migration_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `knex_migrations`
--

INSERT INTO `knex_migrations` (`id`, `name`, `batch`, `migration_time`) VALUES
(1, '20201230105423_create_user.js', 1, '2021-01-03 04:12:53'),
(2, '20201230110057_create_products.js', 1, '2021-01-03 04:12:53'),
(3, '20201231022549_create_admins.js', 1, '2021-01-03 04:12:53');

-- --------------------------------------------------------

--
-- Estrutura para tabela `knex_migrations_lock`
--

CREATE TABLE `knex_migrations_lock` (
  `index` int(10) UNSIGNED NOT NULL,
  `is_locked` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `knex_migrations_lock`
--

INSERT INTO `knex_migrations_lock` (`index`, `is_locked`) VALUES
(1, 0);

-- --------------------------------------------------------

--
-- Estrutura para tabela `products`
--

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `descricao` varchar(1000) NOT NULL,
  `valor` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `products`
--

INSERT INTO `products` (`id`, `name`, `descricao`, `valor`) VALUES
(4, 'Notebook Acer Aspire Nitro 5 AN515-54-58CL Intel Core I5 8GB 128GB SSD 15.6 Endless Os', 'NOTEBOOK GAMER ACER ASPIRE NITRO 5 Sua passagem para o level avançado. Um trem expresso direto para o centro da ação está chegando. O notebook gamer Acer Aspire Nitro 5 é a nova geração, com configuração que não treme nem para os jogos!', '5.800'),
(7, 'Notebook Acer Aspire Nitro 5 AN515-54-58CL Intel Core I5 8GB 128GB SSD 15.6 Endless Os', 'DESEMPENHO E\nVELOCIDADE\n2 A.M. E550 vem equipado com um SSD NVMe que presenta um desempenho incrível de armazenamento, oferecendo velocidades de leitura de até 3.9 vezes maiores do que a alguns SSDs SATA. Ao comparar com HDs tradicionais, sua velocidade de leitura pode ser até 16 vezes maior.\n\nIDEAL PARA O ALTO\nVOLUME DE DADOS\nProjetado com um SSD NVMe de grande durabilidade e resistência. Acelere o seu fluxo de trabalho ou obtenha um excelente desempenho em seu game favorito, sem nenhuma preocupação.', '5.900,07'),
(8, 'Notebook Gamer 2AM E550 NVIDIA GeForce GTX 1050 3GB - FreeDOS Core i7-9700 16GB | SSD NVMe 128GB + 1TB FullHD 15.6\"', 'DESEMPENHO E\nVELOCIDADE\n2 A.M. E550 vem equipado com um SSD NVMe que presenta um desempenho incrível de armazenamento, oferecendo velocidades de leitura de até 3.9 vezes maiores do que a alguns SSDs SATA. Ao comparar com HDs tradicionais, sua velocidade de leitura pode ser até 16 vezes maior.\n\nIDEAL PARA O ALTO\nVOLUME DE DADOS\nProjetado com um SSD NVMe de grande durabilidade e resistência. Acelere o seu fluxo de trabalho ou obtenha um excelente desempenho em seu game favorito, sem nenhuma preocupação.', '6.974,07');

-- --------------------------------------------------------

--
-- Estrutura para tabela `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(1, 'USER1', 'user1@gmail.com', '$2b$10$Cbav5w6Vt5M3veoqQfQKSO.Rxs.HXkiTuXRnISOs9JUVX9Q7YQq8C'),
(2, 'USER2', 'user2@gmail.com', '$2b$10$WaxNK2ixkPYUEcQvn1TOAePC6znOUHwQL0cFmyS5FPER5acfqwfN2');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `knex_migrations`
--
ALTER TABLE `knex_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `knex_migrations_lock`
--
ALTER TABLE `knex_migrations_lock`
  ADD PRIMARY KEY (`index`);

--
-- Índices de tabela `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `knex_migrations`
--
ALTER TABLE `knex_migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `knex_migrations_lock`
--
ALTER TABLE `knex_migrations_lock`
  MODIFY `index` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
