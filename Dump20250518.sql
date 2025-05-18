-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: ai_resume_builder
-- ------------------------------------------------------
-- Server version	9.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `components_education_educations`
--

DROP TABLE IF EXISTS `components_education_educations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `components_education_educations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `university_name` varchar(255) DEFAULT NULL,
  `degree` varchar(255) DEFAULT NULL,
  `major` varchar(255) DEFAULT NULL,
  `start_date` varchar(255) DEFAULT NULL,
  `end_date` varchar(255) DEFAULT NULL,
  `description` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=175 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `components_education_educations`
--

LOCK TABLES `components_education_educations` WRITE;
/*!40000 ALTER TABLE `components_education_educations` DISABLE KEYS */;
INSERT INTO `components_education_educations` VALUES (151,'Western Illinois University','Master','Computer Science','2025-05-01','2025-05-16','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'),(152,'Western Illinois University','Master','Computer Science','Aug 2018','Dec:2019','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'),(173,'Western Illinois University','Master','Computer Science','2025-05-01','2025-05-16','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'),(174,'Western Illinois University','Master','Computer Science','Aug 2018','Dec:2019','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud');
/*!40000 ALTER TABLE `components_education_educations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `components_experience_experiences`
--

DROP TABLE IF EXISTS `components_experience_experiences`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `components_experience_experiences` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `company_name` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `start_date` varchar(255) DEFAULT NULL,
  `end_date` varchar(255) DEFAULT NULL,
  `work_summery` longtext,
  `currently_working` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `components_experience_experiences`
--

LOCK TABLES `components_experience_experiences` WRITE;
/*!40000 ALTER TABLE `components_experience_experiences` DISABLE KEYS */;
INSERT INTO `components_experience_experiences` VALUES (63,'Full Stack Developer','Amazon','New York','NY','2025-05-01','2025-05-12','<ul><li>Developed and maintained responsive web applications using React, Node.js, and Express.js, ensuring cross-browser compatibility and optimal performance.</li><li>Designed and implemented RESTful APIs for seamless data exchange between front-end and back-end systems, focusing on scalability and security.</li><li>Managed and optimized relational databases (e.g., PostgreSQL, MySQL) and NoSQL databases (e.g., MongoDB) to ensure data integrity and efficient retrieval.</li><li>Collaborated with designers and product managers to translate user stories and wireframes into functional and visually appealing user interfaces.</li><li>Implemented automated testing strategies, including unit, integration, and end-to-end tests, to ensure code quality and reduce bugs.</li><li>Utilized version control systems (e.g., Git) and CI/CD pipelines to streamline the software development lifecycle and facilitate continuous deployment.</li><li>Participated in code reviews and provided constructive feedback to improve code quality and enforce coding standards</li></ul>',1),(64,'Frontend Developer','Google','Charlotte','NC','May 2019','Jan 2021',' Designed, developed, and maintained full-stack applications using React and Node.js.• Implemented responsive user interfaces with React, ensuring seamless user experiences acrossvarious devices and browsers.• Maintaining the React Native in-house organization application.• CreatedRESTfulAPIs withNode.js and Express,facilitating data communicationbetween the front-endand back-end systems.',0),(97,'Full Stack Developer','Amazon','New York','NY','2025-05-01','2025-05-12','<ul><li>Developed and maintained responsive web applications using React, Node.js, and Express.js, ensuring cross-browser compatibility and optimal performance.</li><li>Designed and implemented RESTful APIs for seamless data exchange between front-end and back-end systems, focusing on scalability and security.</li><li>Managed and optimized relational databases (e.g., PostgreSQL, MySQL) and NoSQL databases (e.g., MongoDB) to ensure data integrity and efficient retrieval.</li><li>Collaborated with designers and product managers to translate user stories and wireframes into functional and visually appealing user interfaces.</li><li>Implemented automated testing strategies, including unit, integration, and end-to-end tests, to ensure code quality and reduce bugs.</li><li>Utilized version control systems (e.g., Git) and CI/CD pipelines to streamline the software development lifecycle and facilitate continuous deployment.</li><li>Participated in code reviews and provided constructive feedback to improve code quality and enforce coding standards</li></ul>',1),(98,'Frontend Developer','Google','Charlotte','NC','May 2019','Jan 2021',' Designed, developed, and maintained full-stack applications using React and Node.js.• Implemented responsive user interfaces with React, ensuring seamless user experiences acrossvarious devices and browsers.• Maintaining the React Native in-house organization application.• CreatedRESTfulAPIs withNode.js and Express,facilitating data communicationbetween the front-endand back-end systems.',0),(99,'Team Lead','Accenture India Pvt. Ltd.','Noida','Uttar Pradesh','2019-02-13','','test',1),(100,'Team Lead','Accenture India Pvt. Ltd.','Noida','Uttar Pradesh','2019-02-13','','test',1);
/*!40000 ALTER TABLE `components_experience_experiences` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `components_skills_skills`
--

DROP TABLE IF EXISTS `components_skills_skills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `components_skills_skills` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `rating` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=207 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `components_skills_skills`
--

LOCK TABLES `components_skills_skills` WRITE;
/*!40000 ALTER TABLE `components_skills_skills` DISABLE KEYS */;
INSERT INTO `components_skills_skills` VALUES (141,'Angular',4),(142,'React',5),(143,'MySql',3),(144,'React Native',5),(145,'AWS',4),(146,'Azure',4),(201,'Angular',4),(202,'React',5),(203,'MySql',3),(204,'React Native',5),(205,'AWS',4),(206,'Azure',4);
/*!40000 ALTER TABLE `components_skills_skills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_queries`
--

DROP TABLE IF EXISTS `user_queries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_queries` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `document_id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `message` longtext,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `published_at` datetime(6) DEFAULT NULL,
  `created_by_id` int unsigned DEFAULT NULL,
  `updated_by_id` int unsigned DEFAULT NULL,
  `locale` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_queries_documents_idx` (`document_id`,`locale`,`published_at`),
  KEY `user_queries_created_by_id_fk` (`created_by_id`),
  KEY `user_queries_updated_by_id_fk` (`updated_by_id`),
  CONSTRAINT `user_queries_created_by_id_fk` FOREIGN KEY (`created_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `user_queries_updated_by_id_fk` FOREIGN KEY (`updated_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_queries`
--

LOCK TABLES `user_queries` WRITE;
/*!40000 ALTER TABLE `user_queries` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_queries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_resumes`
--

DROP TABLE IF EXISTS `user_resumes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_resumes` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `document_id` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `resume_id` varchar(255) DEFAULT NULL,
  `user_email` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `published_at` datetime(6) DEFAULT NULL,
  `created_by_id` int unsigned DEFAULT NULL,
  `updated_by_id` int unsigned DEFAULT NULL,
  `locale` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `job_title` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `summery` longtext,
  `theme_color` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_resumes_documents_idx` (`document_id`,`locale`,`published_at`),
  KEY `user_resumes_created_by_id_fk` (`created_by_id`),
  KEY `user_resumes_updated_by_id_fk` (`updated_by_id`),
  CONSTRAINT `user_resumes_created_by_id_fk` FOREIGN KEY (`created_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `user_resumes_updated_by_id_fk` FOREIGN KEY (`updated_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=175 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_resumes`
--

LOCK TABLES `user_resumes` WRITE;
/*!40000 ALTER TABLE `user_resumes` DISABLE KEYS */;
INSERT INTO `user_resumes` VALUES (1,'d45p344gxzvrdcdetgm7bnhh','Full Stack','758ced30-21d6-4372-b6d8-5b68daf2fe62',NULL,NULL,'2025-05-10 16:38:48.884000','2025-05-10 16:38:48.884000',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2,'d45p344gxzvrdcdetgm7bnhh','Full Stack','758ced30-21d6-4372-b6d8-5b68daf2fe62',NULL,NULL,'2025-05-10 16:38:48.884000','2025-05-10 16:38:48.884000','2025-05-10 16:38:48.897000',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(5,'l6acz0z0oemys6mgntlfyycl','My first resume','9a2a0a3e-9145-4e47-a471-9716d1127108','charuchetan.20@gmail.com','Charu Chetan','2025-05-10 17:31:01.852000','2025-05-14 11:22:57.944000',NULL,NULL,1,NULL,'Charu','Chetan','Application Development Specialist','Diwan Bazar','08808090760','charuchetan.20@gmail.com','Highly experienced Software Engineer with a proven track record of designing, developing, and implementing scalable and maintainable software solutions. Expertise in multiple programming languages and frameworks, with a focus on delivering high-quality code and mentoring junior developers. Demonstrated ability to lead projects and collaborate effectively with cross-functional teams to achieve business objectives.','#33A1FF'),(140,'l6acz0z0oemys6mgntlfyycl','My first resume','9a2a0a3e-9145-4e47-a471-9716d1127108','charuchetan.20@gmail.com','Charu Chetan','2025-05-10 17:31:01.852000','2025-05-14 11:22:57.944000','2025-05-14 11:22:57.964000',NULL,1,NULL,'Charu','Chetan','Application Development Specialist','Diwan Bazar','08808090760','charuchetan.20@gmail.com','Highly experienced Software Engineer with a proven track record of designing, developing, and implementing scalable and maintainable software solutions. Expertise in multiple programming languages and frameworks, with a focus on delivering high-quality code and mentoring junior developers. Demonstrated ability to lead projects and collaborate effectively with cross-functional teams to achieve business objectives.','#33A1FF'),(141,'zasq6mrlr0qhjtjt22kzr2et','My Resume','6108918a-7e81-4ed3-964b-9606a1370a4a','charuchetan.20@gmail.com','Charu Chetan','2025-05-14 11:23:49.882000','2025-05-14 13:39:14.902000',NULL,NULL,NULL,NULL,'Charu','Chaurasiya','Full stack developer','Diwan Bazar','08808090760','charuchetan.20@gmail.com','A skilled software engineer with experience in developing and maintaining software applications. Proficient in one or more programming languages and frameworks. Able to work independently and as part of a team to deliver high-quality code.','#708090'),(167,'zasq6mrlr0qhjtjt22kzr2et','My Resume','6108918a-7e81-4ed3-964b-9606a1370a4a','charuchetan.20@gmail.com','Charu Chetan','2025-05-14 11:23:49.882000','2025-05-14 13:39:14.902000','2025-05-14 13:39:14.941000',NULL,NULL,NULL,'Charu','Chaurasiya','Full stack developer','Diwan Bazar','08808090760','charuchetan.20@gmail.com','A skilled software engineer with experience in developing and maintaining software applications. Proficient in one or more programming languages and frameworks. Able to work independently and as part of a team to deliver high-quality code.','#708090'),(168,'vi0p5pgfrkin70w8xunye60w','Archita Resume','45b3af3c-42f9-4975-a7ba-d328eca05013','charuchetan.20@gmail.com','Charu Chetan','2025-05-17 14:48:17.426000','2025-05-17 16:38:26.171000',NULL,NULL,NULL,NULL,'Archita','Chaurasiya','Teacher','Diwan Bazar','08808090760','charuchetan.20@gmail.com','Enthusiastic and dedicated recent graduate with a strong passion for fostering a positive learning environment. Eager to apply theoretical knowledge and develop practical teaching skills. Committed to student success and creating engaging lesson plans. Eager to grow professionally under mentorship of senior teacher.','#FA8072'),(174,'vi0p5pgfrkin70w8xunye60w','Archita Resume','45b3af3c-42f9-4975-a7ba-d328eca05013','charuchetan.20@gmail.com','Charu Chetan','2025-05-17 14:48:17.426000','2025-05-17 16:38:26.171000','2025-05-17 16:38:26.217000',NULL,NULL,NULL,'Archita','Chaurasiya','Teacher','Diwan Bazar','08808090760','charuchetan.20@gmail.com','Enthusiastic and dedicated recent graduate with a strong passion for fostering a positive learning environment. Eager to apply theoretical knowledge and develop practical teaching skills. Committed to student success and creating engaging lesson plans. Eager to grow professionally under mentorship of senior teacher.','#FA8072');
/*!40000 ALTER TABLE `user_resumes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_resumes_cmps`
--

DROP TABLE IF EXISTS `user_resumes_cmps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_resumes_cmps` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `entity_id` int unsigned DEFAULT NULL,
  `cmp_id` int unsigned DEFAULT NULL,
  `component_type` varchar(255) DEFAULT NULL,
  `field` varchar(255) DEFAULT NULL,
  `order` double unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_resumes_uq` (`entity_id`,`cmp_id`,`field`,`component_type`),
  KEY `user_resumes_field_idx` (`field`),
  KEY `user_resumes_component_type_idx` (`component_type`),
  KEY `user_resumes_entity_fk` (`entity_id`),
  CONSTRAINT `user_resumes_entity_fk` FOREIGN KEY (`entity_id`) REFERENCES `user_resumes` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=501 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_resumes_cmps`
--

LOCK TABLES `user_resumes_cmps` WRITE;
/*!40000 ALTER TABLE `user_resumes_cmps` DISABLE KEYS */;
INSERT INTO `user_resumes_cmps` VALUES (297,5,63,'experience.experience','experience',3),(298,5,64,'experience.experience','experience',4),(382,5,151,'education.education','education',1),(383,5,152,'education.education','education',2),(393,5,141,'skills.skills','skills',1),(394,5,142,'skills.skills','skills',2),(395,5,143,'skills.skills','skills',3),(396,5,144,'skills.skills','skills',4),(397,5,145,'skills.skills','skills',5),(398,5,146,'skills.skills','skills',6),(489,140,173,'education.education','education',1),(490,140,174,'education.education','education',2),(491,140,97,'experience.experience','experience',1),(492,140,98,'experience.experience','experience',2),(493,140,201,'skills.skills','skills',1),(494,140,202,'skills.skills','skills',2),(495,140,203,'skills.skills','skills',3),(496,140,204,'skills.skills','skills',4),(497,140,205,'skills.skills','skills',5),(498,140,206,'skills.skills','skills',6),(499,141,99,'experience.experience','experience',1),(500,167,100,'experience.experience','experience',1);
/*!40000 ALTER TABLE `user_resumes_cmps` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-18 13:16:05
