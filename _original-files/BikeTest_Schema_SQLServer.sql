-- ----------------------------------------------------------
-- ----------------------------------------------------------
-- Script :       BikeTest_Schema_SQLServer.sql
-- Database:      BikeTest
-- Date de maj :  12 fevr. 2020
-- Version :      2020.01
-- Auteur :       Gabor - gmy
-- Contributeur : N/A
-- Modif :        Creation - gmy

-- ----------------------------------------------------------
-- ----------------------------------------------------------
USE master;
IF EXISTS (SELECT * FROM sys.databases WHERE NAME = 'BikeTest')
DROP DATABASE BikeTest;
GO

CREATE DATABASE BikeTest;
GO

USE BikeTest;
GO

-- ----------------------------------------------------------
-- ----------------------------------------------------------
-- Creation des tables

-- Adresse
CREATE TABLE ADR(
	Num					INTEGER NOT NULL,
	Rue					VARCHAR(50) NOT NULL,
	Rue2				VARCHAR(50),
	NoRue				VARCHAR(50),
	CP					VARCHAR(50),
	Loc					INTEGER NOT NULL
);

-- Client
CREATE TABLE CLIENT(
	Pers				INTEGER NOT NULL,
	CantonOrigine		INTEGER,
);

-- Contact
CREATE TABLE CONTACT(
	Ent					INTEGER NOT NULL,
	Pers				INTEGER NOT NULL,
	APartirDe			DATE NOT NULL,
	JusquA				DATE
);

-- Edition
CREATE TABLE ED(
	Num					INTEGER NOT NULL,
	Evmt				INTEGER NOT NULL,
	Lieu				VARCHAR(50) NOT NULL,
	DateDebut			DATE NOT NULL,
	DateFin				DATE NOT NULL
);

-- Effectuation 
CREATE TABLE EFFECT(
	Test				INTEGER NOT NULL,
	Client				INTEGER NOT NULL
);

-- Entreprise
CREATE TABLE ENT(
	Num					INTEGER NOT NULL,
	RaisonSociale		VARCHAR(50) NOT NULL
);

-- Evenement
CREATE TABLE EVMT(
	Num					INTEGER NOT NULL,
	Nom					VARCHAR(50) NOT NULL
);

-- Inscription
CREATE TABLE INSCR(
	Num					INTEGER NOT NULL,
	JTest				INTEGER NOT NULL,
	Client				INTEGER NOT NULL
);

-- Invitation
CREATE TABLE INVIT(
	Marq				INTEGER NOT NULL,
	Ed					INTEGER NOT NULL
);

-- Jour de Test
CREATE TABLE JTEST(
	Num					INTEGER NOT NULL,
	Ed					INTEGER NOT NULL,
	DateJTest			DATE NOT NULL
);

-- Liste
CREATE TABLE LISTE(
	Num					INTEGER NOT NULL,
	NomTable			VARCHAR(50) NOT NULL,
	NomColonne			VARCHAR(50) NOT NULL,
	Valeur				VARCHAR(50) NOT NULL
);

-- Localite
CREATE TABLE LOC(
	Num					INTEGER NOT NULL,
	NPA					VARCHAR(50) NOT NULL,
	Localite			VARCHAR(50) NOT NULL,
	Canton				VARCHAR(50),
	Pays				INTEGER NOT NULL
);

-- Marque
CREATE TABLE MARQ(
	Num					INTEGER NOT NULL,
	Ent					INTEGER NOT NULL,
	Designation			VARCHAR(50) NOT NULL,
	DescrCourte			VARCHAR(50) NOT NULL,
	DescrLongue			VARCHAR(200)
);

-- Organisation
CREATE TABLE ORG(
	Ed					INTEGER NOT NULL,
	Staff				INTEGER NOT NULL,
	RoleJoue            INTEGER NOT NULL
);

-- Pays
CREATE TABLE PAYS(
	Num					INTEGER NOT NULL,
	Code                INTEGER NOT NULL,
	Alpha2              VARCHAR(10) NOT NULL,
	Alpha3              VARCHAR(10) NOT NULL,
	NomFR				VARCHAR(50) NOT NULL,
	NomEN				VARCHAR(50) NOT NULL,
	NomDE				VARCHAR(50) NOT NULL,
	NomIT				VARCHAR(50) NOT NULL,
	OrdreTri			INTEGER NOT NULL
);

-- Personne
CREATE TABLE PERS(
	Num					INTEGER NOT NULL,
	Nom					VARCHAR(50) NOT NULL,
	Prenom				VARCHAR(50) NOT NULL,
	NoTel1				VARCHAR(50),
	NoTel2				VARCHAR(50),
	Email1				VARCHAR(50),
	Email2				VARCHAR(50),
	Adr					INTEGER,
	Remarque			VARCHAR(200)
);

-- Presentation
CREATE TABLE PRES(
	Ed					INTEGER NOT NULL,
	Prod				INTEGER NOT NULL
);

