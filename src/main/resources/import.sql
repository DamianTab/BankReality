INSERT INTO "NATURAL_PERSON" (NAME, SURNAME, ID_CARD)
VALUES ('Marian', 'Kowalski', 123456789);

INSERT INTO "CLIENT" (ADRESS, PHONE_NUMBER, NATURAL_PERSON_LOGIN)
VALUES ('ul. Wicherkiewicz 82', 111222333, NATURAL_PERSON_SEQUENCE.currval);

INSERT INTO "LEGAL_PERSON" (NIP, COMPANY_NAME, COMPANY_TYPE)
VALUES( 111222333444555666, 'Vertex sp. z.o.o.','Spółka Kapitałowa');

INSERT INTO "CLIENT" (ADRESS, PHONE_NUMBER, LEGAL_PERSON_LOGIN)
VALUES ('ul. Radziwiła 18', 555666777, LEGAL_PERSON_SEQUENCE.currval);

INSERT INTO "ACCOUNT" (BALANCE, FEES_AMOUNT, CREATION_DATE, LOGIN)
VALUES( 100000, 2, CURRENT_DATE, CLIENT_SEQUENCE.currval);

INSERT INTO "CREDIT" (LOAN_AMOUNT, INTEREST_RATE, LOAN_TIME, EMI, ACCOUNT_NUMBER, LOGIN)
VALUES( 50000, 5, 24, 1250, ACCOUNT_SEQUENCE.currval, CLIENT_SEQUENCE.currval);

INSERT INTO "INVESTMENT" (DEPOSIT_AMOUNT, EXPIRATION_DATE, AER, ACCOUNT_NUMBER)
VALUES( 25000, CURRENT_DATE , 3, ACCOUNT_SEQUENCE.currval);

INSERT INTO "BANK_TRANSFER"
    (TRANSFER_AMOUNT, TRANSFER_DATE, ACCOUNT_NUMBER_SENDER, ACCOUNT_NUMBER_DELIVER)
VALUES( 12500, CURRENT_DATE, 2000000, 2000010);