-- Produit
CREATE TABLE PROD(
	Num					INTEGER NOT NULL,
	Marq				INTEGER NOT NULL,
	ValeurAffichee      VARCHAR(50), 
	DescrCourte			VARCHAR(50) NOT NULL,
	DescrLongue			VARCHAR(200)
);

-- Staff
CREATE TABLE STAFF(
	Pers				INTEGER NOT NULL
);

-- Test
CREATE TABLE TEST(
	Num					INTEGER NOT NULL,
	JTest				INTEGER NOT NULL,
	Prod				INTEGER NOT NULL,
	HeureDebut			TIME NOT NULL,
	HeureFin			TIME,
	Feedback			VARCHAR(200)
);

-- Type d'adresse
CREATE TABLE TADR(
	Ent					INTEGER NOT NULL,
	Adr					INTEGER NOT NULL,
	Designation			INTEGER NOT NULL
);

-- V�lo
CREATE TABLE VELO(
	Num					INTEGER NOT NULL,
	TailleCadre			INTEGER,
	UniteCadre			INTEGER,
	TailleJantes		INTEGER,
	UniteJantes			INTEGER
);

GO

-- ------------------------------------------
-- Cles primaires

ALTER TABLE ADR
   ADD CONSTRAINT ADR_pkey PRIMARY KEY (Num);

ALTER TABLE CLIENT
   ADD CONSTRAINT CLIENT_pkey PRIMARY KEY (Pers);

ALTER TABLE CONTACT
   ADD CONSTRAINT CONTACT_pkey PRIMARY KEY (Ent, Pers);

ALTER TABLE ED
   ADD CONSTRAINT ED_pkey PRIMARY KEY (Num);

ALTER TABLE EFFECT
   ADD CONSTRAINT EFFECT_pkey PRIMARY KEY (Test, Client);

ALTER TABLE ENT
   ADD CONSTRAINT ENT_pkey PRIMARY KEY (Num);

ALTER TABLE EVMT
   ADD CONSTRAINT EVMT_pkey PRIMARY KEY (Num);

ALTER TABLE INSCR
   ADD CONSTRAINT INSCR_pkey PRIMARY KEY (Num);

ALTER TABLE INVIT
   ADD CONSTRAINT INVIT_pkey PRIMARY KEY (Marq, Ed);

  ALTER TABLE JTEST
   ADD CONSTRAINT JTEST_pkey PRIMARY KEY (Num);

ALTER TABLE LISTE
   ADD CONSTRAINT LISTE_pkey PRIMARY KEY (Num);

ALTER TABLE LOC
   ADD CONSTRAINT LOC_pkey PRIMARY KEY (Num);

ALTER TABLE MARQ
   ADD CONSTRAINT MARQ_pkey PRIMARY KEY (Num);

ALTER TABLE ORG
   ADD CONSTRAINT ORG_pkey PRIMARY KEY (Ed, Staff);

ALTER TABLE PAYS
   ADD CONSTRAINT PAYS_pkey PRIMARY KEY (Num);

ALTER TABLE PERS
   ADD CONSTRAINT PERS_pkey PRIMARY KEY (Num);

ALTER TABLE PRES
   ADD CONSTRAINT PRES_pkey PRIMARY KEY (Ed, Prod);

ALTER TABLE PROD
   ADD CONSTRAINT PROD_pkey PRIMARY KEY (Num);

ALTER TABLE STAFF
	ADD CONSTRAINT STAFF_pkey PRIMARY KEY (Pers);

ALTER TABLE TEST
   ADD CONSTRAINT TEST_pkey PRIMARY KEY (Num);

ALTER TABLE TADR
   ADD CONSTRAINT TADR_pkey PRIMARY KEY (Ent, Adr);

ALTER TABLE VELO
	ADD CONSTRAINT VELO_pkey PRIMARY KEY (Num);

GO
-- -----------------------------------------------------------------------
-- Cles etrangeres

ALTER TABLE ADR
   ADD CONSTRAINT ADR_fkey1 
   FOREIGN KEY (Loc) REFERENCES LOC;

ALTER TABLE CLIENT
   ADD CONSTRAINT CLIENT_fkey1 
   FOREIGN KEY (Pers) REFERENCES PERS;

ALTER TABLE CLIENT
   ADD CONSTRAINT CLIENT_fkey2 
   FOREIGN KEY (CantonOrigine) REFERENCES LISTE;

ALTER TABLE CONTACT
   ADD CONSTRAINT CONTACT_fkey1 
   FOREIGN KEY (Ent) REFERENCES ENT;

ALTER TABLE CONTACT
   ADD CONSTRAINT CONTACT_fkey2 
   FOREIGN KEY (Pers) REFERENCES PERS;

ALTER TABLE ED
   ADD CONSTRAINT ED_fkey1 
   FOREIGN KEY (Evmt) REFERENCES EVMT;

ALTER TABLE EFFECT
   ADD CONSTRAINT EFFECT_fkey1 
   FOREIGN KEY (Test) REFERENCES TEST;

ALTER TABLE EFFECT
   ADD CONSTRAINT EFFECT_fkey2 
   FOREIGN KEY (Client) REFERENCES CLIENT;

ALTER TABLE INSCR
   ADD CONSTRAINT INSCR_fkey1 
   FOREIGN KEY (JTest) REFERENCES JTEST;

ALTER TABLE INSCR
   ADD CONSTRAINT INSCR_fkey2 
   FOREIGN KEY (Client) REFERENCES CLIENT;

ALTER TABLE INVIT
   ADD CONSTRAINT INVIT_fkey1 
   FOREIGN KEY (Marq) REFERENCES MARQ;

ALTER TABLE INVIT
   ADD CONSTRAINT INVIT_fkey2 
   FOREIGN KEY (Ed) REFERENCES ED;

ALTER TABLE JTEST
   ADD CONSTRAINT JTEST_fkey1 
   FOREIGN KEY (Ed) REFERENCES ED;

ALTER TABLE LOC
   ADD CONSTRAINT LOC_fkey1 
   FOREIGN KEY (Pays) REFERENCES PAYS;

ALTER TABLE MARQ
   ADD CONSTRAINT MARQ_fkey1 
   FOREIGN KEY (Ent) REFERENCES ENT;

ALTER TABLE ORG
   ADD CONSTRAINT ORG_fkey1 
   FOREIGN KEY (Ed) REFERENCES ED;

ALTER TABLE ORG
   ADD CONSTRAINT ORG_fkey2 
   FOREIGN KEY (Staff) REFERENCES STAFF;

ALTER TABLE ORG
   ADD CONSTRAINT ORG_fkey3 
   FOREIGN KEY (RoleJoue) REFERENCES LISTE;

ALTER TABLE PRES
   ADD CONSTRAINT PRES_fkey1 
   FOREIGN KEY (Ed) REFERENCES ED;

ALTER TABLE PERS
   ADD CONSTRAINT PERS_fkey1 
   FOREIGN KEY (Adr) REFERENCES ADR;

ALTER TABLE PRES
   ADD CONSTRAINT PRES_fkey2 
   FOREIGN KEY (Prod) REFERENCES PROD;

ALTER TABLE PROD
   ADD CONSTRAINT PROD_fkey1 
   FOREIGN KEY (Marq) REFERENCES MARQ;

ALTER TABLE STAFF
   ADD CONSTRAINT STAFF_fkey1 
   FOREIGN KEY (Pers) REFERENCES PERS;

ALTER TABLE TEST
   ADD CONSTRAINT TEST_fkey1 
   FOREIGN KEY (JTest) REFERENCES JTEST;

ALTER TABLE TEST
   ADD CONSTRAINT TEST_fkey2 
   FOREIGN KEY (Prod) REFERENCES PROD;

ALTER TABLE TADR
   ADD CONSTRAINT TADR_fkey1 
   FOREIGN KEY (Ent) REFERENCES ENT;

ALTER TABLE TADR
   ADD CONSTRAINT TADR_fkey2 
   FOREIGN KEY (Adr) REFERENCES ADR;

ALTER TABLE TADR
   ADD CONSTRAINT TADR_fkey3 
   FOREIGN KEY (Designation) REFERENCES LISTE;

ALTER TABLE VELO
	ADD CONSTRAINT VELO_fkey1
	FOREIGN KEY (Num) REFERENCES PROD;

ALTER TABLE VELO
   ADD CONSTRAINT VELO_fkey2 
   FOREIGN KEY (TailleCadre) REFERENCES LISTE;

ALTER TABLE VELO
   ADD CONSTRAINT VELO_fkey3 
   FOREIGN KEY (UniteCadre) REFERENCES LISTE;

ALTER TABLE VELO
   ADD CONSTRAINT VELO_fkey4 
   FOREIGN KEY (TailleJantes) REFERENCES LISTE;

ALTER TABLE VELO
   ADD CONSTRAINT VELO_fkey5 
   FOREIGN KEY (UniteJantes) REFERENCES LISTE;
   
   GO

-- -------------------------------------------------------------------------------
-- -------------------------------------------------------------------------------
-- Contraintes

ALTER TABLE EVMT ADD
	CONSTRAINT EVMT_Nom_Unique UNIQUE(Nom);

ALTER TABLE LISTE ADD
	CONSTRAINT LISTE_NomTable_NomColonne_Valeur_Unique 
	UNIQUE(NomTable, NomColonne, Valeur);

ALTER TABLE LOC ADD
	CONSTRAINT LOC_NPA_Localite_Unique UNIQUE(NPA, Localite);

ALTER TABLE MARQ ADD
	CONSTRAINT MARQ_Designation_Unique UNIQUE(Designation);

ALTER TABLE PAYS ADD
	CONSTRAINT PAYS_NomFR_Unique UNIQUE(NomFR);

ALTER TABLE JTEST ADD
	CONSTRAINT JTEST_ED_DateJTest_Unique UNIQUE(Ed, DateJTest);

GO